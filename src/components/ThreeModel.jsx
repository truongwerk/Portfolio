import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//Style
import { Box, Spinner } from "@chakra-ui/react";

//Make Ease Out Model 3d rotate
function easeOutCirc(x) {
	return Math.sqrt(1 - Math.pow(x - 1, 4));
}

//Make model animating with THREE.js clock
let mixer;
const clock = new THREE.Clock();

//Loading model, Return a promise model.
function loadGLTFModel(
	scene,
	glbPath,
	options = { receiveShadow: true, castShadow: true }
) {
	const { receiveShadow, castShadow } = options;
	return new Promise((resolve, reject) => {
		const loader = new GLTFLoader();
		loader.load(
			glbPath,
			(gltf) => {
				//Set model position, shadow...
				const obj = gltf.scene;
				obj.name = "model";
				obj.position.x = 0;
				obj.position.y = 0;
				obj.receiveShadow = receiveShadow;
				obj.castShadow = castShadow;
				scene.add(obj);
				//Make model's animation play
				mixer = new THREE.AnimationMixer(obj);
				mixer.clipAction(gltf.animations[0]).play();
				obj.traverse(function (child) {
					if (child.isMesh) {
						child.castShadow = castShadow;
						child.receiveShadow = receiveShadow;
					}
				});
				resolve(obj);
			},
			undefined,
			function (error) {
				reject(error);
			}
		);
	});
}

const ThreeModel = () => {
	const refContainer = useRef();
	const [loading, setLoading] = useState(true);
	const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
	const [renderer, setRenderer] = useState();
	const [initialCameraPosition] = useState(
		new THREE.Vector3(
			20 * Math.sin(0.2 * Math.PI),
			10,
			20 * Math.cos(0.2 * Math.PI)
		)
	);
	const [scene] = useState(new THREE.Scene());

	const handleWindowResize = useCallback(() => {
		const { current: container } = refContainer;
		if (container && renderer) {
			const scW = container.clientWidth;
			const scH = container.clientHeight;
			renderer.setSize(scW, scH);
		}
	}, [renderer]);

	useEffect(() => {
		const { current: container } = refContainer;
		if (container && !renderer) {
			const scW = container.clientWidth;
			const scH = container.clientHeight;
			const renderer = new THREE.WebGLRenderer({
				antialias: true,
				alpha: true,
			});
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(scW, scH);
			renderer.outputEncoding = THREE.sRGBEncoding;
			container.appendChild(renderer.domElement);
			setRenderer(renderer);

			const scale = scH * 0.005 + 0.2;
			const camera = new THREE.OrthographicCamera(
				-scale,
				scale,
				scale,
				-scale,
				0.0001,
				50000
			);
			camera.position.copy(initialCameraPosition);
			camera.lookAt(target);

			const ambientLight = new THREE.AmbientLight(0xcccccc, 2);
			scene.add(ambientLight);

			const controls = new OrbitControls(camera, renderer.domElement);
			controls.autoRotate = true;
			controls.target = target;

			loadGLTFModel(scene, "/model/smolAme/scene.gltf", {
				receiveShadow: true,
				castShadow: true,
			}).then(() => {
				animate();
				setLoading(false);
			});

			let req = null;
			let frame = 0;
			const animate = () => {
				req = requestAnimationFrame(animate);
				const delta = clock.getDelta();
				mixer.update(delta);
				frame = frame <= 100 ? frame + 1 : frame;

				if (frame <= 100) {
					const p = initialCameraPosition;
					const rotSpeed = -easeOutCirc(frame / 100) * Math.PI * 20;

					camera.position.y = 5;
					camera.position.x =
						p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
					camera.position.z =
						p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
					camera.lookAt(target);
				} else {
					controls.update();
				}

				renderer.render(scene, camera);
			};

			return () => {
				console.log("unmount");
				cancelAnimationFrame(req);
				renderer.dispose();
			};
		}
	}, []);

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize, false);
		return () => {
			window.removeEventListener("resize", handleWindowResize, false);
		};
	}, [renderer, handleWindowResize]);

	return (
		<Box
			ref={refContainer}
			className="threeModel"
			m="auto"
			mt={["-20px", "-60px", "-120px"]}
			mb={2}
			w={[280, 420, 540]}
			h={[280, 420, 540]}
			position="relative"
		>
			{loading && (
				<Spinner
					size="xl"
					position="absolute"
					left="50%"
					top="50%"
					ml="calc(0px - var(--spinner-size)/2)"
					mt="calc(0px - var(--spinner-size))"
				/>
			)}
		</Box>
	);
};

export default ThreeModel;
