import React, { useEffect, useState } from "react";
import banner from "./assets/John 1.png";
import about from "./assets/Drummer1.png";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Homepage.css";
import Navbar from "./Navbar";

function Homepage() {
  // State for fade-in effect
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Start the fade-in animation when the component mounts
    setFadeIn(true);
  }, []);

  return (
    <>
      <Navbar />

      <Container fluid bg="dark" data-bs-theme="dark">
        <Container className="second-container">
          <Row className="first-row">
            <Col className="first-column" xs={12} md={4} lg={6} xl={6}>
              <p className="animated-greet"></p>
              <h1 className="first-caption">I'm John Delgado</h1>
              <h1 className="first-caption">Web Developer</h1>
            </Col>
            <Col className="second-column" xs={12} md={8} lg={6} xl={6}>
              <img
                src={banner}
                className={`banner-image ${fadeIn ? "fade-in" : ""}`}
                alt="banner"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="second-container my-6">
        <div className="p-2 ">
          <Row className="">
            <Col className="" xs={12} md={6} lg={6} xl={6}>
              <Image src={about} alt="about" className="about-image" />
            </Col>
            <Col
              className="align-self-center mt-5"
              xs={12}
              md={6}
              lg={6}
              xl={6}
            >
              <h1 className="about-us py-4">About Me</h1>
              <p className="about-caption">
                Hi, I'm John Rodolfo M. Delgado, a Full-Stack Developer
                specializing in Shopify and WordPress with over 3 years of
                experience crafting custom e-commerce websites. My expertise
                lies in seamlessly blending design with functionality to create
                engaging digital experiences. Whether it's building from scratch
                or optimizing existing platforms, I thrive on solving problems
                and bringing ideas to life. I’m passionate about web
                development, from frontend creativity to backend functionality,
                and I’m always eager to learn and adopt new technologies to stay
                ahead of the curve. I also enjoy working with JavaScript, React,
                and MySQL When I'm not coding, you’ll find me playing musical
                instruments or gaming online, but my main passion is delivering
                websites that leave a lasting impact on users.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Homepage;
