/* eslint-disable react/prop-types */

import { useDisclosure, SlideFade } from "@chakra-ui/react";
import { useEffect } from "react";

const SlideTransition = ({ time, children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	useEffect(() => {
		setTimeout(() => {
			onOpen();
		}, time || 0);
		return () => {
			onClose();
		};
	}, []);
	return (
		<SlideFade direction="bottom" in={isOpen} unmountOnExit>
			{children}
		</SlideFade>
	);
};

export default SlideTransition;
