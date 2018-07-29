import React from "react";
import { mount } from "enzyme";

import App from "components/app";
import MathDisplay from "components/mathDisplay";
import MathInput from "components/mathInput";
import Root from "root";

// used in beforeEach and in each test scope
let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

it ("shows a math display", () => {
  // without enzyme
  // const div = document.createElement("div");
  // ReactDOM.render(<App />, div);
  // expect(div.innerHTML).toContain("<h1>Quick Maffs</h1>");
  // ReactDOM.unmountComponentAtNode(div);

  // with enzyme
  expect(wrapped.find(MathDisplay).length).toEqual(1);
});

it ("shows a math input", () => {
  expect(wrapped.find(MathInput).length).toEqual(1);
});
