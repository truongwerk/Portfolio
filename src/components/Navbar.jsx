/* eslint-disable react/prop-types */
import Logo from "./Logo";

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
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const LinkItem = ({ link, text, menu }) => {
	return (
		<a href={link}>
			<Button colorScheme="teal" variant="ghost" w={menu ? "full" : "auto"}>
				{text}
			</Button>
		</a>
	);
};

const Navbar = () => {
	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue("#f4ede4", "#202022")}
			zIndex={10}
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
					<LinkItem text="Projects" />
					<LinkItem text="Contact" />
				</Stack>
				<Box flex={1} align="right">
					<Box ml={2} display={{ base: "inline-block", md: "none" }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<GiHamburgerMenu />}
								variant="outlined"
								aria-label="Options"
							/>
							<MenuList>
								<LinkItem text="Projects" menu />
								<LinkItem text="Contacts" menu />
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
