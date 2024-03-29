import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/indexStore";
import App from "./js/components/App";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
