import { Global } from "@emotion/react";

const GlobalStyles = () => (
	<Global
		styles={`	
		@import url('https://fonts.googleapis.com/css2?family=Dekko&family=Roboto+Condensed:wght@300;400;700&display=swap');

		/* Zoom scale for larger screen */
		@media only screen and (min-width: 1600px) {
			body {
				zoom: 1.2; 
			}
		}
		`}
	/>
);

export default GlobalStyles;
