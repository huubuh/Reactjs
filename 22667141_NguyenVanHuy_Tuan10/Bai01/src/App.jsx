import React from "react";

import "./App.css";
import Counter from "./components/UseReduder/Counter";
import CounterRedux from "./components/Redux/CounterRedux";
import CounterToolkit from "./components/Toolkit/CounterToolkit";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <CounterRedux /> */}
      <CounterToolkit />
    </>
  );
}

export default App;
