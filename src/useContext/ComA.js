import React, { createContext } from "react";
import ComB from "./ComB";

export const BioData = createContext();
export const empid = createContext();

const ComA = () => {
  return (
    <div>
      <BioData.Provider
        value={["Aditya", "  Tripathy", " 3", " SAGAR", " Maharana"]}
      >
        <empid.Provider value={1461624}>
          <ComB />
        </empid.Provider>
      </BioData.Provider>
    </div>
  );
};

export default ComA;
