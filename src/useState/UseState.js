import React, { useState } from "react";

const initialState = 5;

const UseState = () => {
  const [count, setCount] = useState(initialState);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Addition</button>
      <br />
      {count}
      <br />
      <button onClick={() => setCount(count - 1)}>Substraction</button>
    </div>
  );
};

export default UseState;
