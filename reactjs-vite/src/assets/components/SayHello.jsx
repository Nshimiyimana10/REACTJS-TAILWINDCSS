import React from 'react'

function SayHello(props) {
  return (
    <div>
        <h1>My name is {props.name} and i'm {props.age} old</h1>
        {props.age >=25 ? <h3>Congratulation you are eligible to this program</h3>:<h3>Sorry!Try again later</h3>}
    </div>
  )
}

export default SayHello