import React, {Component} from 'react';

class TodoForm extends Component {
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

    if (this.state.text === '')
      return;

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

export default TodoForm;
