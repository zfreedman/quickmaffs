import answersReducer from "reducers/answers";
import { SUBMIT_ANSWER } from "actions/types";
import { submitAnswer } from "actions";

it("handles actions of type SUBMIT_ANSWER", () => {
  const answer = 99;
  const action = submitAnswer(answer);

  const newState = answersReducer([], action);

  expect(newState).toEqual([answer]);
});

it("handles actions of unknown types", () => {
  expect(answersReducer([], {type: "UNKNOWN_123"})).toEqual([]);
});
