import { useState } from 'react'
export default function Lab02(){

    var a = 0;
    var b = 0;
    var [result, setResult] = useState(0);
  
  function handleChangeA(e) {
    a = parseInt(e.target.value);
  
  
    
  }
  
  function handleChangeB(e) {
    b = parseInt(e.target.value);
  
  
    
  }
   
  function handleClick() {
  
    setResult(a+b);
    
    
    
  
  }
    return(
        <>
        <input onChange={handleChangeA} placeholder='input a' type="text" />
        <br />
        <input onChange={handleChangeB} placeholder='input b' type="text" />
    
        <br />
        <button onClick={handleClick}> Click </button>
        <br />
        <span>{result}</span>
        </>
    )
} 