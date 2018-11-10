import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import p1 from "./sample.jpg";
import "./grid.css";
import { StickyContainer, Sticky } from "react-sticky";
import { Link } from "react-router-dom";

export default class Grid extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <StickyContainer>
            <Row>
              <Sticky>
                {({ style }) => (
                  <Col sm="2" style={style}>
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
                )}
              </Sticky>
              <Col sm="10">
                <Row>
                  <Col className="pic">
                    <Link to="/individual">
                      <img src={p1} className="pic" />
                    </Link>
                    <div className="txt1">hsdfkks</div>
                    <div className="txt1">5454</div>
                    <hr />
                    <Button color="primary" className="txt2">
                      ADD TO CART
                    </Button>
                  </Col>
                  <Col className="pic">
                    <Link to="/individual">
                      <img src={p1} className="pic" />
                    </Link>
                    <div className="txt1">hsdfkks</div>
                    <div className="txt1">5454</div>
                    <hr />
                    <Button color="primary" className="txt2">
                      ADD TO CART
                    </Button>
                  </Col>
                  <Col className="pic">
                    <Link to="/individual">
                      <img src={p1} className="pic" />
                    </Link>
                    <div className="txt1">hsdfkks</div>
                    <div className="txt1">5454</div>
                    <hr />
                    <Button color="primary" className="txt2">
                      ADD TO CART
                    </Button>
                  </Col>
                  <Col className="pic">
                    <Link to="/individual">
                      <img src={p1} className="pic" />
                    </Link>
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
                    <Link to="/individual">
                      <img src={p1} className="pic" />
                    </Link>
                    <div className="txt1">hsdfkks</div>
                    <div className="txt1">5454</div>
                    <hr />
                    <Button color="primary" className="txt2">
                      ADD TO CART
                    </Button>
                  </Col>
                  <Col className="pic">
                    <Link to="/individual">
                      <img src={p1} className="pic" />
                    </Link>
                    <div className="txt1">hsdfkks</div>
                    <div className="txt1">5454</div>
                    <hr />
                    <Button color="primary" className="txt2">
                      ADD TO CART
                    </Button>
                  </Col>
                  <Col className="pic">
                    <Link to="/individual">
                      <img src={p1} className="pic" />
                    </Link>
                    <div className="txt1">hsdfkks</div>
                    <div className="txt1">5454</div>
                    <hr />
                    <Button color="primary" className="txt2">
                      ADD TO CART
                    </Button>
                  </Col>
                  <Col className="pic">
                    <Link to="/individual">
                      <img src={p1} className="pic" />
                    </Link>
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
                    <Link to="/individual">
                      <img src={p1} className="pic" />
                    </Link>
                    <div className="txt1">hsdfkks</div>
                    <div className="txt1">5454</div>
                    <hr />
                    <Button color="primary" className="txt2">
                      ADD TO CART
                    </Button>
                  </Col>
                  <Col className="pic">
                    <Link to="/individual">
                      <img src={p1} className="pic" />
                    </Link>
                    <div className="txt1">hsdfkks</div>
                    <div className="txt1">5454</div>
                    <hr />
                    <Button color="primary" className="txt2">
                      ADD TO CART
                    </Button>
                  </Col>
                  <Col className="pic">
                    <Link to="/individual">
                      <img src={p1} className="pic" />
                    </Link>
                    <div className="txt1">hsdfkks</div>
                    <div className="txt1">5454</div>
                    <hr />
                    <Button color="primary" className="txt2">
                      ADD TO CART
                    </Button>
                  </Col>
                  <Col className="pic">
                    <Link to="/individual">
                      <img src={p1} className="pic" />
                    </Link>
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
          </StickyContainer>
        </Container>
      </div>
    );
  }
}
