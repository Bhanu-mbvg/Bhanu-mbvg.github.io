import React from 'react';

import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <Title/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
