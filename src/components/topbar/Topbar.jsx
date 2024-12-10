import { useState } from "react";
import "./topbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Topbar = () => {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded(!expanded)
  }

  const handleLinkClick = () => {
    setExpanded(false)
  }
  return (
    <div className="topbar_container">
      <Navbar expand="lg" expanded={expanded} onToggle={handleToggle}>
        <Container>
          <Navbar.Brand href="#home" className="text-light">
            <img
              alt="Logo de HYPERLINK"
              src="/images/logo.png"
              width="65"
              height="45"
              className="d-inline-block me-2"
            /> 
            HYPERLINK
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  className="mr-2" style={{ 'background-color' : '#0164F1'}}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  href="#home"  className="text-light px-3" onClick={handleLinkClick}>HOME</Nav.Link>
              <Nav.Link  href="#about" className="text-light px-3" onClick={handleLinkClick}>NOSOTROS</Nav.Link>
              <Nav.Link  href="#contact" className="text-light px-3" onClick={handleLinkClick}>CONTACTO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
