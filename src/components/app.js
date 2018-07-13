import React from "react";

import MathDisplay from "./mathDisplay";
import MathInput from "./mathInput";

export default () => {
  return (
    <div>
      <h1>Quick Maffs</h1>
      <MathDisplay />
      <MathInput />
    </div>
  );
};
