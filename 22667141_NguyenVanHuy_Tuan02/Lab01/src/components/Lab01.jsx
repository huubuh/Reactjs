import { useState } from 'react'
export default function Lab01(){
    var [ text , setText] = useState('');

    var name = "default";
  
  function handleChange(e) {
    
    name = e.target.value;
  
    
  }
   
  function handleClick() {
  
    setText(name);
    
    
  
  }
    return(
        <>
         <input onChange={handleChange} id="name" type="text" />
        <br />
        <button onClick={handleClick}> Click </button>
        <br />
        <span>{text}</span>
        </>
       
    )
}