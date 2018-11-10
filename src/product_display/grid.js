import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import p1 from "./sample.jpg";
import "./grid.css";
import { StickyContainer, Sticky } from "react-sticky";

export default class Grid extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm="2">
              <StickyContainer>
                <Sticky>
                  <div>abc</div>
                </Sticky>
              </StickyContainer>
            </Col>
            <Col sm="10">
              <Row>
                <Col className="pic">
                  <img src={p1} className="pic" />
                  <div className="txt1">hsdfkks</div>
                  <div className="txt1">5454</div>
                  <hr />
                  <Button color="primary" className="txt2">
                    ADD TO CART
                  </Button>
                </Col>
                <Col className="pic">
                  <img src={p1} className="pic" />
                  <div className="txt1">hsdfkks</div>
                  <div className="txt1">5454</div>
                  <hr />
                  <Button color="primary" className="txt2">
                    ADD TO CART
                  </Button>
                </Col>
                <Col className="pic">
                  <img src={p1} className="pic" />
                  <div className="txt1">hsdfkks</div>
                  <div className="txt1">5454</div>
                  <hr />
                  <Button color="primary" className="txt2">
                    ADD TO CART
                  </Button>
                </Col>
                <Col className="pic">
                  <img src={p1} className="pic" />
                  <div className="txt1">hsdfkks</div>
                  <div className="txt1">5454</div>
                  <hr />
                  <Button color="primary" className="txt2">
                    ADD TO CART
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="pic">
                  <img src={p1} className="pic" />
                  <div className="txt1">hsdfkks</div>
                  <div className="txt1">5454</div>
                  <hr />
                  <Button color="primary" className="txt2">
                    ADD TO CART
                  </Button>
                </Col>
                <Col className="pic">
                  <img src={p1} className="pic" />
                  <div className="txt1">hsdfkks</div>
                  <div className="txt1">5454</div>
                  <hr />
                  <Button color="primary" className="txt2">
                    ADD TO CART
                  </Button>
                </Col>
                <Col className="pic">
                  <img src={p1} className="pic" />
                  <div className="txt1">hsdfkks</div>
                  <div className="txt1">5454</div>
                  <hr />
                  <Button color="primary" className="txt2">
                    ADD TO CART
                  </Button>
                </Col>
                <Col className="pic">
                  <img src={p1} className="pic" />
                  <div className="txt1">hsdfkks</div>
                  <div className="txt1">5454</div>
                  <hr />
                  <Button color="primary" className="txt2">
                    ADD TO CART
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="pic">
                  <img src={p1} className="pic" />
                  <div className="txt1">hsdfkks</div>
                  <div className="txt1">5454</div>
                  <hr />
                  <Button color="primary" className="txt2">
                    ADD TO CART
                  </Button>
                </Col>
                <Col className="pic">
                  <img src={p1} className="pic" />
                  <div className="txt1">hsdfkks</div>
                  <div className="txt1">5454</div>
                  <hr />
                  <Button color="primary" className="txt2">
                    ADD TO CART
                  </Button>
                </Col>
                <Col className="pic">
                  <img src={p1} className="pic" />
                  <div className="txt1">hsdfkks</div>
                  <div className="txt1">5454</div>
                  <hr />
                  <Button color="primary" className="txt2">
                    ADD TO CART
                  </Button>
                </Col>
                <Col className="pic">
                  <img src={p1} className="pic" />
                  <div className="txt1">hsdfkks</div>
                  <div className="txt1">5454</div>
                  <hr />
                  <Button color="primary" className="txt2">
                    ADD TO CART
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
