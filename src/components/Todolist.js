import React, { Component } from 'react';
import Todo from './Todo'

class Todolist extends Component {
  constructor() {
    super();

    this.state = {
      todos: [''],
      newTodo:  ''
    };
  }

  handleNewTodoInput = (event) => {
    this.setState({ newTodo: event.target.value });
  };  

  addTodo = (event) => {
    event.preventDefault();
    let updatedTodos = this.state.todos;
    updatedTodos.push(this.state.newTodo);
    this.setState({
      todos: updatedTodos,
      newTodo: ''
    });
      
  };

  render() {
    return (
      <div>
       {this.state.todos.map((todo, i) => <Todo key={i} todo={todo} />)}
         <form onSubmit={this.addTodo}>
          <input onChange={this.handleNewToDoInput} placeholder="Add A ToDo" value={this.state.newTodo}  />
      </form> 
    </div>
     );
    }
}

export default Todolist;