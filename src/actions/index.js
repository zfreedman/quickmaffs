import {
  ADD_SUBMISSION,
} from "actions/types";

console.log(eval("1 + 2"));

export function addSubmission(answer, count, expression) {
  return {
    type: ADD_SUBMISSION,
    payload: {
      answer,
      expression,
      id: count,
      solution: eval(expression),
    }
  };
}
