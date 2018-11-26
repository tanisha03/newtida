import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <div style={{ background: "#020302", marginTop: 15 }}>
        <Container>
          <Row>
            <Col xs="4" style={{ marginTop: 20, marginBottom: 20 }}>
              <div style={{ textAlign: "center", color: "#f3f509" }}>
                <h3>NEED HELP</h3>
                <div>fdf</div>
                <div>fdf</div>
                <div>fdf</div>
              </div>
            </Col>
            <Col xs="4" style={{ marginTop: 20 }}>
              <div style={{ textAlign: "center", color: "#f3f509" }}>
                <h3>NEED HELP</h3>
                <div>fdf</div>
                <div>fdf</div>
                <div>fdf</div>
              </div>
            </Col>
            <Col xs="4" style={{ marginTop: 20 }}>
              <div style={{ textAlign: "center", color: "#f3f509" }}>
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
