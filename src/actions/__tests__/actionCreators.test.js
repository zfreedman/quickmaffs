import { addSubmission } from "actions";
import { ADD_SUBMISSION } from "actions/types";

describe("addSubmission", () => {
  const answer = 731;
  const expression = "730 + 2";
  const solution = eval(expression);
  let count = 0;
  
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
      expression,
      id: count,
      solution
    });
  });
});
