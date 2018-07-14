import React from "react";
// import ReactDOM from "react-dom";
import {shallow} from "enzyme";

import App from "components/app";
import MathDisplay from "components/mathDisplay";
import MathInput from "components/mathInput";

it ("shows a math display", () => {
  // without enzyme
  // const div = document.createElement("div");
  // ReactDOM.render(<App />, div);
  // expect(div.innerHTML).toContain("<h1>Quick Maffs</h1>");
  // ReactDOM.unmountComponentAtNode(div);

  // with enzyme
  const wrapped = shallow(<App />);
  expect(wrapped.find(MathDisplay).length).toEqual(1);
});

it ("shows a math input", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(MathInput).length).toEqual(1);
});
