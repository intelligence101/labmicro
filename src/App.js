import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


import Projects from './Projects'
import Nav from './Nav'
import Home from './Home'

import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path = '/' component = {Home} />
        <Route  path = '/projects' component = {Projects} />
      </div>
    );
  }
}

export default App;
