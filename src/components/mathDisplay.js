import React from "react";

export default class MathDisplay extends React.Component {

  render() {
    return (
      <div>
        {this.props.expression}
      </div>
    );
  }
}
