import React, {useState, useContext} from 'react'
import { CounterContext } from './CounterContext'
// import App from './../App'

const Counter = () => {

    // for react context
    // const [count, setCount] = useState(0)
    const {count, setCount} = useContext(CounterContext)

    return(
    <CounterContext.Provider value={{count, setCount}}>
        <div>
            <h1>The Count is : {count}</h1>
            <button onClick={() =>setCount(count + 1)}>Increment</button>
            <button onClick={() =>setCount(count - 1)}>Decrement</button>
        </div>
        {/* <App/> */}
    </CounterContext.Provider>
    )
}

export default Counter;