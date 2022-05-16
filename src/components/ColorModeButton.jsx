//Style
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { HiSun, HiMoon } from "react-icons/hi";

const ColorModeButton = () => {
	const {toggleColorMode} = useColorMode();

	return (
		<IconButton
			aria-label="toggle theme"
			colorScheme={useColorModeValue("purple", "orange")}
			icon={useColorModeValue(<HiMoon />, <HiSun />)}
			onClick={toggleColorMode}
		></IconButton>
	);
};

export default ColorModeButton;
