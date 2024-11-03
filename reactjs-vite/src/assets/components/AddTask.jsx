import React from 'react'

function AddTask() {
    const container = document.getElementById("main-container");
    const taskInput = document.getElementById("task-input");
    const button = document.getElementById("task-btn");
    const items = document.getElementById("list-items");

  return (
    <>
    <div className="mt-10" id="main-container">
        <label htmlFor="task">Enter task:</label><br/>
        <div className="flex gap-4">
        <input className="p-2 rounded-md" type="text" placeholder='Enter task' id="task-input" />
        <button id="task-btn" className='bg-red-600 text-white text-xs text-center p-2 h-10 rounded-md'>Add task</button>
        </div>
        <ul id="list-items"></ul>
        
    </div>

    </>
  )
}

export default AddTask