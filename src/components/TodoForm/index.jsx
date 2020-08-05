import React from "react";
import {postTodo}  from "../../api/index"

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  addTodo = () => {
    let todo = {
      content: this.state.value,
      status: false
    }
    postTodo(todo)
    .then((response) => {
      this.props.addTodo(response.data.id, response.data.content);
    })
  };

  changeValue = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <input id="value" type="text" onChange={this.changeValue} />
        <button onClick={this.addTodo}>ADD</button>
      </div>
    );
  }
}

export default TodoForm;
