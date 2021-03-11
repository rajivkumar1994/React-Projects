import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

// import ParentComp from "./components/PureCompDemo/ParentComp";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <ParentComp /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
