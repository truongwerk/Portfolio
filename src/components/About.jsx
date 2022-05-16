//Style
import {
	AspectRatio,
	Box,
	Container,
	Heading,
	Image,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import logo from "../img/3x4.jpg";
import SlideTransition from "./SlideTransition";

const About = () => {
	return (
		<Container>
			<SlideTransition>
				<Box
					borderRadius="lg"
					bg={useColorModeValue("teal.100", "teal.600")}
					p={3}
					mb={6}
					align="center"
				>{`Hello, I'm a font-end developer live in VietNam.`}</Box>
			</SlideTransition>
			<SlideTransition time={200}>
				<Box display={{ md: "flex" }}>
					<Box flexGrow={1}>
						<Heading as="h2" variant="page-title">
							Tong Quang Truong
						</Heading>
						<Text>Font-End Developer</Text>
					</Box>
					<Box
						flexShrink={0}
						mt={{ base: 4, md: 0 }}
						ml={{ md: 6 }}
						align="center"
					>
						<AspectRatio ratio={1} w="100px">
							<Image
								src={logo}
								alt="profileImage"
								borderColor="whiteAlpha.800"
								borderWidth={2}
								borderStyle="solid"
								borderRadius="full"
							/>
						</AspectRatio>
					</Box>
				</Box>
			</SlideTransition>
			<SlideTransition time={400}>
				<Heading as="h3" variant="section-title">
					About me:
				</Heading>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
					animi hic tenetur quidem, consequuntur deserunt corporis sed officia
					minima rem sint, nemo, temporibus non vitae ullam quae ipsa eum
					exercitationem!
				</Text>
			</SlideTransition>
		</Container>
	);
};

export default About;
