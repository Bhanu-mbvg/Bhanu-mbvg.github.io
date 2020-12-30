import React from 'react';
import { Card, Image } from 'react-bootstrap';

import Header from '../components/Header';

import error1 from './../static/error1.svg';

const ErrorPage = () => {
    return(
      <div>
        <Header/>
        <div className="text-center py-5">
          <Image className="img-fluid pb-3" src= {error1} roundedCircle />
          <h2 style={{ fontFamily: 'cursive', fontSize: '3.75em' }}>404! Page Not Found</h2>
        </div>
      </div>
    );
} 

export default ErrorPage;