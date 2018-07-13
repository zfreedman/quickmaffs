import React from "react";
import ReactDOM from "react-dom";

import App from "../app";

it ("shows a title", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain("<h1>Quick Maffs</h1>");
  ReactDOM.unmountComponentAtNode(div);
});
