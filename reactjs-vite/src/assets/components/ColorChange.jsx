import React from 'react';
import {useState} from 'react';

function ColorChange() {
    const [color, setColor] = useState("#FFA500");

    function handleColorChange(e){
        setColor(e.target.value);
  }
  return (
    <div className="bg-slate-500 w-72 h-56 rounded-md border-none mt-10 flex flex-col justify-center items-center">
        <h1>This is the color change program </h1>

        <div>
             <label className="bg-blue-400" htmlFor="">selected color is:{color}</label><br/><br/>
             <input type="color" value={color} onChange={handleColorChange} />
        </div>
    </div>
  )
}

export default ColorChange