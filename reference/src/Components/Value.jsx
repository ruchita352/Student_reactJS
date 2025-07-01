import React, { useEffect, useRef, useState } from 'react'

const Value = () => {
    const[count,setCount] = useState(0)
    const prevcount = useRef();

    useEffect(()=>{
        prevcount.current = count
    },[count])

  return (
    <div>
    <p>current:{count}</p>
    <p>Previous:{prevcount.current}</p>
    <button onClick={()=>setCount(count+1)}>increment</button>
      
    </div>
  )
}

export default Value
