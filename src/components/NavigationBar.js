import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
} from "reactstrap";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="light"
          dark
          expand="md"
          className="container bg-dark fixed-top"
        >
          <NavbarBrand href="/" className="text-white">
            Pics-play
          </NavbarBrand>
          <NavbarToggler className="text-white" onClick={this.toggle} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>
            <NavLink href="/search" className="text-white">
              <i class="fa fa-search" aria-hidden="true"></i>
            </NavLink>
            <NavLink className="text-white" href="/post">
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </NavLink>
            <NavLink className="text-white" href="/chat">
              <i class="fa fa-comments-o" aria-hidden="true"></i>
            </NavLink>
            <NavLink className="text-white" href="/me">
              <i class="fa fa-user" aria-hidden="true"></i>
            </NavLink>
            <NavLink
              href="/"
              className="text-white"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              <i class="fa fa-sign-out" aria-hidden="true"></i>
            </NavLink>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
