import React from 'react';

import Header from '../components/Header';
import ProjectsTitle from '../components/ProjectsTitle';
import GithubRepos from '../components/GithubRepos';

const ProjectsPage = () => {
    return(
      <div>
        <Header/>
        <ProjectsTitle/>
        <GithubRepos/>
      </div>
    );
} 

export default ProjectsPage;