import logo from '../images/logo.png';
import '../App.css';
import React from 'react';
import {Row, Col, Container, Nav, Navbar, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div className="nav">
       <Container fluid><Row>
        <Col>
       <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      
       <Navbar.Brand href="/">
       <Image src={logo} className="app-logo" alt="logo" rounded />
         <p className="text1">
         Ninja Monk Labs
         </p>
        </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className="ml-auto">
         <Nav.Item>
           <Nav.Link href="/">HOME</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="/about/">ABOUT</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="/opensource/">OPEN SOURCE</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="/solutions/">SOLUTIONS</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="/insights/">BLOG</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="/contact/">CONTACT</Nav.Link>
         </Nav.Item>
       </Nav>

       </Navbar.Collapse>
      </Navbar>
      </Col>
      </Row></Container>
      </div>
    );
}

export default Navigation;
