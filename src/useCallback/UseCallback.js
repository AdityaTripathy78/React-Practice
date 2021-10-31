import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const UseCallback = () => {
  const [age, setAge] = useState(15);
  const [salary, setsalary] = useState(25000);

  const incrementAge = useCallback(() => {
    return setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setsalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default UseCallback;
