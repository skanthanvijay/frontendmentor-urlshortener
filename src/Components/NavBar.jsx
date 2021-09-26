import React from "react";
import * as rb from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <rb.Navbar bg="white" expand="lg">
        <rb.Container className="navbar-cont">
          <rb.Navbar.Brand href="#home" className="brandname"><h2>Shortly</h2></rb.Navbar.Brand>
          <rb.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <rb.Navbar.Collapse id="basic-navbar-nav">
            <rb.Nav className="">
              <div className="me-auto nav-section">
              <rb.Nav.Link href="#features">Features</rb.Nav.Link>
              <rb.Nav.Link href="#pricing">Pricing</rb.Nav.Link>
              <rb.Nav.Link href="#resources">Resources</rb.Nav.Link>
              </div>
              <div className="nav-section">
              <rb.Nav.Link href="#login">Login</rb.Nav.Link>
              <rb.Nav.Link href="#signup"><rb.Button>Sign Up</rb.Button></rb.Nav.Link>
              </div>
            </rb.Nav>
          </rb.Navbar.Collapse>
        </rb.Container>
      </rb.Navbar>
    </div>
  );
}

export default NavBar;