import React, { Component } from "react";
import Top from "../navbar.js";
import Grid from "./main.js";
import Social from "../social.js";
import Footer from "../footer.js";

export default class Disp extends Component {
  render() {
    return (
      <div>
        <Top />

        <Grid />
        <Social />

        <Footer />
      </div>
    );
  }
}
