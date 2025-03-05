import React from 'react'

function state() {
    let counter=0;
    function updateCounter(){
        ++counter;
        console.log(counter)
    }
  return (
    <div>state
        <h1>counter value is:{counter}</h1>
        <button onClick={updateCounter}>increment</button>
    </div>
  )
}

export default state