import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

var List = React.createClass({
		getInitialState() {
    		return {
        	items: ['first', 'second']
        };
    },

    componentDidMount() {
      if (true) {
    		setTimeout(function () {
            this.setState({
                items: this.state.items.concat([document.getElementById("inp").value])
            });
        }.bind(this), 1000);
        }
    },



    render: function() {
        var stationComponents = this.state.items.map(function(item) {
            return <p className="tasks">{item}</p>;
        });
        return <div>{stationComponents}</div>;
    }
});

class Todo extends Component {
    render () {
      function press() {

            alert([document.getElementById("inp").value]);

      }
        return (

            <div className="App">
                <h2>ToDo List</h2>
               <div className="tasks1">
                <List /></div>
                <form>/
                    <label>
                        <input type="text" id="inp" className="item-value"/>
                    </label>
                    <input type="submit" value="Save" id="button" className="item-add"  onClick={press}  />

                </form>
                <p className="App-intro">

                    <Link to='/'>App</Link>
                </p>
            </div>
        );
    }
}

export default Todo;
