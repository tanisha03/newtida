import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Photo from "./grid";
import Display from "./product_display/display.js";
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Photo} />
      <Route path="/tshirts" component={Display} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
