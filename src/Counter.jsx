import React, { useState } from 'react'
const Counter = () => {
    let [Cnt, setCnt] = useState(0);


  return (
    <div className='btn'>
      <h1>{Cnt}</h1>
      <button onClick={()=>(setCnt(Cnt+1))}>Add</button>
      <button onClick={()=>(setCnt(Cnt+-1))}>Subtract</button>

    </div>
  )
}

export default Counter
