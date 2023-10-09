import React from 'react'
import A from './A'
export default function Test(props) {
  return (
    <div className='heading'>
     {/* <A/> */}
      <h1>{props.strValue}</h1>
      <button type='submit' onClick={()=>{props.fun("Mohit")}}>onclick</button>
    </div>
  )
}
