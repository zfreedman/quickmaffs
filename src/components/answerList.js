import React from "react";
import { connect } from "react-redux";

class AnswerList extends React.Component {
  render() {
    return (
      <div className="answerList">
        {this.renderSubmissions()}
      </div>
    );
  }

  renderSubmissions = () => {
    const submissions = this.props.submissions;
    let divs = [];
    for (let i = 0; i < submissions.length; ++i) {
      divs.push(
        <div className="expressionAnswerContainer" key={`${submissions[i].id}`}>
          <div className="answerListExpression expressionAnswerElement">
            {`${submissions[i].expression} = ${submissions[i].solution}`}
          </div>
          <div className="answerListAnswer expressionAnswerElement">
            {submissions[i].answer}
          </div>
        </div>
      );
    }
    return divs;
  };
}

function mapStateToProps(state) {
  return {
    submissions: state.submissions,
  };
}

export default connect(mapStateToProps)(AnswerList);
