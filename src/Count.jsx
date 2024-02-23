import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/counterSlice'

function Count() {
    const count=useSelector((state)=>state.counterReducer.value)
    const dispatch=useDispatch()
  return (
     
    <div className='d-flex justify-content-center align-items-center mt-5' style={{width:'100%',height:'100%'}} >
     <div className='border rounded p-5 text-center shadow  ' style={{width:'500px',marginTop:'10%'}} id='div'>
        <h1 style={{fontSize:'100px',color:'yellow'}} className=' mb-5'>{count}</h1>
        <div>
        <button className='btn btn-primary' onClick={()=>dispatch(increment())}> Increment</button>
        <button className='btn btn-danger ms-4' onClick={()=>dispatch(reset())}> Reset</button>
        <button className='btn btn-warning ms-4' onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
     </div>
   
    </div>
        
  )
}

export default Count