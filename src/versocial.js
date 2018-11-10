import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { SocialIcon } from "react-social-icons";

export default class Versocial extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs="10" />
            <Col xs="2">
              <div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: -650,
                    marginBottom: 80
                  }}
                >
                  <SocialIcon url="http://twitter.com" />
                  <div>TWIITER</div>
                </div>

                <div style={{ textAlign: "center", marginBottom: 80 }}>
                  <SocialIcon url="http://instagram.com" />
                  <div>INSTAGRAM</div>
                </div>

                <div style={{ textAlign: "center", marginBottom: 80 }}>
                  <SocialIcon url="http://facebook.com" />
                  <div>FACEBOOK</div>
                </div>

                <div style={{ textAlign: "center" }}>
                  <SocialIcon url="http://snapchat.com" />
                  <div>SNAPCHAT</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
