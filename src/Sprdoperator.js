import React, { useState } from "react";

export default function Sprdoperator() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <br />
        {JSON.stringify(name)}
        {/* {JSON.parse(name)} */}
        {`${name.firstName} ${name.lastName}`}
      </form>
    </div>
  );
}
