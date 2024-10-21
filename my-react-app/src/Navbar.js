import React from "react";
import logo from "./assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
import { Link } from "react-router-dom";

function navigation() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {" "}
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Nav className=" my-5 "></Nav>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/data">
              Data
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navigation;
