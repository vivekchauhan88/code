import logo from '../images/logo.png';
import '../App.css';
import React from 'react';
import {Row, Col, Container, Nav, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div className="nav">
       <Container fluid><Row>
       <Col>
         <Image src={logo} className="app-logo" alt="logo" rounded />
         <p className="text1">
         Ninja Monk Labs
         </p>

       <Nav className="navr" activeKey="/">
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

       </Col>
       </Row></Container>
       </div>

    );
}

export default Navigation;
