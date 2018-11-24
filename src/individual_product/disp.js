import React, { Component } from "react";
import Top from "./navbar.js";
import Grid from "./main.js";
import Social from "./social.js";
import Footer from "./footer.js";
import Details from "./details.js";

export default class Disp extends Component {
  render() {
    return (
      <div>
        <Top />
        <hr />
        <hr />
        <hr />
        <Grid />
        <Details />
        <Social />
        <Footer />
      </div>
    );
  }
}
