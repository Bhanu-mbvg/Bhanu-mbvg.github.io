import React from 'react';
import { Card, Image } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .card-text{
    padding-left: 15%;
    padding-right: 15%;
  }
`;

const Title = (props) => {
    return(
    <Styles>
      <Card border="light" className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
        <Image className="img-fluid pb-3" src= { props.image } roundedCircle />
          <h2> { props.heading } </h2>
          <div className="pt-4">
            <Card.Text> { props.text1 } </Card.Text>
            <Card.Text> { props.text2 } </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Styles>
    );
}

export default Title;