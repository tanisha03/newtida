import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import { Container, Row, Col } from "reactstrap";

export default class Social extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="3">
              <div style={{ textAlign: "center" }}>
                <SocialIcon url="http://twitter.com" />
                <div>TWIITER</div>
              </div>
            </Col>
            <Col xs="3">
              <div style={{ textAlign: "center" }}>
                <SocialIcon url="http://instagram.com" />
                <div>INSTAGRAM</div>
              </div>
            </Col>
            <Col xs="3">
              <div style={{ textAlign: "center" }}>
                <SocialIcon url="http://facebook.com" />
                <div>FACEBOOK</div>
              </div>
            </Col>
            <Col xs="3">
              <div style={{ textAlign: "center" }}>
                <SocialIcon url="http://snapchat.com" />
                <div>SNAPCHAT</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}