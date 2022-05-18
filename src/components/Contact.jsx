import { Container, Heading } from "@chakra-ui/react";

import { motion } from "framer-motion";

const Contact = () => {
	return (
		<Container
			as={motion.div}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
		>
			<Heading>Contact</Heading>
		</Container>
	);
};

export default Contact;
