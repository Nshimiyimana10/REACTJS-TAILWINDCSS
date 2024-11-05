import React from 'react'

function SayHello(props) {
  return (
    <div>
        <h1>My name is {props.name} and i'm {props.age} old</h1>
        {props.age <25 ? <h3 className="bg-green-600 text-white text-center">
            Congratulation you are eligible to this program</h3>:<h3 className="bg-red-500 text-white text-center">Sorry!Try again later</h3>}
    </div>
  )
}

export default SayHello