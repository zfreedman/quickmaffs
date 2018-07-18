import { SUBMIT_ANSWER } from "actions/types";

export function submitAnswer(answer) {
  return {
    type: SUBMIT_ANSWER,
    payload: answer
  };
}
