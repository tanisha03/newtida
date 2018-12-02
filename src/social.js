import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import { Container, Row, Col } from "reactstrap";

export default class Social extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row style={{}}>
            <Col xs="3">
              <div style={{ textAlign: "center" }}>
                <SocialIcon url="http://twitter.com" />
              </div>
            </Col>
            <Col xs="3">
              <div style={{ textAlign: "center" }}>
                <SocialIcon url="http://instagram.com" />
              </div>
            </Col>
            <Col xs="3">
              <div style={{ textAlign: "center" }}>
                <SocialIcon url="http://facebook.com" />
              </div>
            </Col>
            <Col xs="3">
              <div style={{ textAlign: "center" }}>
                <SocialIcon url="http://snapchat.com" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
