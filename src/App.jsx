import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement, asyncincrementby2} from './store/Action/counterAction'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counterReducer.value);
  const incrementHandler = ()=>{
    dispatch(increment())
  }
  const decrementHandler = ()=>{
    dispatch(decrement())
  }
  const asyncHandler = ()=>{
    dispatch(asyncincrementby2())
  }
  
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementHandler} >increment</button>
      <button onClick={decrementHandler} >increment</button>
      <button onClick={asyncHandler} >increment</button>
    </div>
  ) 
}

export default App