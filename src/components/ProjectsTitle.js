import React from 'react';
import { Card, Image } from 'react-bootstrap';
import styled from 'styled-components';

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
          <h2>My Projects</h2>
          <Card.Text className="pt-4">
            These are all the projects which I have made and contributed to. I am comfotable working with Python, JS, React, Node, and Django but always intend to go beyond and learn more technologies. 
          </Card.Text>
        </Card.Body>
      </Card>
    </Styles>
    );
}

export default MainTitle;