//Style
import {
	Button,
	Container,
	Heading,
	Link,
	ListItem,
	List,
	Box,
	useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import SlideTransition from "../components/SlideTransition";

const Contact = () => {
	const linkColor = useColorModeValue("#2C7A7B", "#81E6D9");

	return (
		<Container
			as={motion.div}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
		>
			<Heading as="h2">Contact:</Heading>
			<SlideTransition time={200}>
				<Heading as="h3" variant="section-title">
					Social media:
				</Heading>
				<List spacing={1}>
					<ListItem>
						<Link
							href="https://www.facebook.com/t0ngquangtruong"
							target="_blank"
						>
							<Button
								variant="ghost"
								colorScheme="teal"
								leftIcon={<FaFacebook />}
							>
								Facebook
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://x.com/TongQuangTruong" target="_blank">
							<Button
								variant="ghost"
								colorScheme="teal"
								leftIcon={<FaTwitter />}
							>
								Twitter
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://github.com/truongwerk" target="_blank">
							<Button
								variant="ghost"
								colorScheme="teal"
								leftIcon={<FaGithub />}
							>
								Github
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link
							href="https://discord.com/users/861982917899059201"
							target="_blank"
						>
							<Button
								variant="ghost"
								colorScheme="teal"
								leftIcon={<FaDiscord />}
							>
								Discord
							</Button>
						</Link>
					</ListItem>
				</List>
			</SlideTransition>
			<SlideTransition time={300}>
				<Heading as="h3" variant="section-title">
					Email:
				</Heading>
				<Box display="flex" alignItems="center" color={linkColor} fontSize="xl">
					<MdMailOutline />
					<Link
						px={2}
						as="b"
						color={linkColor}
						href="mailto:truongwerk@gmail.com"
					>
						truongwerk@gmail.com
					</Link>
				</Box>
			</SlideTransition>
		</Container>
	);
};

export default Contact;
