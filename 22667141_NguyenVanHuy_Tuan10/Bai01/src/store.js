import { createStore } from "redux";

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

const store = createStore(counterReducer);
export default store;
