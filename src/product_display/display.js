import React, { Component } from "react";
import Top from "../navbar.js";
import Grid from "./grid.js";
import Social from "../social.js";
import Footer from "../footer.js";

export default class Display extends Component {
  render() {
    const header = {
      color: "black",
      fontSize: "50px",
      textAlign: "center",

      textColor: "#020302"
    };

    return (
      <div>
        <Top />
        <div
          style={{
            height: 50,
            borderBottom: "3px solid #020302",
            borderTop: "3px solid #020302",
            background: "#ffffff"
          }}
        />

        <div className="header" style={header}>
          <span style={{ borderBottom: "4px solid #020302" }}> TSHIRTS</span>
        </div>
        <hr />
        <Grid />
        <Social />

        <Footer />
      </div>
    );
  }
}
