import React from 'react'

function List() {
    const fruits = ['orange', 'banana', 'beans','avocado', 'coconut']
    const friends = [{ name: 'claude', age: 27, score: "A"},
                     { name: 'peter', age: 20, score: "B"},
                     { name: 'marcus', age: 30, score: "C"},
                     { name: 'john', age: 15, score: "D"}]
    const orderFruits = fruits.sort((a,b) => a.localeCompare(b));
    const fruitItems = fruits.map((fruit) => <li>{fruit}</li>)
    const result = friends.map((friend) => <p key ={friend.id}>{friend.id}{friend.name} is {friend.age} years old and his score is <strong>{friend.score}</strong></p>)
  return (
    <div>
       <ul className = "bg-gray-600 text-white rounded-md mt-10 text-center">{fruitItems}</ul>
       <div className = "bg-green">
        {result}
       </div>
    </div>
  )
}

export default List