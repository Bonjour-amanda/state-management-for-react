import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decremented, incremented } from './Redux/counter-slice' 
import useStore from './Zustand/useStore'
// import { atom, useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'
import { counter } from './Recoil/atoms'
import { atom , useAtom } from 'jotai'
import './App.css'

const countAtom = atom(0) // for jotai

function App() {

   {/* Redux */}
  // const {count} = useSelector((state:any) => state.counter)
  // const dispatch = useDispatch();

  {/* Zustand */}
  // const {count, setCount} = useStore()

  {/* Recoil */}
  // const [count, setCount] = useRecoilState(counter);

  {/* Jotai */}
  
  const [count, setCount] = useAtom(countAtom)
 
  return (
    <div className="App">
      <h1>The Count is : {count}</h1>

      {/* Redux */}
      {/* <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>  */}

      {/* Zustand */}
      {/* <button onClick={() =>setCount(count + 1)}>Increment</button>
      <button onClick={() =>setCount(count - 1)}>Decrement</button> */}

      {/* Recoil */}
      {/* <button onClick={() =>setCount(count + 1)}>Increment</button>
      <button onClick={() =>setCount(count - 1)}>Decrement</button> */}

      {/* Jotai */}
      <button onClick={() =>setCount(count + 1)}>Increment</button>
      <button onClick={() =>setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App
