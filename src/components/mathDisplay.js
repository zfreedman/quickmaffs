import React from "react";

const OP_ADD = "+";
const OP_SUB = "-";
const OP_MUL = "*";
const OP_DIV = "/";

export default class MathDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: "",
      opList: [OP_ADD],
      maxNumber: 5
    };

    this.makeExpression = this.getExpression.bind(this);
  }

  render() {
    return (
      <div>
        {this.state.expression}
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      expression: this.getExpression(
        this.state.opList, this.state.maxNumber
      )
    });
  }

  getExpression = (opList, maxNumber) => {
    // operator
    const op_index = this.getRandomInt(opList.length);
    const op = this.state.opList[op_index];

    // operands
    const left = this.getRandomInt(maxNumber + 1);
    const right = this.getRandomInt(maxNumber + 1);
    const expression = `${left} ${op} ${right}`;

    return expression;
  }

  getRandomInt(max) {
    return Math.floor(
      Math.random() * Math.floor(
        max
      )
    );
  }
}
