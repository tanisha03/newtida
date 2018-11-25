import React, { Component } from "react";
import Top from "../navbar.js";
import Grid from "./grid.js";
import Social from "./social.js";
import Footer from "../footer.js";

export default class Display extends Component {
  render() {
    const header = {
      padding: "25px 0px 0px 700px",
      color: "black",
      fontSize: "50px"
    };

    return (
      <div>
        <Top />
        <hr />
        <hr />
        <hr />
        <div className="header" style={header}>
          TSHIRTS
        </div>
        <hr />
        <Grid />
        <Social />
        <Footer />
      </div>
    );
  }
}
