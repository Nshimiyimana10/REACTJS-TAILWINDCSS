import React,{useState} from 'react'

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    function updatedTime(){
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${hours}:${minutes}:${seconds}`;
    }

  return (
    <div>
    <p className='bg-black text-white'>{updatedTime()} </p>
    </div>
  )
}

export default DigitalClock;