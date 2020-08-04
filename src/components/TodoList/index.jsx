import Todo from "../Todo";
import React from "react";

export default class TodoList extends React.Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      
        this.props.todoList.map((todo, index) => (
            <div><Todo value={todo} key={index} /><br /></div>
        ))
      
    );
  }
}
