import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import Child from './Child'

const App = () => {
  const [count,setCount] = useState(0)


const increment= useCallback(()=>{
    setCount((prevCount)=>prevCount+1)
},[])
  return (
    <div>
    <h2>{count}</h2>
    <Child onIncrement={increment}/>
      
    </div>
  )
}

export default App
