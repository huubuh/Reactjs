import { useState } from "react";

export default function Lab04(){
    const[input, setInput] = useState('');

    const[todos, setTodo] = useState([]);
    

    function handleDelete(index) {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodo(newTodos);
    }
 var newarray = todos.map((item, index)=>{
    return(        (<li key={index}>
        {item}
        <button className="delete-btn" onClick={() => handleDelete(index)}> delete</button>
    </li>) 
    
    )
 }
)


function handleClick() {
    setTodo([...todos, input]);
}
function handleChange(e) {
    setInput(e.target.value);
}
    return(
        <>
        <h1>Todo List</h1>  
        
        <input onChange={handleChange} type="text" /> <br />
        <button onClick={handleClick}>Add</button>
        <ol>
            {newarray}
        </ol>
             </>
    )
}   
