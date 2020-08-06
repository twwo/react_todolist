import TodoContainer from "../../containers/TodoContainer";
import React from "react";
import { getTodoList } from "../../api/index";
import { List } from "antd";

export default class TodoList extends React.Component {
  componentDidMount() {
    getTodoList().then((response) => {
      this.props.updateTodoList(response.data);
    });
  }

  render() {
    return (
      <List
        
        itemLayout="vertical"
        dataSource={this.props.todoList}
        renderItem={(todo) => (
          <List.Item>
            <TodoContainer value={todo} />
          </List.Item>
        )}
      />
    );
  }
}
