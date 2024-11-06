import React from 'react'
import {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    function decrement(){
        setCount(count+1);
    }

    function reset(){
        setCount(0);
    }

    function increment(){
        setCount(count+1);
    }
  return (
    <div>
    <p className="ml-[100px] text-3xl font-bold">{count}</p>
    <div className="flex gap-2">
    <button className="bg-orange-400 text-sm text-center rounded-md p-2 border-none" onClick ={decrement}>Decrement</button>
    <button className="bg-blue-500 text-white text-sm rounded-md border-none p-2" onClick ={reset}>Reset</button>
    <button className ="bg-yellow-300 text-white tex-sm rounded-md border-none p-2" onClick ={increment}>Increment</button>
    </div>
    
    </div>
  )
}

export default Counter