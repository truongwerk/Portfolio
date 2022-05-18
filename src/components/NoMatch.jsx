import {
	Button,
	Box,
	Container,
	Divider,
	Heading,
	Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NoMatch = () => {
	return (
		<Container
			as={motion.div}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
		>
			<Heading as="h1">Not Found</Heading>
			<Text>{`The page you're looking for was not found.`}</Text>
			<Divider my={6} />
			<Box my={6} align="center">
				<Button as={Link} to="/" colorScheme="teal">
					Return to home
				</Button>
			</Box>
		</Container>
	);
};

export default NoMatch;
