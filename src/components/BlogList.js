import React from 'react';
import { CardDeck } from 'react-bootstrap';
import GhCard from './GhCard';

const BlogList = () => {
  return(
    <div className="container py-1">
      <CardDeck className="row">
        <div className="col-lg-4 d-flex align-items-stretch col py-3">  
          <GhCard 
            reponame = "Contributing to open-source" 
            repourl = "https://medium.com/@bhanu.mbvg/contributing-to-open-source-a-beginners-guide-b07b70f61e70" 
            repodesc = "A beginners guide to contributing to open source"/>
        </div>  
      </CardDeck>
    </div>
  );
}

export default BlogList;