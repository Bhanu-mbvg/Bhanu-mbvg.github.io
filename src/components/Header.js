import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { 
    background-color: #24292e;
    padding-left: 2.5%; 
    padding-right: 2.5%;
  }
  .navbar-brand {
    font-family: cursive;
    font-size: 1.74em;
  }
`;

const Header = () => {
    return(
    <Styles>
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="/">Bhanu Gupta</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item className="mr-5"><Nav.Link href="#/projects">Projects</Nav.Link></Nav.Item> 
          <Nav.Item className="mr-5"><Nav.Link href="#/blogs">Blog</Nav.Link></Nav.Item>
          <Nav.Item className=""><Nav.Link href="https://drive.google.com/file/d/1fOwdzrVIKkq_AFtK1eS-wkYyUTNnP-Ht/view?usp=sharing" target="_blank">Resume</Nav.Link></Nav.Item>
        </Nav>
      </Navbar>
    </Styles>
    );
} 

export default Header;