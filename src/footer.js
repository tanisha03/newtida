import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <div style={{ background: "pink" }}>
        <Container>
          <Row>
            <Col sm="4">
              <div style={{ textAlign: "center" }}>
                <h3>NEED HELP</h3>
                <div>fdf</div>
                <div>fdf</div>
                <div>fdf</div>
              </div>
            </Col>
            <Col sm="4">
              <div style={{ textAlign: "center" }}>
                <h3>NEED HELP</h3>
                <div>fdf</div>
                <div>fdf</div>
                <div>fdf</div>
              </div>
            </Col>
            <Col sm="4">
              <div style={{ textAlign: "center" }}>
                <h3>NEED HELP</h3>
                <div>fdf</div>
                <div>fdf</div>
                <div>fdf</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
