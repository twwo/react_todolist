import React from "react";

export default class DoneTodo extends React.Component {

  render() {
    return (
      <div>
        <span>
          {this.props.value.id}. {this.props.value.content}
        </span>
      </div>
    );
  }
}