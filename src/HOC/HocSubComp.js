import React from "react";
import Hoc from "./Hoc";

const HocSubComp = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Coders Never quit</h1>
    </div>
  );
};

export default Hoc(HocSubComp);
