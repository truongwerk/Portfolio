import Navbar from "./components/Navbar";
import AnimatedRoute from "./AnimatedRoute";
import React from "react";

//Lazy load 3d model
const ThreeModel = React.lazy(() => import("./components/ThreeModel"));

//Style
import { Container, Heading } from "@chakra-ui/react";

const App = () => {
	return (
		<div className="app" style={{ minHeight: "100vh" }}>
			<Navbar />
			<Container maxW="container.md" pt={14} minH="calc(100vh - 80px)">
				<ThreeModel />
				<AnimatedRoute />
			</Container>
			<Heading textAlign="center" size="md" mt={8} mb={3}>
				© {new Date().getFullYear()} Tong Quang Truong
			</Heading>
		</div>
	);
};

export default App;
