import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Style
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ChakraProvider theme={theme}>
			<GlobalStyles />
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<App />
		</ChakraProvider>
	</BrowserRouter>
);
