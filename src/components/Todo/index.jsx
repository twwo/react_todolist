import React from "react";
import "./todo.css";
import { deleteTodo, putTodo } from "../../api";
import { Button, Space } from "antd";
import { CloseOutlined } from '@ant-design/icons'

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { className: "" };
  }

  componentDidMount() {
    this.setState({
      className: this.props.value.status === true ? "done" : "",
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
        className: this.props.value.status === true ? "done" : "",
      });
    });
  };

  render() {
    return (
      <div>
        <Space>
          <span onClick={this.doneTodo} className={this.state.className}>
            {this.props.value.content}
          </span>
          <Button icon={<CloseOutlined />} onClick={this.deleteTodo}></Button>
        </Space>
      </div>
    );
  }
}
