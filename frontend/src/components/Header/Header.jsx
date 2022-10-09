import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.png';

const Header = () => {
  return (
     <>
       <Navbar bg="warning" variant="warning" my='0' p='0'>
        <Container>
          <Navbar.Brand className="mx-5">
            <img src='./download.png' height='50px' width='70px'></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./Home">Home</Nav.Link>
            <Nav.Link href="/Products">Products</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Register">Register</Nav.Link>
          </Nav>
        </Container>
        <Form className="d-flex mx-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Navbar>
     
     
    </>
    
  )
}

export default Header;
