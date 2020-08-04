import TodoContainer from "../../containers/TodoContainer";
import React from "react";

export default class TodoList extends React.Component {
  render() {
    return this.props.todoList.map((todo, index) => (
      <div>
        <TodoContainer value={todo} key={index} />
        <br />
      </div>
    ));
  }
}
