import React, { useMemo, useState } from "react";

// var timestamp = new Date().getUTCMilliseconds();

const UseMemo = () => {
  const [count, setcount] = useState(0);
  const [name, setName] = useState("");

  const singleRender = useMemo(() => {
    console.log("Rerending not happing after every event calling");
    return (
      <>
        <h1 style={{ color: "red" }}>
          Rendering single times: {count} -- {name}
        </h1>
        <h1 style={{ color: "red" }}>Rendering single times</h1>
      </>
    );
  }, [name]);

  return (
    console.log("rending  happing after every event calling"),
    (
      <div>
        {singleRender}
        <h1>Rendering Multiple times :{count}</h1>
        <h1>Rendering Multiple times</h1>
        <br />
        <button onClick={() => setcount(count + 2)}>Click Here1</button>
        <button onClick={() => setName(Date.now() + Math.random())}>
          Click Here2
        </button>
        {/* Date.now() + Math.random() */}
      </div>
    )
  );
};

export default UseMemo;
