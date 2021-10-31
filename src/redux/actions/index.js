export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decNumber = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

export const multNumber = (num) => {
  return {
    type: "MULT",
    payload: num,
  };
};

export const divNumber = (num) => {
  return {
    type: "DIVIDE",
    payload: num,
  };
};
