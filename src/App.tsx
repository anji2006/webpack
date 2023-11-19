import React, { useState } from "react";
import tempFun from "./tempFun";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const onClickBtnd = () => {
    setCount(count + 1);
    tempFun();
  };
  return (
    <div>
      <div>This is React APP</div>
      <button type="button" onClick={onClickBtnd}>
        Click{count}
      </button>
    </div>
  );
};

export default App;
