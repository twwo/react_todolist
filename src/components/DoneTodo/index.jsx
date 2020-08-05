import React from "react";
import { Space, Card } from "antd";

export default class DoneTodo extends React.Component {
  render() {
    return (
      <div>
        <Space>
          <Card>
            <span className="done">{this.props.value}</span>
          </Card>
        </Space>
      </div>
    );
  }
}
