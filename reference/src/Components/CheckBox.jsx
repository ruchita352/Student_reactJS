import React, { useReducer,useRef }  from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case "HTML":
        case "CSS":
        case "JavaScript":
        case "React":
            return state.includes(action.type)
                ? state.filter(skill => skill !== action.type)
                : [...state, action.type]
        default:
            return state
    }
}

const CheckBox = () => {
    const [state, dispatch] = useReducer(reducer, []);
    const items = useRef([]);

    const submit = () => {
        items.current = state;
        alert("addeed")
    }
    return (

        <div>
            <label><input type="checkbox" onClick={() => dispatch({ type: "HTML" })} /> HTML</label>
            <label><input type="checkbox" onClick={() => dispatch({ type: "CSS" })} /> CSS</label>
            <label><input type="checkbox" onClick={() => dispatch({ type: "JavaScript" })} /> JavaScript</label>
            <label><input type="checkbox" onClick={() => dispatch({ type: "React" })} /> React</label>
            <span>....</span>
            <button onClick={submit}>Submit</button>
            <p>Selected Skills: {state.join(', ') || 'None'}</p>
      
        </div>
    )
}

export default CheckBox
