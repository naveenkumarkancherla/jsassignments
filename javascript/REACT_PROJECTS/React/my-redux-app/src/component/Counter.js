import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  increment,
  decrement
} from '../state/actions/index.js'

const Counter = () => {
  const dispatch=useDispatch()
  const counterval =  useSelector((state)=>state.count)
  return (
    <div>
      
      <button className="btn btn-success m-2" onClick={()=>dispatch(increment())}>+</button>
      <h1 className='btn m-2'>{counterval}</h1>
      <button className="btn btn-success m-2" onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter