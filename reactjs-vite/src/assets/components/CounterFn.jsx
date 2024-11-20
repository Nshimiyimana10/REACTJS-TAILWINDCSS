import React from 'react'
import {useState, useEffect} from 'react';

function CounterFn() {
    const[count,setCount] = useState('0');
    function addCount(){
        setCount((count) => count + 1)
    }

    function removeCount(){
        setCount((count) => count - 1);
    }
  return (
    <div>
       <p>My count is {count}</p>
      <button onClick={addCount}>ADD</button>
      <button onClick={removeCount}>SUBSTRACT</button>
    </div>
  )
}

export default CounterFn