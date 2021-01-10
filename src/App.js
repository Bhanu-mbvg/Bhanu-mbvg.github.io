import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/blogs" component={BlogPage} />
      </Switch>
    </Router>
  );
}

export default App;
