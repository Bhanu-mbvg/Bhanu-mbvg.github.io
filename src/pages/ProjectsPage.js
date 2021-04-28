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
          text1 = "List of all projects on which I have worked on"/>
        <ProjectList/>
      </div>
    );
} 

export default ProjectsPage;