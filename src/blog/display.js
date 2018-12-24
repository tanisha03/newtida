import React, { Component } from "react";
import Top from "../navbar.js";
import Jumbo from "./jumbo.js";
import Main from "./main.js";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <Top />
        <Jumbo />
        <Main />
      </div>
    );
  }
}
