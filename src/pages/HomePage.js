import React from 'react';

import Header from '../components/Header';
import MainTitle from '../components/MainTitle';
import Content from '../components/Content';
import Footer from '../components/Footer';

const HomePage = () => {
    return(
      <div>
        <Header/>
        <MainTitle/>
        <Content/>
        <Footer/>
      </div>
    );
} 

export default HomePage;