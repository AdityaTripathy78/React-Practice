import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decNumber, divNumber, incNumber, multNumber } from "./actions/index";

const Reducers = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const myState2 = useSelector((state) => state.multiplyDivideTheNumber);

  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Increment/Decrement Counter</h1>
        <h4>using React and Redux</h4>
        <button onClick={() => dispatch(incNumber(5))}>INCREMENT(+)</button>
        <br />
        <input type="text" value={myState} />
        <br />
        <button onClick={() => dispatch(decNumber(2))}>DECREMENT(-)</button>
      </div>

      <div className="my-5">
        <h1>Multiplication/Division Counter</h1>
        <h4>using React and Redux</h4>
        <button onClick={() => dispatch(divNumber(2))}>DIVISION(/)</button>
        <br />
        <input type="text" value={myState2} />
        <br />
        <button onClick={() => dispatch(multNumber(5))}>
          MULTIPLIACATION(*)
        </button>
      </div>
    </>
  );
};

export default Reducers;
