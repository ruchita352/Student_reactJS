import React from 'react'
import { useState } from 'react'


const Counter = () => {

    //   state: The current value of the state.
// setState: A function to update the state.
// initialValue: The initial value of the state.

const [count,setCount]= useState(0)


  return (
    <div>
    <h1>Counter:{count}</h1>

    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
      
    </div>
  )
}

export default Counter

