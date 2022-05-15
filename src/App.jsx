//Style
import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Projects from "./components/Projects";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Container maxW="container.lg" pt={14}>
				<Routes>
					<Route path="/" element={<About />}></Route>
					<Route path="/projects" element={<Projects />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="*" element={<NoMatch />}></Route>
				</Routes>
			</Container>
		</div>
	);
};

export default App;
