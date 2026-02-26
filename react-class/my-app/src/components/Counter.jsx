import  React, { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
        }
        const decrement = () => {
            if(count <= 0) {
                alert('You have reached your count limit')
                return
            }
            setCount(count - 1)   
    }
    useEffect(() => {
                console.log("Count Changed " + count)
            },[count])
    
  return (
    <div className='appContainer'>
        <div className='count-app'>
        <h2>Counter</h2>
        <div className='button-count'>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        </div>
        </div>
    </div>
  )
}

export default Counter