import TodoContainer from "../../containers/TodoContainer";
import React from "react";
import {getTodoList} from "../../api/index";

export default class TodoList extends React.Component {
  componentDidMount() {
    getTodoList().then((response) => {
      this.props.updateTodoList(response.data);
    });
  }

  render() {
    return this.props.todoList.map((todo, index) => (
      <div>
        <TodoContainer value={todo} key={index} />
        <br />
      </div>
    ));
  }
}
