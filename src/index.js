import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTopRoute from "./scroll.js";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Photo from "./grid";
import Display from "./product_display/display.js";

import Disp from "./individual_display/disp.js";
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Photo} />
      <ScrollToTopRoute path="/tshirts" component={Display} />
      <ScrollToTopRoute path="/individual" component={Disp} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
