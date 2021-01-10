import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const Styles = styled.div`
  a { 
    color: #24292e;
  }
  p {
    bottom: 0;
  }
`;

const Header = () => {
    return(
    <Styles>
      <footer expand="sm" className="footer">
      <p className="mt-5 text-center">
        <span className="px-5">
          <a href="https://www.facebook.com/kyadekhteh0/" target="_blank" rel="noreferrer">
            <FaFacebook size={35}/>
          </a>
        </span>  
        <span className="px-5">  
          <a href="https://www.linkedin.com/in/bvg/" target="_blank" rel="noreferrer">
            <FaLinkedin size={35}/>
          </a>
        </span>  
        <span className="px-5">
          <a href="https://github.com/Bhanu-mbvg/" target="_blank" rel="noreferrer">
            <FaGithub size={35}/>
          </a>
        </span>
        </p>
      </footer>
    </Styles>
    );
} 

export default Header;