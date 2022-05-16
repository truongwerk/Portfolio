import { Link } from "react-router-dom";

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
			<Link to="/">
				<LogoBox>
					<Text
						color={useColorModeValue("teal", "whiteAlpha900")}
						fontSize="30px"
					>
						<FaRobot />
					</Text>
					<Text
						fontFamily="Dekko"
						fontWeight="bold"
						ml={3}
						fontSize="24px"
						letterSpacing="tighter"
					>
						Quang Truong
					</Text>
				</LogoBox>
			</Link>
		</>
	);
};

export default Logo;
