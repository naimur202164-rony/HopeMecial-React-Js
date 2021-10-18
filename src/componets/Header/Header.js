import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import UseFirebase from '../../hooks/UseFirebase';
const Header = () => {
  const {LogOut,user}=UseFirebase()
    return (
        
            <>

  <br />
  <Navbar bg="light" variant="light">
    <Container className>
    <Navbar.Brand href="#home">HOPE Medical</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink as={Link} to ="/home">Home</NavLink>
      <NavLink as={Link} to="/login">Login</NavLink>
      <NavLink  as={Link} to="/register">Register</NavLink>
      <NavLink as={Link}  to="/contact">Contact Us</NavLink>
      {

        user.email?
      <NavLink  onClick={LogOut} >SignOut</NavLink>:
      <NavLink as={Link} to="/login">SignIn</NavLink>
      
      }
    </Nav>
    </Container>
  </Navbar>
</>
    
    

    );
};

export default Header;