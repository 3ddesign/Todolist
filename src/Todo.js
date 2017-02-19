import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

let items = ['Test Task 1', 'Test Task 2'];

class List extends Component {
    render () {
        return (
            <div className="tasks1">{items.map(item => <p className="tasks">{item}</p>)}</div>
        );
    }
}

function press() {
    items.push(document.getElementById("inp").value);
    console.log(items);

}


class Todo extends Component {
    render () {


        return (

            <div className="App">
                <h2>ToDo List</h2>

                <List />
                <form>
                    <label>
                        <input type="text" id="inp" className="item-value"/>
                    </label>
                    <input type="submit" value="Save" className="item-add" onClick={press}/>

                </form>
                <p className="App-intro">

                    <Link to='/'>App</Link>

                </p>
            </div>
        );
    }
}



export default Todo;
