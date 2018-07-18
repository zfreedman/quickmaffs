import React from "react";
import { mount } from "enzyme";

import MathInput from "components/mathInput";
import Root from "root";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <MathInput />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has an input field", () => {
  expect(wrapped.find("input").length).toEqual(1);
});

describe("input edit tests", () => {
  const input = 732;
  beforeEach(() => {
    wrapped.find("input").simulate("change", {
      target: {value: input}
    });
    wrapped.update();
  });

  it("has an input field users can enter numbers into", () => {
    expect(wrapped.find("input").prop("value")).toEqual(input);
  });

  it("has an input field that clears out when users press enter", () => {
    wrapped.find("input").simulate("keydown", {
      keyCode: 13
    });
    wrapped.update();

    expect(wrapped.find("input").prop("value")).toEqual("");
  });
});
