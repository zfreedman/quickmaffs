import React from "react";

import MathKey from "components/mathKey";

function MathKeyboard () {
  return (
    <div className="mathKeyboard">
      {
        [1,2,3,4,5,6,7,8,9,0].map(e => {
          return <MathKey value={e} key={`mathKey${e}`}/>
        })
      }
    </div>
  );
}

export default MathKeyboard;
