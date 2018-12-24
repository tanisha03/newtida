import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { SocialIcon } from "react-social-icons";

export default class Versocial extends Component {
  render() {
    return (
      <div>
        <div
          style={{ marginLeft: 1470, marginTop: -400, background: "#ffffff" }}
        >
          <SocialIcon url="http://twitter.com" />
        </div>

        <div style={{ marginLeft: 1470, background: "#ffffff" }}>
          <SocialIcon url="http://instagram.com" />
        </div>

        <div style={{ marginLeft: 1470, background: "#ffffff" }}>
          <SocialIcon url="http://facebook.com" />
        </div>

        <div
          style={{ marginLeft: 1470, background: "#ffffff", marginBottom: 200 }}
        >
          <SocialIcon url="http://snapchat.com" />
        </div>
      </div>
    );
  }
}
