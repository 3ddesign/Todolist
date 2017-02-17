import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

const items = ['Task 1', 'Task 2', 'Task 3', 'Task 3'];

class TodoList extends Component {
  render() {
    return (
        <div className="tasks1">{items.map(item => <p className="tasks">{item}</p>)}</div>
    );
  }
}


class Todo extends Component {

  press = function () {

               }


  render() {
    return (

      <div className="App">
          <h2>ToDo List</h2>

          <TodoList />

              <form>
                <label>
                <input type="text" name="name"  className="item-value"/>
                </label>
                <input type="submit" value="Save" className="item-add" onClick={this.press}/>
              </form>
        <p className="App-intro">

          <Link to='/'>App</Link>

        </p>
      </div>
    );
  }
}



export default Todo;
