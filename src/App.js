import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage'
import ErrorPage from './pages/ErrorPage'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
