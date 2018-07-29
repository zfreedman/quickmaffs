import { ADD_EXPRESSION, SUBMIT_ANSWER } from "actions/types";

export function submitAnswer(answer) {
  return {
    type: SUBMIT_ANSWER,
    payload: answer
  };
}

export function addExpression(expression) {
  return {
    type: ADD_EXPRESSION,
    payload: expression
  };
}
