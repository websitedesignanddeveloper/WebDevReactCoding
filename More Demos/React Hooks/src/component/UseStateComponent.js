import React ,{useState}from "react";
function UseStateComponent()
{
    const[count,setCount]=useState(0);
    const[name,setName]=useState("Walstar");
    return(
        <div>
            <p>Your name of company is {name}</p>
            <p>You clicked {count} time</p>
            <button onClick={()=>
            setCount(count+1)
            }>Clicked</button>
        </div>
    )
} 
export default UseStateComponent;