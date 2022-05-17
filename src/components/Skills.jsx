import { AspectRatio, Heading, Image } from "@chakra-ui/react";
// import styled from "@emotion/styled";
import { Wrap, WrapItem, Tooltip, useColorModeValue } from "@chakra-ui/react";
import PropTypes from "prop-types";

//FontEnd
const fontEnd = [
	{ name: "HTML5", src: "/img/skills/font/html5.png" },
	{ name: "CSS3", src: "/img/skills/font/css3.png" },
	{ name: "Javascript", src: "/img/skills/font/javascript.png" },
	{ name: "React", src: "/img/skills/font/react.png" },
	{ name: "React Router", src: "/img/skills/font/Router.png" },
	{ name: "Zustand", src: "/img/skills/font/zustand.png" },
	{ name: "Chakra UI", src: "/img/skills/font/chakra.png" },
	{ name: "MUI", src: "/img/skills/font/MUI.png" },
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
				Font-End:
			</Heading>
			<Wrap mt={3} mx={{ base: 4, md: 8 }} spacing={3}>
				{fontEnd.map((skill) => (
					<Skill key={skill.name} name={skill.name} src={skill.src} />
				))}
			</Wrap>
			<Heading as="h4" fontSize={20} ml={{ base: 4, md: 8 }} mt={5}>
				Back-End:
			</Heading>
			<Wrap mt={3} mx={{ base: 4, md: 8 }} spacing={3}>
				{backEnd.map((skill) => (
					<Skill key={skill.name} name={skill.name} src={skill.src} />
				))}
			</Wrap>
			<Heading as="h4" fontSize={20} ml={{ base: 4, md: 8 }} mt={5}>
				Miscellaneous:
			</Heading>
			<Wrap mt={3} mx={{ base: 4, md: 8 }} spacing={3}>
				{misc.map((skill) => (
					<Skill key={skill.name} name={skill.name} src={skill.src} />
				))}
			</Wrap>
		</>
	);
};

// TODO: cant scale out of <AspectRatio/>
// const HoverBox = styled.div`
// 	&:hover img {
// 		transition: all 0.3s ease;
// 		transform: scale(1.1);
// 	}
// `;

const Skill = ({ name, src }) => {
	return (
		<WrapItem>
			<Tooltip
				hasArrow
				label={name}
				bg={useColorModeValue("teal.700", "teal.200")}
			>
				<AspectRatio
					minW="80px"
					ratio={1}
					bg={useColorModeValue("gray.50", "gray.800")}
					borderRadius="2xl"
					overflow="hidden"
				>
					<Image src={src} alt={name} />
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
