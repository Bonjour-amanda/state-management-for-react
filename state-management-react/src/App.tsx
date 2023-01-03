import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decremented, incremented } from './Redux/counter-slice' 
import useStore from './Zustand/useStore'
import './App.css'

function App() {

   {/* Redux */}
  // const {count} = useSelector((state:any) => state.counter)
  // const dispatch = useDispatch();

  {/* Zustand */}
  const {count, setCount} = useStore()
 
  return (
    <div className="App">
      <h1>The Count is : {count}</h1>

      {/* Redux */}
      {/* <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>  */}

      {/* Zustand */}
      <button onClick={() =>setCount(count + 1)}>Increment</button>
      <button onClick={() =>setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App
