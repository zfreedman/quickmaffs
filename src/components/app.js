import React from "react";

import AnswerList from "components/answerList";
import MathDisplay from "components/mathDisplay";
import MathInput from "components/mathInput";
require("../index.css")

export default () => {
  return (
    <div className="app">
      <h1>Quick Maffs</h1>
      <MathDisplay />
      <MathInput />
      <AnswerList />
    </div>
  );
};
