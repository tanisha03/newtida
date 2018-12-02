import React from "react";
import { Link } from "react-router-dom";
import Social from "./social";
import { Manager, Reference, Popper } from "react-popper";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" light expand="md" className="Nav">
          <NavLink href="/">
            <span style={{ color: "#020302", fontSize: 30 }}>
              N E W + I D A
            </span>
          </NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/tshirts">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cart">Cart</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Collections
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>collec-1</DropdownItem>
                  <DropdownItem>collec-2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>{" "}
            </Nav>
          </Collapse>
        </Navbar>
        <div style={{ width: 100 }} />
      </div>
    );
  }
}

export { Top };
