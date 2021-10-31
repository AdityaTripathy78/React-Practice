import React, { useReducer } from "react";

const initialState = 5;
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INC</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DEC</button>
    </div>
  );
};

export default UseReducer;
