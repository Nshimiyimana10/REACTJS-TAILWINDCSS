import React from 'react'
import {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState();
    const [comment, setComment] = useState();

    const updateComment = (e)=>{
      setComment(e.target.value);
    }
    const newName = (e)=>{
        setName(e.target.value);
    }

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
    <input type="text" placeholder='Enter your name' onChange={newName}/>
    <p>updated name is: {name}</p>
    <textarea className="" name="textarea" id="text-area" placeholder="Leave a message here" onChange={updateComment}/>
    <p className="bg-purple-600 text-white font-sans p-3 rounded-md">{comment}</p>
    </div>
      
    </div>
  )
}

export default Counter