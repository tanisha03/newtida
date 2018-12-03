import React, { Component } from "react";
import Example from "./products.js";
import Top from "./navbar.js";
import Car from "./carousel.js";
import "./grid.css";
import Social from "./social.js";
import Versocial from "./versocial.js";
import Footer from "./footer.js";
import { Manager, Reference, Popper } from "react-popper";

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

        <Manager>
          <Reference>{({ ref }) => <Car ref={ref} />}</Reference>
          <Popper placement="bottom">
            {({ ref, style, placement, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}>
                <Versocial />
                <div ref={arrowProps.ref} style={arrowProps.style} />
              </div>
            )}
          </Popper>
        </Manager>

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
