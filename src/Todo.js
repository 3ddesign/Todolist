import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

var List = React.createClass({
		getInitialState() {
    		return {
        	items: ['first', 'second']
        };
    },
    //
    // componentDidMount() {
    // 		setTimeout(function () {
    //         this.setState({
    //             items: this.state.items.concat(['third'])
    //         });
    //     }.bind(this), 1000);
    // },

    // function press() {
    //     this.setState({items: this.state.items.concat([document.getElementById("inp").value])});
    // }

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
        this.setState({
            items: this.state.items.concat(['third'])
        });
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
