import React from 'react'
import {useState} from 'react'

function ToDoList() {
    const [fruits, setFruits] = useState(['mango', 'avocado', 'apple', 'banana']);

    function handleFruitChange(){
        const newFruit = document.getElementById('input-fruit').value;
                    document.getElementById('input-fruit').value ="";
        setFruits(prevFruits =>[...prevFruits, newFruit]);
    }
   

  return (
    <div>
      <ul>
        {fruits.map((fruit, index) =>
             <li key={index}>{fruit}</li>
        )}
      </ul>

      <input id="input-fruit" className="p-3 rounded-md" type="text" placeholder='Enter new fruit' />
      <button className="bg-blue-500 text-white text-center text-sm rounded-md p-3" 
      onClick={handleFruitChange}>Add food</button>
    </div>
  )
}

export default ToDoList