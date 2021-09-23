import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class Header extends React.Component {
  render(props) {
    return (
      <div>
        <span className="inlineheader">
          <span className="headerlinks">
            <Navbar className="header" expand="lg">
              <Navbar.Brand href="/">
                <img
                  className="small-logo"
                  src={`${process.env.PUBLIC_URL}/images/logo.png`}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/about">about</Nav.Link>
                  <Nav.Link href="/progress-tracker">progress tracker</Nav.Link>
                  <Nav.Link href="/encouragement">encouragement</Nav.Link>
                  <Nav.Link href="/things-to-do">things to do</Nav.Link>
                  <Nav.Link href="/journal">journal</Nav.Link>
                  <NavDropdown title="resources" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/mental-health-resources">
                      mental health resources
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/addiction-resources">
                      addiction resources
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <NavDropdown title="login/sign-up" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/login">login</NavDropdown.Item>
                    <NavDropdown.Item href="/signup">sign-up</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </span>
        </span>
      </div>
    );
  }
}

export default Header;
