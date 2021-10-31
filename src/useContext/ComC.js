import React, { useContext } from "react";
import { BioData, empid } from "./ComA";

const ComC = ({ name }) => {
  const MyName = useContext(BioData);
  const Empid = useContext(empid);
  return (
    <>
      <h1>Hello This is {MyName}</h1>
      <h2>My Empid is {Empid}</h2>
    </>
  );
};

export default ComC;
