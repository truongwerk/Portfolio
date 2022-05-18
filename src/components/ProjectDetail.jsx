import {
	Badge,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Container,
	Heading,
	Stack,
	Image,
	Text,
	useColorModeValue,
	Link as ChakraLink,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AiOutlineCaretRight } from "react-icons/ai";
import projectData from "../projectData";

const ProjectDetail = () => {
	const navigate = useNavigate();
	const location = useLocation().pathname.slice(10);
	const [data, setData] = useState({
		href: "",
		title: "",
		image: 0,
		live: "#",
		code: "#",
		features: [],
	});
	const [another, setAnother] = useState([]);
	useEffect(() => {
		checkValid(location);
	}, []);

	useEffect(() => {
		let array = [];
		for (let i = 2; i <= data.image; i++) {
			array.push(i);
		}
		setAnother(array);
	}, [data]);

	const checkValid = (location) => {
		for (let i = 0; i < projectData.length; i++) {
			if (location === projectData[i].href) {
				setData(projectData[i]);
				return;
			}
		}
		navigate("/404");
	};
	return (
		<Container
			as={motion.div}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
		>
			<Bread href={data.href} />
			{data.href === "" ? null : (
				<Box my={4}>
					<Heading as="h2" variant="section-title">
						{data.title}
					</Heading>
					<Image src={`/img/projects/${data.href}/1.png`} borderRadius="lg" />
					<Text textAlign="justify" fontSize={18} mt={4}>
						{data.text}
					</Text>
					<Stack mt={4} spacing={3}>
						<Stat stat="Live Demo:">
							<ChakraLink href={data.live} target="_blank">
								{data.live}
							</ChakraLink>
						</Stat>
						<Stat stat="Code:">
							<ChakraLink href={data.code} target="_blank">
								{data.code}
							</ChakraLink>
						</Stat>
						<Box>
							<Stat stat="Features:" />
							<UnorderedList>
								{data.features?.map((item) => (
									<ListItem key={item}>{item}</ListItem>
								))}
							</UnorderedList>
						</Box>
						<Box>
							<Stat stat="Build with:" />
							<UnorderedList>
								{data.build?.map((item) => (
									<ListItem key={item}>{item}</ListItem>
								))}
							</UnorderedList>
						</Box>
						{another.map((item) => (
							<Image
								key={item}
								src={`/img/projects/${data.href}/${item}.png`}
								borderRadius="lg"
							></Image>
						))}
					</Stack>
				</Box>
			)}
			<Bread href={data.href} />
		</Container>
	);
};

// eslint-disable-next-line react/prop-types
const Stat = ({ stat, children }) => (
	<Stack
		wrap={true}
		alignItems="flex-start"
		direction={{ base: "column", md: "row" }}
		fontSize={18}
	>
		<Badge colorScheme="teal" fontSize={18}>
			{stat}
		</Badge>
		{children}
	</Stack>
);

const Bread = ({ href }) => (
	<Breadcrumb
		spacing={2}
		separator={<AiOutlineCaretRight />}
		fontSize={20}
		color={useColorModeValue("teal.800", "teal.100")}
	>
		<BreadcrumbItem>
			<BreadcrumbLink as={Link} to="/projects">
				Projects
			</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbItem>
			<BreadcrumbLink isCurrentPage>{href}</BreadcrumbLink>
		</BreadcrumbItem>
	</Breadcrumb>
);
Bread.propTypes = {
	href: PropTypes.string,
};

export default ProjectDetail;
