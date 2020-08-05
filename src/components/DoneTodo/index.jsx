import React from "react";

export default class DoneTodo extends React.Component {

  render() {
    return (
      <div>
        <span className="done">
          {this.props.value}
        </span>
      </div>
    );
  }
}