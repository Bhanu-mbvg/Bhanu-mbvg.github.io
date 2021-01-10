import React from 'react';

import Header from '../components/Header';
import Title from '../components/Title';
import ProjectList from '../components/ProjectList';

const ProjectsPage = () => {
    return(
      <div>
        <Header/>
        <Title
          heading = "My Projects"
          text1 = "These are all the projects which I have made and contributed to. I am comfotable working with Python, JS, React, Node, and Django but always intend to go beyond and learn more technologies."/>
        <ProjectList/>
      </div>
    );
} 

export default ProjectsPage;