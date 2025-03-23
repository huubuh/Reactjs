import { useState } from "react";

const UseState1 = () => {
  const [state, setState] = useState(0);
  const handleChange = () => {
    setState(state + 1);
  };
  return (
    <>
      <button onClick={handleChange}>Nhấp chuột</button>
      <div>Count: {state}</div>
    </>
  );
};
export default UseState1;
