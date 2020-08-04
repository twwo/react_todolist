import React from "react";
import './todo.css'

export default class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state={className:'undo'}
  }

  deleteTodo = () => {
    this.props.deleteTodo(this.props.index);
  };

  doneTodo = () => {
    console.log(document.getElementById("test").className);
    console.log(this.props.value.done)
    this.props.doneTodo(this.props.index);
    this.setState({className:this.props.value.done==true?'done':'undo'});
  };

  render() {
    return (
      <div>
        <span onClick={this.doneTodo} id="test" className={this.state.className}>
          {this.props.value.value}
        </span>
        <button onClick={this.deleteTodo}>X</button>
      </div>
    );
  }
}
