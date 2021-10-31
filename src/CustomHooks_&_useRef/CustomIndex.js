import { useRef, useState } from "react";
import useRandomJoke from "./useRandomJoke";

function CustomIndex() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Aditya");
  const [lastName, setLastName] = useState("Tripathy");

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div>
      <h1>Code Generator</h1>
      <h2>{joke}</h2>
      <form>
        <input placeholder="First Name" ref={firstNameRef} />
        <input
          placeholder="Last Name"
          ref={lastNameRef}
          // value={lastName}
          // onChange={(e) => setLastName(e.target.value)}
        />
        <button onClick={generateJoke}>Generate Joke</button>
      </form>
    </div>
  );
}

export default CustomIndex;
