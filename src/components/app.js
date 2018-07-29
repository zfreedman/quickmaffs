import React from "react";

import AnswerList from "components/answerList";
import MathDisplay from "components/mathDisplay";
import MathInput from "components/mathInput";
require("../index.css")

const OP_ADD = "+";
const OP_SUB = "-";
const OP_MUL = "*";
const OP_DIV = "/";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxNumber: 5,
      opList: [OP_ADD],
      operands: [],
      operations: [],
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
      <h1>Quick Maffs</h1>
      <MathDisplay
      operands={this.state.operands}
        operations={this.state.operations}
      />
      <MathInput />
      <AnswerList />
      </div>
    );
  }

  componentWillMount() {
    this.setState(
      this.getMath(this.state.opList, this.state.maxNumber)
    );
  }

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

  getRandomInt(maxNumber) {
    return Math.floor(
      Math.random() * Math.floor(
        maxNumber
      )
    );
  }
};

export default App;
