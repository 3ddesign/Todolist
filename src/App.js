import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <h2>App</h2>
            </div>
          <p className="App-intro">
                        <Link to='/Todo'>Todo List</Link>
          </p>
        </div>
    );
  }
}

export default App;
