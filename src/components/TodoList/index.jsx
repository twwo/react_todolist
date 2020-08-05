import TodoContainer from "../../containers/TodoContainer";
import React from "react";
import { getTodoList } from "../../api/index";
import { List } from "antd";

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default class TodoList extends React.Component {
  componentDidMount() {
    getTodoList().then((response) => {
      this.props.updateTodoList(response.data);
    });
  }
  

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={todo => (
          <List.Item>
            <TodoContainer value={todo} /> 
          </List.Item>
        )}
      />
    );
  }
}
