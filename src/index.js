import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    color: #fff;
    background: #826aed;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

ReactDOM.render(
  <React.Fragment>
    <App />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById("root")
);
