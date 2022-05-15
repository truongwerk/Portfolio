//Style
import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Container maxW="container.lg" pt={14}></Container>
		</div>
	);
};

export default App;
