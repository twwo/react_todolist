import React from "react";
import "./todo.css";
import { deleteTodo, putTodo } from "../../api";
import { Button, Space, Card, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Text } = Typography;

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { className: "undo" };
  }

  componentDidMount() {
    this.setState({
      className: this.props.value.status === true ? "done" : "undo",
    });
  }

  deleteTodo = () => {
    deleteTodo(this.props.value.id).then(() => {
      this.props.deleteTodo(this.props.value.id);
    });
  };

  doneTodo = () => {
    let todo = {
      id: this.props.value.id,
      content: this.props.value.content,
      status: !this.props.value.status,
    };
    putTodo(todo).then(() => {
      this.props.doneTodo(this.props.value.id);
      this.setState({
        className: this.props.value.status === true ? "done" : "undo",
      });
    });
  };

  render() {
    return (
      <div>
        <Space>
          <Card>
            <Text className={this.state.className} onClick={this.doneTodo}>
              {this.props.value.content}
            </Text>
            <Button icon={<CloseOutlined />} onClick={this.deleteTodo} />
          </Card>
        </Space>
      </div>
    );
  }
}
