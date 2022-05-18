import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<About />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="*" element={<NoMatch />}></Route>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoute;
