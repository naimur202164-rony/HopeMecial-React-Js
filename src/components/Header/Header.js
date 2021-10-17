import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        
            <>

  <br />
  <Navbar bg="light" variant="light">
    <Container className>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink to ="/home">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </Nav>
    </Container>
  </Navbar>
</>
    
    

    );
};

export default Header;