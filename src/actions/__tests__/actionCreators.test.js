import { submitAnswer } from "actions";
import { SUBMIT_ANSWER } from "actions/types";

describe("submitAnswer", () => {
  let answer = 732;
  let action;
  beforeEach(() => {
    action = submitAnswer(answer);
  });

  it("has the right type", () => {
    expect(action.type).toEqual(SUBMIT_ANSWER);
  });

  it("has the right payload", () => {
    expect(action.payload).toEqual(answer);
  });
});
