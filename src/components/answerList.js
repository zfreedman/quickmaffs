import React from "react";
import { connect } from "react-redux";

class AnswerList extends React.Component {
  render() {
    return (
      <div>
        {this.renderAnswers()}
      </div>
    );
  }

  renderAnswers = () => {
    return this.props.answers.map(answer => <div>{answer}</div>);
  };
}

function mapStateToProps(state) {
  return {answers: state.answers};
}

export default connect(mapStateToProps)(AnswerList);
