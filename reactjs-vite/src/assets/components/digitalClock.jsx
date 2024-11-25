import React,{useState} from 'react'

function DigitalClock() {
    const [time, setTime] = useState(new Date());

  return (
    <div>
    <p className='bg-black text-white'>00:00:00 </p>
    </div>
  )
}

export default DigitalClock;