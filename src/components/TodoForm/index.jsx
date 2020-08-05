import React from "react";
import { postTodo } from "../../api/index";
import { Input, Button, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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
      status: false,
    };
    postTodo(todo).then((response) => {
      this.props.addTodo(response.data.id, response.data.content);
    });
  };

  changeValue = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <Space>
          <Input
            size="large"
            placeholder="input Todo here..."
            id="value"
            type="text"
            onChange={this.changeValue}
          />
          <Button icon={<PlusOutlined />} size="large" onClick={this.addTodo}>
            ADD
          </Button>
        </Space>
      </div>
    );
  }
}

export default TodoForm;
