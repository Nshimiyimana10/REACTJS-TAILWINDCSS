import React from 'react'
import React, {useState} from 'react';

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
    <p>{count}</p>
    <button onClick ={decrement}>Decrement</button>
    <button onClick ={reset}>Reset</button>
    <button onClick ={increment}>Increment</button>
    </div>
  )
}

export default Counter