import React, { useEffect, useState } from "react";

export default function Maparray() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const addItem = () => {
    setItems([
      ...items,
      {
        value: Math.floor(Math.random() * 10),
      },
    ]);
  };

  useEffect(() => {
    console.log("use effect called");
    return () => {
      console.log("component will unmount");
    };
  }, [count]);

  return (
    <div>
      <button onClick={addItem}>Add a Random Number</button>
      <ul>
        {items.map((item) => (
          <li key={item.value}>{item.value}</li>
        ))}
      </ul>
      <button onClick={() => setCount(count + 1)}>
        button clicked {count} times
      </button>
    </div>
  );
}
