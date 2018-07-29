import React from "react";
import { connect } from "react-redux";

import AnswerList from "components/answerList";
import MathDisplay from "components/mathDisplay";
import MathInput from "components/mathInput";
import * as actions from "actions";
require("../index.css")

const OP_ADD = "+";
const OP_SUB = "-";
const OP_MUL = "*";
const OP_DIV = "/";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: "",
      maxNumber: 5,
      opList: [OP_ADD],
      operands: [],
      operations: [],
    };
  }

  render() {
    return (
      <div className="app">
        <h1>Quick Maffs</h1>
        <MathDisplay
          expression={this.state.expression}
          operands={this.state.operands}
          operations={this.state.operations}
        />
        <MathInput
          handleInputSubmit={this.handleInputSubmit}
        />
        <AnswerList />
      </div>
    );
  }

  componentWillMount() {
    // set operations
    let { operands, operations } = this.getMath(
      this.state.opList, this.state.maxNumber
    );
    let expression = this.getExpressionFromMath(operations, operands);
    this.setState(
      { expression, operands, operations }
    );
  }

  getExpressionFromMath = (operations, operands, useSpace = true) => {
    let expression = `${operands[0]} `;
    for (let i = 1; i < operands.length; ++i) {
      expression += `${operations[i - 1]} ${operands[i]}`;
      expression += i < operations.length - 1 ? " " : "";
    }
    return expression;
  };

  getMath = (opList, maxNumber) => {
    const op_index = this.getRandomInt(opList.length);
    const op = opList[op_index];

    const left = this.getRandomInt(maxNumber + 1);
    const right = this.getRandomInt(maxNumber + 1);
    return {
      operands: [left, right],
      operations: [op],
    };
  };

  getRandomInt = maxNumber => {
    return Math.floor(
      Math.random() * Math.floor(
        maxNumber
      )
    );
  };

  handleInputSubmit = input => {
    this.props.addExpression(this.state.expression);
    this.props.submitAnswer(input);
  };
};

export default connect(null, actions)(App);
