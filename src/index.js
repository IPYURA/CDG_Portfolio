import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import mainTheme from "./theme";

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  margin:0;
  padding:0;
}
a {
  color:#1a1a1a;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
