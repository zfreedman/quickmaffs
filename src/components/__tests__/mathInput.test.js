import React from "react";
import { mount } from "enzyme";
import MathInput from "components/mathInput";

it("has an input field", () => {
  const wrapped = mount(<MathInput />);

  expect(wrapped.find("input").length).toEqual(1);
});
