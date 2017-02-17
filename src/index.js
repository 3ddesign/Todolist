import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Todo from './Todo';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path='/' component={App}/>
      <Route path='/about' component={About}/>
      <Route path='/Todo' component={Todo}/>
      </Router>,
  document.getElementById('root')
);
