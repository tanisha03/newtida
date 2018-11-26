import React, { Component } from "react";

export default class Rating extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <h6>{this.props.user}</h6>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
