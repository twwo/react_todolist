import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  addTodo = (event) => {
    this.props.addTodo(this.state.value);
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
