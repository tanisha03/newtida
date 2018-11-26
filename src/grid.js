import React, { Component } from "react";
import Example from "./products.js";
import Top from "./navbar.js";
import Car from "./carousel.js";
import "./grid.css";
import Social from "./social.js";
import Versocial from "./versocial.js";
import Footer from "./footer.js";

export default class Photo extends Component {
  render() {
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
        <Car />

        <div
          style={{
            marginLeft: 100,
            marginRight: 100,
            marginBottom: -14,
            borderRight: "3px solid #020302",
            borderLeft: "3px solid #020302",
            backgroundColor: "#ffffff"
          }}
        >
          <div className="txt" style={{ textAlign: "center" }}>
            <span
              style={{
                borderBottom: "4px solid #020302",
                fontFamily: "arial",
                textColor: "#020302"
              }}
            >
              COLLECTION
            </span>
          </div>
          <Example />

          <Social />
        </div>
        <Footer />
      </div>
    );
  }
}
