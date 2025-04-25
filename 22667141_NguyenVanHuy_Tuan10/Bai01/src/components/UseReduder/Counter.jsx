import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

const Counter = () => {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        -
      </button>
    </div>
  );
};

export default Counter;
