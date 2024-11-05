import React from 'react'

function SayHello(props) {
  return (
    <div>
        <h1>My name is {props.name} and i'm {props.age} old</h1>
    </div>
  )
}

export default SayHello