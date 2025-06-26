
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Effect = () => {

    const [user,setUser] = useState([])
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>setUser(data))
console.log("user fetched")
   },[])

  return (
    <div>
      <h2>user List</h2>
      <ul>
    
      {user.map((u) => (
        <li key={u.id}>{u.name}<br/>{u.username}</li>
    
      ))}
      
      </ul>
    </div>
  )
}

export default Effect
