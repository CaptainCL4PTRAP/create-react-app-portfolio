import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './components/home';
import Designs from './components/designs';
import AboutMe from './components/AboutMe';
import Charts from './components/chart';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  
  render() {
    return (
<Router>
  <div className="App">
     <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={AboutMe}/>
      <Route exact path='/chart' component={Charts}/>
      <Route exact path='/designs' component={Designs}/>
  </div>
</Router>

  );
  }
}

export default App;
