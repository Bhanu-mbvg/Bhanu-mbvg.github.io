import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .card-deck{
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 1%;
  }
`;

const Header = () => {
    return(
    <Styles>
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Blog posts</Card.Title>
            <Card.Text>All the articles I've written.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated on 27th Dec 2020</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">My Projects</Card.Title>
            <Card.Text>I mostly work with Python, JS, React, Node, and Django.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated on 27th Dec 2020</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Styles>
    );
} 

export default Header;