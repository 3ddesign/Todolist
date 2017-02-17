import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.css';
import {Link} from 'react-router';

class About extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>About</h2>
        </div>
        <p className="App-intro">
        <Link to='/Todo'>Todo</Link>
        </p>
      </div>
    );
  }
}

export default About;
