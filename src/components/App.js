import React, {Component} from 'react';
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

  render() {
    console.log("Todo Items: ", this.state.items);

    return (
      <div className="App">
        <div className="App-header">
          <h2>My Todo List</h2>
        </div>
        <div className="todo-list">
          <TodoForm addTodo={this.addTodo} />
          <TodoList items={this.state.items}/>
        </div>
      </div>
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({text: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.text}/>
        <button>Add</button>
      </form>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default App;
