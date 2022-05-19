import { useRef } from "react";
import emailjs from "@emailjs/browser";

//Style
import {
	Button,
	Container,
	Heading,
	Link,
	ListItem,
	List,
	SimpleGrid,
	GridItem,
	useColorModeValue,
	Input,
	Textarea,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import SlideTransition from "./SlideTransition";

const Contact = () => {
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
						<Link href="https://twitter.com/TongQuangTruong" target="_blank">
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
				<Email />
			</SlideTransition>
		</Container>
	);
};

const Email = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm("gmail", "portfolio", form.current, "pPughlzwIJajDOp2L")
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<SimpleGrid my={3} columns={2} gridGap={2}>
				<GridItem colSpan={{ base: 2, sm: 1 }}>
					<Input
						name="name"
						variant="filled"
						focusBorderColor="teal.500"
						placeholder="Name"
						_placeholder={{ color: useColorModeValue("gray.900", "gray.50") }}
						size="lg"
						required
					/>
				</GridItem>
				<GridItem colSpan={{ base: 2, sm: 1 }}>
					<Input
						name="email"
						variant="filled"
						focusBorderColor="teal.500"
						placeholder="Email"
						_placeholder={{ color: useColorModeValue("gray.900", "gray.50") }}
						size="lg"
						required
						type="email"
					/>
				</GridItem>
				<GridItem colSpan={2}>
					<Input
						name="subject"
						variant="filled"
						focusBorderColor="teal.500"
						placeholder="Subject"
						_placeholder={{ color: useColorModeValue("gray.900", "gray.50") }}
						size="lg"
						required
					/>
				</GridItem>
				<GridItem colSpan={2}>
					<Textarea
						name="message"
						variant="filled"
						focusBorderColor="teal.500"
						placeholder="Message"
						_placeholder={{ color: useColorModeValue("gray.900", "gray.50") }}
						resize="none"
						size="lg"
						required
					/>
				</GridItem>
			</SimpleGrid>
			<Button variant="outline" w="full" colorScheme="teal" type="submit">
				Send
			</Button>
		</form>
	);
};

export default Contact;
