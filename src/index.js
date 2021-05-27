import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client/react";

import App from "./components/App";
import client from "./services/api";

import "./styles/global.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
