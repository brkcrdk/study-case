import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "styles/globalStyles";
import "styles/libraryStyles.css";
import App from "./App";
import { Providers } from "store";
import { Modal } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
      <GlobalStyle />
      <Modal />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
