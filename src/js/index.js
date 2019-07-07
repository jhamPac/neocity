import React from "react";
import ReactDOM from "react-dom";

import MainRouter from "./MainRouter";

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById("mount-point"));
};

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", () => render(MainRouter))
  : render(Application);
