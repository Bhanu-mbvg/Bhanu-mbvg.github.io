import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .card-deck{
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 1%;
  }
  a {
    color: black;
  }
`;

const Header = () => {
    return(
    <Styles>
      <CardDeck>
        <Card>
          <Card.Body>
            <h4 className="text-center">
              <a href="/blogs">Blog Posts</a>
            </h4>
            <Card.Text>All the articles I've written.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated on 27th Dec 2020</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <h4 className="text-center">
              <a href="/projects">My Projects</a>
            </h4>
            <Card.Text>I mostly work with Python, JS, React, Node, Django, and Open Source Technologies.</Card.Text>
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