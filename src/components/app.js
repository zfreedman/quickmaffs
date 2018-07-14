import React from "react";

import MathDisplay from "components/mathDisplay";
import MathInput from "components/mathInput";
require("../index.css")

export default () => {
  return (
    <div className="app">
      <h1>Quick Maffs</h1>
      <MathDisplay />
      <MathInput />
    </div>
  );
};
