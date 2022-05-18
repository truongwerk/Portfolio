import {
	AspectRatio,
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

const Projects = () => {
	return (
		<Container
			as={motion.div}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
		>
			<Heading as="h3" fontSize={20} mb={4} variant="section-title">
				Projects
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
		</Container>
	);
};

const projectData = [
	{
		href: "fb-clone",
		title: "Facebook Clone",
		text: "A simple social app, you can post, like, unlike and comment.",
	},
	{
		href: "Memory-games",
		title: "Memory Games",
		text: "Train your memory muscles with Match Magic and Fruit Memorize!",
	},
	{
		href: "CV-Application",
		title: "CV Application",
		text: "Create a CV with: basic infos, contacts, skills...",
	},
	{
		href: "Fortnite-Item-Store",
		title: "Fortnite Item Store",
		text: "A shopping cart with fortnite database.",
	},
	{
		href: "Weather-App",
		title: "Weather App",
		text: "Check current weather with search location or gps.",
	},
	{
		href: "Todo-List",
		title: "Todo List",
		text: "A simple Todo List can divide by project, date count. ",
	},
];

const Project = ({ text, href, title, thumbnail }) => (
	<GridItem w="100%" align="center" cursor="pointer">
		<Link to={href}>
			<AspectRatio maxW="full" ratio={1.8}>
				<Image src={thumbnail} alt={title} borderRadius="xl" />
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
