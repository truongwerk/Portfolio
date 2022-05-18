import Navbar from "./components/Navbar";
import AnimatedRoute from "./AnimatedRoute";

//Style
import { Container, Heading } from "@chakra-ui/react";
import ThreeModel from "./components/ThreeModel";

const App = () => {
	return (
		<div className="app" style={{ minHeight: "100vh" }}>
			<Navbar />
			<Container maxW="container.md" pt={14} minH="calc(100vh - 80px)">
				<ThreeModel />
				<AnimatedRoute />
			</Container>
			<Heading textAlign="center" size="md" mt={8}  mb={3}>
				© {new Date().getFullYear()} Tong Quang Truong
			</Heading>
		</div>
	);
};

export default App;
