import React from "react";
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const NoMatch = React.lazy(() => import("./components/NoMatch"));
const Projects = React.lazy(() => import("./components/Projects"));
const ProjectDetail = React.lazy(() => import("./components/ProjectDetail"));

import { Route, Routes, useLocation } from "react-router-dom";

//Have animations after unmount route
import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<About />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
				<Route path="/projects/:id" element={<ProjectDetail />} />
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="*" element={<NoMatch />}></Route>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoute;
