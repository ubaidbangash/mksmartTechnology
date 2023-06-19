import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main/Main";
import Content from "./Components/Content/Content";
import Section from "./Components/Sections/Section";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/PortFolio/Portfolio";
import Card from "./Components/Card/Card";

import Client from "./Components/Clients/Client";
import Header from "./Components/Header/Header";
import Technology from "./Components/Technologies/Technology";
import Team from "./Components/Team/Team";
import Service from "./Components/Services/Service";
import AboutUs from "./Components/About/AboutUs";
import Sidebar from "./Components/SideBar/SideBar";
import Contact from "./Components/Contact/Contact"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Components/Header/Header.css";
import Group4 from "./assets/Group 4.svg";
import Logo from "./assets/Logo.png";
import { useEffect, useState } from "react";

function App() {
  
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const someScroll = 100;

      const isScrollDown = window.scrollY > someScroll; // Change 0 to the desired scroll threshold
      setScrollDown(isScrollDown);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        className={scrollDown ? "navbar" : "navbar2"}
        sticky="top"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <img src={Logo} />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto my-5 my-lg-0 nav nav-pills"
              style={{ gap: "17px" }}
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#team">Our Team</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="home">
        <Main />
      </div>

      <div id="services">
        <Service />
      </div>

      <Sidebar />
      <div id="about">
        <AboutUs />
      </div>
      <div id="team">
        <Projects />
      </div>

      <Technology />
      
      
    <Contact/>
      <Footer />
      
    </>
  );
}

export default App;
