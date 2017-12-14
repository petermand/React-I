import React, { Component } from 'react';
import ChildComponent from './Todochild'

class ParentComponent extends Component {
  constructor() {
    super();

    this.state = {
      addedToList: ['flour', 'eggs', 'milk', 'sugar', 'vanilla'],
      newAddition: ''
    };
  }

  handleToDoInput = (event) => {
    this.setState({ newAddition: event.target.value });
  };

  addItem = (event) => {
    event.preventDefault();
    const toDoList = this.state.addedToList;
    toDoList.push(this.state.newAddition);
    this.setState({
      newAddition: '',
      addedToList: toDoList
    })
      ;
  };

  render() {
    return (
      <div>
        {this.state.addedToList.map( listAdd => <ChildComponent thing={listAdd} />)}
        <form onSubmit={this.addItem}>
          <input type="text" onChange={this.handleToDoInput} placeholder="Add A ToDo" value={this.state.newAddition} />
        </form>
      </div>
    );
  }
}

export default ParentComponent;