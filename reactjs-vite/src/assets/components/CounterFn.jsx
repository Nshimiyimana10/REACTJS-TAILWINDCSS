import React from 'react'
import {useState, useEffect} from 'react';

function CounterFn() {
    const[count,setCount] = useState('0');
    const[color, setColor] = useState("green");
    function addCount(){
        setCount((count) => count + 1)
    }

    function removeCount(){
        setCount((count) => count - 1);
    }

    useEffect(() =>{
       document.title = `My count is ${count} and its title is ${color}`;
    },[count, color]);
  return (
    <div className ="bg-gray-300 rounded-md w-60 h-72 flex flex-col justify-center items-center gap-3">
       <p>My count is {count}</p>
      <button className="bg-blue-600 text-white text-center rounded-md border-none p-3 text-xs" onClick={addCount}>ADD</button>
      <button  className="bg-green-600 text-white text-center rounded-md border-none p-3 text-xs"  onClick={removeCount}>SUBSTRACT</button>
    </div>
  )
}

export default CounterFn