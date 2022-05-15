//Style
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaRobot } from "react-icons/fa";

const LogoBox = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	&:hover svg {
		transform: rotate(-20deg);
	}
`;

const Logo = () => {
	return (
		<>
			<a href="#">
				<LogoBox>
					<Text
						color={useColorModeValue("teal", "whiteAlpha900")}
						fontSize="30px"
					>
						<FaRobot />
					</Text>
					<Text
						fontFamily="M PLUS Rounded 1c"
						fontWeight="bold"
						ml={3}
						fontSize="18px"
						letterSpacing="tighter"
					>
						Quang Truong
					</Text>
				</LogoBox>
			</a>
		</>
	);
};

export default Logo;
