import React from "react";
import banner from "./assets/sample-img.png";
import Container from "react-bootstrap/Container";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Homepage.css";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />

      <Container className="second-container mt-5">
        <div className="p-2 text-center">
          <h1 className="about-us">About Us</h1>
        </div>
        <Row className="first-row">
          <Col className="first-column">
            <h1>Me, Myself, and I</h1>
          </Col>
          <Col className="second-column">
            <img src={banner} className="banner-image" alt="banner" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
