import { useState } from "react";
export default function Counter(){
    const [count,setCount] = useState(0);
    const [value,setValue] = useState("Type here!");
    return (<>
    <input type="text" value={value} 
    onChange={(event)=>{setValue(event.target.value)}}></input>
    <p></p>
    <b> You type {value.length} chars</b>
    <p></p>
    <button onClick={()=>{
        setCount(count+1)
    }}>Clicks me!</button>
    <button onClick={()=>{
        setCount(0)
    }}>Reset!</button>
    <p>You Clicked {count} times</p>
    </>)
}