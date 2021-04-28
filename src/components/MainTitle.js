import React from 'react';
import { Card, Image } from 'react-bootstrap';
import styled from 'styled-components';

import dp1 from './../static/dp1.svg';

const Styles = styled.div`
  .card-text{
    padding-left: 15%;
    padding-right: 15%;
  }
`;

const MainTitle = () => {
    return(
    <Styles>
      <Card border="light" className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
        <Image className="img-fluid pb-3" src= {dp1} roundedCircle />
          <Card.Title>Bhanu Gupta</Card.Title>
          <Card.Text>
            Computer Science undergraduate student skilled in Data Science and Web Technologies. 
          </Card.Text>
          <Card.Text>
            I have experience in building ML Models, APIs, full-stack web applications, web-apps, test-driven development. I am a passionate learner and love to explore new technologies.
          </Card.Text>
        </Card.Body>
      </Card>
    </Styles>
    );
}

export default MainTitle;