import React from "react";
import TodoContainer from "../../containers/TodoContainer";

export default class DoneTodoList extends React.Component {
    render() {
        return this.props.todoList.map((todo, index) => (
          <div>
            <TodoContainer value={todo} index={index} />
            <br />
          </div>
        ));
      }
}