
//Style
import {
	AspectRatio,
	Box,
	Container,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import SlideTransition from "../components/SlideTransition";
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
			<SlideTransition time={100}>
				<Box display={{ md: "flex" }} alignItems='center'>
					<Box flexGrow={1}>
						<Heading as="h2" variant="page-title">
							Fdata - Intern
						</Heading>
						<Text>2022-2024</Text>
						<Text> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
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
			<Box h={8} />
			<SlideTransition time={200}>
				<Box display={{ md: "flex" }}>
					<Box flexGrow={1}>
						<Heading as="h2" variant="page-title">
							Fdata - Intern
						</Heading>
						<Text>2022-2024</Text>
						<Text>  </Text>
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
		</Container>
	);
};

export default About;