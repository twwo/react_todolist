import React from "react";
import DoneTodo from "../DoneTodo";

export default class DoneTodoList extends React.Component {

    render() {
        return this.props.doneTodoList.map((doneTodo, index) => (
          <div>
            <DoneTodo value={doneTodo} index={index} />
            <br />
          </div>
        ));
      }
}