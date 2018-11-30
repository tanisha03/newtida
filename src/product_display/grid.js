import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import p1 from "../1.jpg";
import "./grid.css";
import { StickyContainer, Sticky } from "react-sticky";
import { Link } from "react-router-dom";
import Products from "./product.js";

export default class Grid extends Component {
  render() {
    return (
      <div>
        <Container fluid style={{ marginBottom: 50 }}>
          <Row>
            <Col xs="2">
              <StickyContainer>
                <Sticky>
                  {({ style }) => (
                    <div style={style}>
                      <div style={{ height: 60 }} />
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
                    </div>
                  )}
                </Sticky>
                <div style={{ height: 1000 }} />
              </StickyContainer>
            </Col>

            <Col xs="10">
              <Products />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
