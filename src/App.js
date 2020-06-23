import React from 'react';
import './App.css';

import Home from './pages/Home'
import Error from './pages/Error'
import Projects from './pages/Projects'
import About from './pages/About'
import SingleProject from './pages/SingleProject'
import {Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {
  return (
    <> 
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects/:slug' component={SingleProject} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
