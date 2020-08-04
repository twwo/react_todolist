import React from "react";

class TodoForm extends React.Component {
  addTodo = (event) => {
    this.props.addTodo(event.target.value);
    document.getElementById("value").value = "";
  };

  render() {
    return (
      <div>
        <input id="value" type="text" />
        <button value="add" onClick={this.addTodo}>
          ADD
        </button>
      </div>
    );
  }
}

export default TodoForm;
