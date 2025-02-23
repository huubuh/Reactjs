import { useState } from "react";

export default function Lab03() {
  const [operator, setOperator] = useState('+'); 
  const [result, setResult] = useState(0);
  const [numA, setNumA] = useState(""); 
  const [numB, setNumB] = useState("");

  function handleChangeA(e) {
    setNumA(e.target.value);
  }

  function handleChangeB(e) {
    setNumB(e.target.value);
  }

  function handleOperatorChange(e) {
    setOperator(e.target.value);
  }

  function handleClick() {
    const a = parseFloat(numA);
    const b = parseFloat(numB);

    let res = 0;
    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "lỗi";
        break;
      default:
        res = 0;
    }

    setResult(res);
  }

  return (
    <>
      <input type="number" placeholder="Input a" value={numA} onChange={handleChangeA} />
      <br />
      <input type="number" placeholder="Input b" value={numB} onChange={handleChangeB} />
      <br />

      <input onChange={handleOperatorChange} name="group" type="radio" value="+" defaultChecked /> <span>+</span>
      <input onChange={handleOperatorChange} name="group" type="radio" value="-" /> <span>-</span>
      <input onChange={handleOperatorChange} name="group" type="radio" value="*" /> <span>*</span>
      <input onChange={handleOperatorChange} name="group" type="radio" value="/" /> <span>/</span>
      <br />

      <button onClick={handleClick}>Calculator</button>
      <br />
      <span>Result: {result}</span>
    </>
  );
}