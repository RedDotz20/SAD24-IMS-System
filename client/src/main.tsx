import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary";
import ErrorFallback from "./utils/ErrorFallback";
import theme from "./theme/Theme";

import "typeface-roboto";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ErrorBoundary>
			<ChakraProvider theme={theme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ChakraProvider>
		</ErrorBoundary>
	</React.StrictMode>
);
