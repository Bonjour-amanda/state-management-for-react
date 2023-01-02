import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decremented, incremented } from './Redux/counter-slice'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const {count} = useSelector((state:any) => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The Count is : {count}</h1>
      {/* <button onClick={() =>setCount(count + 1)}>Increment</button>
      <button onClick={() =>setCount(count - 1)}>Decrement</button> */}

      {/* Redux */}
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button> 
    </div>
  )
}

export default App
