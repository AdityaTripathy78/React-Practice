import React from "react";

const Hoc = (WrapComp) => {
  const newComponent = (props) => {
    console.log(props);
    return (
      <div style={{ backgroundColor: "red" }}>
        <WrapComp name="Rajesh" {...props} />
      </div>
    );
  };
  return newComponent;
};

export default Hoc;
