import { addSubmission } from "actions";
import { ADD_SUBMISSION } from "actions/types";

describe("addSubmission", () => {
  const answer = 731;
  let count = 0;
  const expression = "730 + 2";
  const solution = eval(expression);
  let action;
  beforeEach(() => {
    action = addSubmission(answer, count, expression);
  });

  it("has the right type", () => {
    expect(action.type).toEqual(ADD_SUBMISSION);
  });

  it("has the right payload", () => {
    expect(action.payload).toEqual({
      answer,
      id: count,
      expression,
      solution
    });
  });
});
