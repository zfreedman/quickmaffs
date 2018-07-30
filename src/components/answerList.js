import React from "react";
import { connect } from "react-redux";

class AnswerList extends React.Component {
  render() {
    return (
      <div className="answerList">
        {this.renderAnswers()}
      </div>
    );
  }

  renderAnswers = () => {
    let answers = this.props.answers;
    let expressions = this.props.expressions;
    let divs = [];
    for (let i = 0; i < answers.length; ++i) {
      let containerKey=`${expressions[i]} = ${answers[i]}`;
      divs.push(
        <div className="expressionAnswerContainer" key={containerKey}>
          <div className="answerListExpression expressionAnswerElement">
            {expressions[i]}
          </div>
          <div className="answerListAnswer expressionAnswerElement">
            {answers[i]}
          </div>
        </div>
      );
    }
    return divs;
  };
}

function mapStateToProps(state) {
  return {
    answers: state.answers,
    expressions: state.expressions,
  };
}

export default connect(mapStateToProps)(AnswerList);
