const initialState = 10;

const multiplyDivideTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "MULT":
      return state * action.payload;
    case "DIVIDE":
      return state / action.payload;
    default:
      return state;
  }
};

export default multiplyDivideTheNumber;
