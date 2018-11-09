import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import p1 from "./sample.jpg";
import "./grid.css";

export default class Grid extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm="2">
              <Nav vertical>
                <NavItem active>
                  <NavLink href="#">tshirts</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink href="#">bottoms</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink href="#">shirts</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink disabled href="#">
                    Disabled Link
                  </NavLink>
                </NavItem>
              </Nav>
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
