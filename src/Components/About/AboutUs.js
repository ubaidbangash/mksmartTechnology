import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import employe1 from "../../assets/employe1.jpg";
import android from "../../assets/android.avif";
import androidcom from "../../assets/androidcom.svg";
import apple from "../../assets/apple.svg";
import cloud from "../../assets/cloud.svg";
import cloudauditing from "../../assets/cloudauditing.svg";
import connectdevelop from "../../assets/connectdevelop.svg";
import java from "../../assets/java.svg";
import networkglobe from "../../assets/networkglobe.svg";
import path from "../../assets/Path.svg";
import "./AboutUs.css";
const AboutUsPage = () => {
  return (
    <Container>
      <div >
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <section className="main-container">
              <div className="main">
                <div className="big-circle">
                  <div className="icon-block">
                    <img src={androidcom} alt="web design icon" />
                  </div>
                  <div className="icon-block">
                    <img src={apple} alt="game design icon" />
                  </div>
                  <div className="icon-block">
                    <img src={cloud} alt="game dev icon" />
                  </div>
                  <div className="icon-block">
                    <img src={cloudauditing} alt="ui-ux icon" />
                  </div>
                </div>
                <div className="circle">
                  <div className="icon-block">
                    <img src={connectdevelop} alt="app icon" />
                  </div>
                  <div className="icon-block">
                    <img src={java} alt="blockchain icon" />
                  </div>
                  <div className="icon-block">
                    <img src={networkglobe} alt="ar-vr icon" />
                  </div>
                  <div className="icon-block">
                    <img src={path} alt="artificial intelligence icon" />
                  </div>
                </div>
              </div>
            </section>
          </Col>
          <Col md={6}>
            <div className="site-heading text-center">
              <p>
                ABOUT <span>US</span>
              </p>
              <h4>
                MK Smart Technologies is a software development company that
                specializes in creating high-quality applications for businesses
                and individuals. We have a passionate and experienced team of
                developers who are committed to providing our clients with the
                best possible service. We believe that software should be more
                than just a tool for completing tasks. It should be an extension
                of the user, helping them to be more productive, creative, and
                successful. That's why we focus on creating user-friendly and
                intuitive applications that are both functional and
                aesthetically pleasing. Our team works together like a family,
                collaborating closely to ensure that every project meets our
                high standards of quality. We are always looking for new ways to
                improve our processes and our products, and we are always open
                to feedback from our Users.
              </h4>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AboutUsPage;
