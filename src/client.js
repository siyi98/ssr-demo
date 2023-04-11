import React from "react";
import { hydrate } from "react-dom";
import App from "./components/App";

hydrate(
  <App {...window.__APP_INITIAL_STATE__} />,
  document.getElementById("root")
);
