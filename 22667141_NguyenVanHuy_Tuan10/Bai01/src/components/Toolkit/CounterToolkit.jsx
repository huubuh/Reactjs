import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../counterSlice";

const CounterToolkit = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
    </div>
  );
};

export default CounterToolkit;
