import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .card-deck{
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 3%;
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
              <a href="#/blogs">Blog Posts</a>
            </h4>
            <Card.Text>All the blogs and articles I've written.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated on 27th Dec 2020</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <h4 className="text-center">
              <a href="#/projects">My Projects</a>
            </h4>
            <Card.Text>All the project work of mine and in which I collaborated.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated on 22nd March 2021</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Styles>
    );
} 

export default Header;