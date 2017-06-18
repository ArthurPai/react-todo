import React, {Component} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  addTodo = (text) => {
    var todo = {
      text: text,
      id: Date.now()
    };

    //const items = this.state.items.push(todo);
    const items = [
      ...this.state.items,
      todo
    ];

    this.setState({items: items});
  }

  removeTodo = (id) => {
    // Filter all todos except the one to be removed
    const items = this.state.items.filter((item) => item.id !== id);

    // Update state with filter
    this.setState({items: items});
  }

  render() {
    console.log("Todo Items: ", this.state.items);

    return (
      <div className="App">
        <div className="App-header">
          <h2>My Todo List</h2>
        </div>
        <div className="todo-list">
          <TodoForm addTodo={this.addTodo} />
          <TodoList items={this.state.items} remove={this.removeTodo} />
        </div>
      </div>
    );
  }
}

export default App;
