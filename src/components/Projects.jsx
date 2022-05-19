import {
	AspectRatio,
	Button,
	Container,
	GridItem,
	Heading,
	Image,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import projectData from "../projectData";

const Projects = () => {
	return (
		<Container
			as={motion.div}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
		>
			<Heading as="h2" mb={4} >
				Projects:
			</Heading>
			<SimpleGrid columns={[1, 1, 2]} spacing={6} my={4}>
				{projectData.map((item) => (
					<Project
						key={item.href}
						href={item.href}
						title={item.title}
						thumbnail={`/img/projects/${item.href}/1.png`}
						text={item.text}
					/>
				))}
			</SimpleGrid>
			<a href="https://github.com/truongwerk" target="_blank" rel="noreferrer">
				<Button
					colorScheme="teal"
					variant="outline"
					leftIcon={<FaGithub />}
					w="full"
					mt={4}
					fontSize="lg"
				>
					Github
				</Button>
			</a>
		</Container>
	);
};



const Project = ({ text, href, title, thumbnail }) => (
	<GridItem w="100%" align="center" cursor="pointer">
		<Link to={href}>
			<AspectRatio maxW="full" ratio={1.8}>
				<Image src={thumbnail} alt={title} borderRadius="md" />
			</AspectRatio>
			<Heading as="h4" fontSize={20} my={2}>
				{title}
			</Heading>
			<Text>{text}</Text>
		</Link>
	</GridItem>
);
Project.propTypes = {
	href: PropTypes.string,
	title: PropTypes.string,
	thumbnail: PropTypes.string,
	text: PropTypes.string,
};

export default Projects;
