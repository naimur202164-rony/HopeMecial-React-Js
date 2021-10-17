import React from 'react';
import { Navbar,Link, Nav,Container } from 'react-bootstrap';

const Header = () => {
    return (
        
            <>

  <br />
  <Navbar bg="light" variant="light">
    <Container className>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link to ="/home">Home</Nav.Link>
      <Nav.Link to="/login">Login</Nav.Link>
      <Nav.Link to="/register">Register</Nav.Link>
      <Nav.Link to="/contact">Contact Us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    
    
    
    );
};

export default Header;