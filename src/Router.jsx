import React from "react";
const About = React.lazy(() => import("./pages/About"));
const Experiences = React.lazy(() => import("./pages/Experiences"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Projects = React.lazy(() => import("./pages/Projects"));
const ProjectDetail = React.lazy(() => import("./pages/ProjectDetail"));


import { Route, Routes, useLocation } from "react-router-dom";

//Have animations after unmount route
import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<About />} />
				<Route path="/experiences" element={<Experiences />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:id" element={<ProjectDetail />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoute;
