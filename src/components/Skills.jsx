import { AspectRatio, Heading, Image } from "@chakra-ui/react";
import { Wrap, WrapItem, Tooltip, useColorModeValue } from "@chakra-ui/react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

//FontEnd
import html5 from "../img/skills/font/html5.png";
import css3 from "../img/skills/font/css3.png";
import javascript from "../img/skills/font/javascript.png";
import react from "../img/skills/font/react.png";

const fontEnd = [
	{ name: "HTML5", src: html5 },
	{ name: "CSS3", src: css3 },
	{ name: "Javascript", src: javascript },
	{ name: "React", src: react },
];

const Skills = () => {
	return (
		<>
			<Heading as="h4" fontSize={20} ml={{ base: 4, md: 8 }}>
				Font-End:
			</Heading>
			<Wrap mt={3} mx={{ base: 4, md: 8 }} spacing={4}>
				{fontEnd.map((skill) => (
					<Skill key={skill.name} name={skill.name} src={skill.src} />
				))}
			</Wrap>
		</>
	);
};

const Skill = ({ name, src }) => {
	return (
		<WrapItem>
			<Tooltip
				hasArrow
				label={name}
				bg={useColorModeValue("teal.700", "teal.200")}
			>
				<AspectRatio
					w="80px"
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
