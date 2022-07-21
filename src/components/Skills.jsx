import PropTypes from "prop-types";

import { AspectRatio, Heading, Image } from "@chakra-ui/react";
import { Wrap, WrapItem, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

//FrontEnd
const frontEnd = [
	{ name: "HTML5", src: "/img/skills/front/html5.png" },
	{ name: "CSS3", src: "/img/skills/front/css3.png" },
	{ name: "JavaScript", src: "/img/skills/front/javascript.png" },
	{ name: "TypeScript", src: "/img/skills/front/typescript.png" },
	{ name: "React", src: "/img/skills/front/react.png" },
	{ name: "React Router", src: "/img/skills/front/Router.png" },
	{ name: "Zustand", src: "/img/skills/front/zustand.png" },
	{ name: "Chakra UI", src: "/img/skills/front/chakra.png" },
	{ name: "MUI", src: "/img/skills/front/MUI.png" },
];

//BackEnd
const backEnd = [{ name: "Firebase", src: "/img/skills/back/firebase.png" }];

//Miscellaneous
const misc = [
	{ name: "git", src: "/img/skills/miscellaneous/git.png" },
	{ name: "GitHub", src: "/img/skills/miscellaneous/github.png" },
	{ name: "NPM", src: "/img/skills/miscellaneous/npm.png" },
	{ name: "Webpack", src: "/img/skills/miscellaneous/webpack.png" },
	{ name: "Vite", src: "/img/skills/miscellaneous/vite.png" },
];

const Skills = () => {
	return (
		<>
			<Heading as="h4" fontSize={20} ml={{ base: 4, md: 8 }}>
				Front-End:
			</Heading>
			<Wrap mt={3} px={{ base: 4, md: 8 }} spacing={3}>
				{frontEnd.map((skill) => (
					<Skill key={skill.name} name={skill.name} src={skill.src} />
				))}
			</Wrap>
			<Heading as="h4" fontSize={20} ml={{ base: 4, md: 8 }} mt={5}>
				Back-End:
			</Heading>
			<Wrap mt={3} px={{ base: 4, md: 8 }} spacing={3}>
				{backEnd.map((skill) => (
					<Skill key={skill.name} name={skill.name} src={skill.src} />
				))}
			</Wrap>
			<Heading as="h4" fontSize={20} ml={{ base: 4, md: 8 }} mt={5}>
				Miscellaneous:
			</Heading>
			<Wrap mt={3} px={{ base: 4, md: 8 }} spacing={3}>
				{misc.map((skill) => (
					<Skill key={skill.name} name={skill.name} src={skill.src} />
				))}
			</Wrap>
		</>
	);
};

const Skill = ({ name, src }) => {
	return (
		<WrapItem
			as={motion.div}
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}
			transition="0.1s ease"
			py={2}
		>
			<Tooltip
				hasArrow
				label={name}
				fontSize="large"
				closeOnClick={false}
				bg={useColorModeValue("teal.700", "teal.200")}
			>
				<AspectRatio
					minW="80px"
					ratio={1}
					bg={useColorModeValue("gray.50", "gray.800")}
					borderRadius="2xl"
					overflow="hidden"
				>
					<Image
						src={src}
						alt={name}
						onContextMenu={(e) => {
							e.preventDefault();
						}}
					/>
				</AspectRatio>
			</Tooltip>
		</WrapItem>
	);
};
Skill.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
};

export default Skills;
