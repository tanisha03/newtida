import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import p from "../1.jpg";
import p1 from "../2.jpg";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm="10">
              <Row>
                <Col>
                  <div style={{ textAlign: "center" }}>
                    <h5>FASHION</h5>
                    <h2>How to style,fashion,makeup etc etc?</h2>
                    <h5>25 dec 2018</h5>
                    <img src={p} style={{ height: 500, width: 700 }} />
                    <p>
                      The college season is finally here and so is the daily
                      struggle of deciding what to wear. So, I decided to share
                      some outfit ideas that you guys can take inspiration from
                      and its then that I realized that, out of all the clothing
                      pieces that we own, skirts and dresses are the most
                      neglected ones. This might be because of the dress code in
                      some colleges or because we don’t associate skirts and
                      dresses with casual wear. So here are some ways in which
                      you can wear skirts/dresses to college without breaking
                      the dress code.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ textAlign: "center" }}>
                    <h5>FASHION</h5>
                    <h2>How to style,fashion,makeup etc etc?</h2>
                    <h5>25 dec 2018</h5>
                    <img src={p} style={{ height: 500, width: 700 }} />
                    <p>
                      The college season is finally here and so is the daily
                      struggle of deciding what to wear. So, I decided to share
                      some outfit ideas that you guys can take inspiration from
                      and its then that I realized that, out of all the clothing
                      pieces that we own, skirts and dresses are the most
                      neglected ones. This might be because of the dress code in
                      some colleges or because we don’t associate skirts and
                      dresses with casual wear. So here are some ways in which
                      you can wear skirts/dresses to college without breaking
                      the dress code.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ textAlign: "center" }}>
                    <h5>FASHION</h5>
                    <h2>How to style,fashion,makeup etc etc?</h2>
                    <h5>25 dec 2018</h5>
                    <img src={p} style={{ height: 500, width: 700 }} />
                    <p>
                      The college season is finally here and so is the daily
                      struggle of deciding what to wear. So, I decided to share
                      some outfit ideas that you guys can take inspiration from
                      and its then that I realized that, out of all the clothing
                      pieces that we own, skirts and dresses are the most
                      neglected ones. This might be because of the dress code in
                      some colleges or because we don’t associate skirts and
                      dresses with casual wear. So here are some ways in which
                      you can wear skirts/dresses to college without breaking
                      the dress code.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm="2">
              <Row>
                <Col>
                  <span style={{ backgroundColor: " #f3f509", padding: 5 }}>
                    ABOUT US
                  </span>
                  <p>
                    The college season is finally here and so is the daily
                    struggle of deciding what to wear. So, I decided to share
                    some outfit ideas that you guys can take inspiration from
                    and its then that I realized that, out of all the clothing
                    pieces that we own, skirts and dresses are the most
                    neglected ones.
                  </p>
                </Col>
              </Row>

              <Row>
                <Col sm="6">
                  <img src={p1} style={{ height: 100, width: 100 }} />
                </Col>
                <Col sm="6">
                  <img src={p1} style={{ height: 100, width: 100 }} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <span style={{ backgroundColor: " #f3f509", padding: 5 }}>
                    ABOUT US
                  </span>
                  <p>
                    The college season is finally here and so is the daily
                    struggle of deciding what to wear. So, I decided to share
                    some outfit ideas that you guys can take inspiration from
                    and its then that I realized that, out of all the clothing
                    pieces that we own, skirts and dresses are the most
                    neglected ones.
                  </p>
                </Col>
              </Row>

              <Row>
                <Col sm="6">
                  <img src={p1} style={{ height: 100, width: 100 }} />
                </Col>
                <Col sm="6">
                  <img src={p1} style={{ height: 100, width: 100 }} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
