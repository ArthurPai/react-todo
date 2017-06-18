import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Todo List</h2>
        </div>
        <div className="todo-list">
          <TodoForm/>
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
    console.log("Text Change: " + e.target.value);
    this.setState({text: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit: " + this.state.text);
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

export default App;
