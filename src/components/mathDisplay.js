import React from "react";

const OP_ADD = "+";
const OP_SUB = "-";
const OP_MUL = "*";
const OP_DIV = "/";

export default class MathDisplay extends React.Component {

  render() {
    return (
      <div>
        {this.renderMathFromProps()}
      </div>
    );
  }

  renderMathFromProps() {
    let operations = this.props.operations;
    let operands = this.props.operands;
    let expression = `${operands[0]} `;
    for (let i = 1; i < operands.length; ++i) {
      expression += `${operations[i - 1]} ${operands[i]}`;
      expression += i < operations.length - 1 ? " " : "";
    }
    return expression;
  }
}
