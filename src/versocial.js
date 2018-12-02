import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { SocialIcon } from "react-social-icons";

export default class Versocial extends Component {
  render() {
    return (
      <div>
        <div style={{ marginLeft: 1470, marginTop: 150 }}>
          <SocialIcon url="http://twitter.com" />
        </div>

        <div style={{ textAlign: "right" }}>
          <SocialIcon url="http://instagram.com" />
        </div>

        <div style={{ textAlign: "right" }}>
          <SocialIcon url="http://facebook.com" />
        </div>

        <div style={{ textAlign: "right" }}>
          <SocialIcon url="http://snapchat.com" />
        </div>
      </div>
    );
  }
}
