import React from 'react';
import { Nav ,Navbar } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const Styles = styled.div`
  a { 
    color: #24292e;
  }
`;

const Header = () => {
    return(
    <Styles>
      <Navbar expand="sm" className="justify-content-center fixed-bottom" >
      <Nav>
        <span className="py-2 px-5">
          <a href="https://www.facebook.com/kyadekhteh0/" target="_blank">
            <FaFacebook size={35}/>
          </a>
        </span>  
        <span className="py-2 px-5">  
          <a href="https://www.linkedin.com/in/bvg/" target="_blank">
            <FaLinkedin size={35}/>
          </a>
        </span>  
        <span className="py-2 px-5">
          <a href="https://github.com/Bhanu-mbvg/" target="_blank" >
            <FaGithub size={35}/>
          </a>
        </span>
        </Nav>
      </Navbar>
    </Styles>
    );
} 

export default Header;