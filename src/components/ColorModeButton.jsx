//Style
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { HiSun, HiMoon } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const ColorModeButton = () => {
	const { toggleColorMode } = useColorMode();

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.div
				style={{ display: "inline-block" }}
				key={useColorModeValue("light", "dark")}
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				transition={{ duration: 0.1 }}
			>
				<IconButton
					aria-label="toggle theme"
					colorScheme={useColorModeValue("purple", "orange")}
					icon={useColorModeValue(<HiMoon />, <HiSun />)}
					onClick={toggleColorMode}
				></IconButton>
			</motion.div>
		</AnimatePresence>
	);
};

export default ColorModeButton;
