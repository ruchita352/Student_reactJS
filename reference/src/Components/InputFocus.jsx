import React, { useRef } from 'react'

const InputFocus = () => {
    //performance optimiszation
    //useref hook directly referenced too dom elements
    const inputref = useRef(null); //create ref
    const handleclick = () => {
        inputref.current.focus();
    }


    return (
        <div>
            <input type='text' ref={inputref} placeholder='click too button' />
            <button onClick={handleclick}>Click me</button>
        </div>
    )
}

export default InputFocus
