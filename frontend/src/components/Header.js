import React from "react";
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container } from "react-bootstrap";

/*
  This component is for the navbar on the homepage
*/

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand></Navbar.Brand>
          </LinkContainer>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to='/cart'>
              <Nav.Link > <i className='fas fa-shoping-cart'></i>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
              <Nav.Link> <i className='fas fa-user'></i> Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
