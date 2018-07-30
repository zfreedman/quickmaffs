import submissionsReducer from "reducers/submissions";
import { ADD_SUBMISSION } from "actions/types";
import { addSubmission } from "actions";

let submissions = [
  {
    answer: 100,
    expression: "9 * 11",
  },
  {
    answer: 50,
    expression: "5 * 10"
  }
];
it("handles actions of type ADD_SUBMISSION", () => {
  let { answer, expression } = submissions[0];
  const solution = eval(expression);
  const action = addSubmission(answer, 0, expression);

  const newState = submissionsReducer([], action);

  expect(newState).toEqual([action.payload]);
});

it("handles actions of unknown types", () => {
  expect(submissionsReducer([], {type: "UNKNOWN_123"})).toEqual([]);
});
