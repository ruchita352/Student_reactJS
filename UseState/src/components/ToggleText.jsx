import React, { useState } from 'react'

const ToggleText = () => {
const [visible,setVisible] = useState(false)
const handleToggle = ()=>{
    setVisible(!visible)
}


  return (
    <div style={{textAlign:"center",margin:"100px"}}>
      <button onClick={handleToggle}>

      {visible ? "Hide" : "Show"}
      Text
      </button>
      {visible  && <p>hello reeact</p>}
    </div>
  )
}

export default ToggleText
