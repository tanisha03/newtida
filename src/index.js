import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import ScrollToTopRoute from "./scroll.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Photo from "./grid";
import Display from "./product_display/display.js";
import CartDisp from "./cart/display.js";
import Blog from "./blog/display.js";

import Disp from "./individual_product/disp.js";
const store = createStore(reducers);
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Photo} />
      <ScrollToTopRoute path="/tshirts" component={Display} />
      <ScrollToTopRoute path="/individual" component={Disp} />
      <ScrollToTopRoute path="/cart" component={CartDisp} />
      <ScrollToTopRoute path="/blog" component={Blog} />
    </div>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{routing}</Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
