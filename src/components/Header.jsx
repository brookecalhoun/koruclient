import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  let navItems;
  if (isAuthenticated) {
    navItems = (
      <>
      <Nav.Link href="/about">about</Nav.Link>
        <NavDropdown title="resources" id="basic-nav-dropdown">
          <NavDropdown.Item href="/mental-health-resources">
            mental health resources
          </NavDropdown.Item>
          <NavDropdown.Item href="/addiction-resources">
            addiction resources
          </NavDropdown.Item>
        </NavDropdown>
        {/* <Nav.Link href="/progress-tracker">progress tracker</Nav.Link> */}
        {/* <Nav.Link href="/encouragement">encouragement</Nav.Link> */}
        {/* <Nav.Link href="/things-to-do">things to do</Nav.Link> */}
        <Nav.Link href="/journal">journal</Nav.Link>
        <NavDropdown title="profile/logout" id="basic-nav-dropdown">
          <NavDropdown.Item href='/profile'>
            profile
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            logout
          </NavDropdown.Item>
        </NavDropdown>
      </>
    );
  } else {
    navItems = (
      <>
      <Nav.Link href="/about">about</Nav.Link>
      <NavDropdown title="resources" id="basic-nav-dropdown">
        <NavDropdown.Item href="/mental-health-resources">
          mental health resources
        </NavDropdown.Item>
        <NavDropdown.Item href="/addiction-resources">
          addiction resources
        </NavDropdown.Item>
      </NavDropdown>
      {/* <Nav.Link href="/progress-tracker">progress tracker</Nav.Link> */}
      {/* <Nav.Link href="/encouragement">encouragement</Nav.Link> */}
      {/* <Nav.Link href="/things-to-do">things to do</Nav.Link> */}
      <Nav.Link href="/journal">journal</Nav.Link>
      <Nav.Link onClick={() => loginWithRedirect()}>login</Nav.Link>
    </>
    )
  }

  return (
    <div>
      <span className="inlineheader">
        <span className="headerlinks">
          <Navbar className="header" expand="lg">
            <Navbar.Brand href="/">
              <img
                className="small-logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              { navItems }
            </Navbar.Collapse>
          </Navbar>
        </span>
      </span>
    </div>
  );
}

export default Header;
