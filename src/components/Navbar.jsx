import PropTypes from "prop-types";
import Logo from "./Logo";
import ColorModeButton from "./ColorModeButton";
import { Link, useNavigate } from "react-router-dom";

//Style
import {
	Box,
	Button,
	Container,
	Flex,
	IconButton,
	Menu,
	MenuButton,
	MenuList,
	Stack,
	useColorModeValue,
	Link as ChakraLink,
	MenuItem,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const LinkItem = ({ link, text }) => {
	return (
		<Button as={Link} to={link || ""} colorScheme="teal" variant="ghost">
			{text}
		</Button>
	);
};
LinkItem.propTypes = {
	link: PropTypes.string,
	text: PropTypes.string,
};

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue("#f4ede4", "#202022")}
			zIndex={1}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.lg"
				wrap="wrap"
				alignItems="center"
				justifyContent="space-between"
			>
				<Flex align="center" mr={5}>
					<Logo />
				</Flex>
				<Stack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					w={{ base: "full", md: "auto" }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<LinkItem text="Projects" link="/projects" />
					<LinkItem text="Contact" link="/contact" />
					<LinkItem text="404 " link="/404" />
				</Stack>
				<Box flex={1} align="right">
					<ColorModeButton />
					<Box ml={2} display={{ base: "inline-block", md: "none" }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<GiHamburgerMenu />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<MenuItem
									as={ChakraLink}
									onClick={() => {
										navigate("/");
									}}
								>
									About
								</MenuItem>
								<MenuItem
									as={ChakraLink}
									onClick={() => {
										navigate("/projects");
									}}
								>
									Projects
								</MenuItem>
								<MenuItem
									as={ChakraLink}
									onClick={() => {
										navigate("/contact");
									}}
								>
									Contact
								</MenuItem>
								<MenuItem
									as={ChakraLink}
									onClick={() => {
										navigate("/404");
									}}
								>
									404 Page
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
