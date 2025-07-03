import React from 'react'

const Child = ({onIncrement}) => {
console.log('components rerenederd')
  return (
    <div>
 
<button onClick={onIncrement}>Increment</button>
    </div>
  )
}

const fetchData = useCallback(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await res.json();
    setData(json);
  }, []);

export default Child
