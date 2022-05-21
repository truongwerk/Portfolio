import Skills from "./Skills";

//Style
import {
	AspectRatio,
	Box,
	Button,
	Container,
	Heading,
	Image,
	Link,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { MdDownload } from "react-icons/md";
import SlideTransition from "./SlideTransition";
import { motion } from "framer-motion";

const About = () => {
	return (
		<Container
			maxW="550px"
			as={motion.div}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
		>
			<Box
				borderRadius="lg"
				bg={useColorModeValue("teal.100", "teal.600")}
				p={3}
				mb={6}
				align="center"
			>{`Hi!, I'm a front-end developer from VietNam.`}</Box>
			<SlideTransition time={100}>
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
								src="/img/3x4.jpg"
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
			<SlideTransition time={200}>
				<Heading as="h3" variant="section-title">
					About me:
				</Heading>
				<Text textAlign="justify">
					Welcome! My name is Tong Quang Truong, I am a self-taught developer.
					Starting from no-code in January of 2021, I became obsessed with the
					world of programming. Going through resources such as{" "}
					<Link href="https://www.theodinproject.com/" isExternal>
						The Odin Project
					</Link>
					,{" "}
					<Link href="https://leetcode.com/" isExternal>
						LeetCode
					</Link>
					, and{" "}
					<Link href="https://youtube.com/" isExternal>
						Youtube
					</Link>
					. I have been developing the necessary skills for becoming a Font-End
					developer.
				</Text>
				<Box display="flex" justifyContent="center" mt={3}>
					<a href="/TongQuangTruong.pdf" target="_blank">
						<Button colorScheme="teal" rightIcon={<MdDownload />}>
							Download my CV
						</Button>
					</a>
				</Box>
			</SlideTransition>
			<SlideTransition time={300}>
				<Heading as="h3" variant="section-title">
					I ♥:
				</Heading>
				<Text textAlign="justify">
					Music, Rpg Games, Card Games and Programming.
				</Text>
			</SlideTransition>
			<SlideTransition time={400}>
				<Heading as="h3" variant="section-title">
					Familiar with:
				</Heading>
				<Skills />
			</SlideTransition>
		</Container>
	);
};

export default About;
