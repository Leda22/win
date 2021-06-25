import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import { Auth } from "./Auth";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <Auth initialState={initialState} reducer={reducer} >
    <App />,
  </Auth>,
  document.getElementById("root")
);
