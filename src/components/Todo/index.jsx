import React from "react";
import "./todo.css";
import { deleteTodo } from '../../api'

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
    deleteTodo(this.props.value.id)
    .then((response) => {
      console.log(response);
      this.props.deleteTodo(this.props.value.id);
    })
  };

  doneTodo = () => {
    this.props.doneTodo(this.props.value.id);
    this.setState({
      className: this.props.value.status === true ? "done" : "undo",
    });
  };

  render() {
    return (
      <div>
        <span
          onClick={this.doneTodo}
          className={this.state.className}
        >
          {this.props.value.id}.{this.props.value.content}
        </span>
        <button onClick={this.deleteTodo}>X</button>
      </div>
    );
  }
}
