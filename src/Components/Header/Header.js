// import React from "react";
// import "./Header.css";
// import { Navbar, Nav } from "react-bootstrap";
// import mklogo from "../../assets/mklogo.svg";

// import Group3 from "../../assets/Group 3.svg"
// import Group4 from "../../assets/Group 4.svg"

// import { HomeOutlined } from "@ant-design/icons";

// const TopMenu = () => {
//   return (
//     <Navbar className="fixed-top  align-items-end" collapseOnSelect expand="lg"  variant="dark">
//       <Navbar.Brand href="#home ">
//         <img src={Group4} />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="ms-auto ">
//           <Nav.Link className="mt-5" href="#home"> Home</Nav.Link>
//           <Nav.Link  className="mt-5" href="#about">About</Nav.Link>
//           <Nav.Link  className="mt-5" href="#services">Services</Nav.Link>
//           <Nav.Link  className="mt-5" href="#contact">Contact</Nav.Link>

//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default TopMenu;



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import Group4 from "../../assets/Group 4.svg"
import Logo from '../../assets/Logo.png'
import { useEffect, useState } from 'react';

function NavScrollExample() {

  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

 const someScroll = 100

      const isScrollDown = window.scrollY > someScroll; // Change 0 to the desired scroll threshold
      setScrollDown(isScrollDown);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
   <></>
  );
}

export default NavScrollExample;