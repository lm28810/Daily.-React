import { useState } from 'react';

import React from 'react'

function Cvalue() {
    const [value, setValue]=useState(0)
  return (
    
    <div>
        <h1>Counter App</h1>
        <h2> {value} </h2>

        <button className='btn'onClick={()=>setValue(value + 1)}>Add</button>
        <button className='btn'onClick={()=>setValue(0)}>Reset</button>
        <button className='btn'onClick={()=>setValue(value - 1)}>Subtracting</button>


    </div>
  )
}

export default Cvalue
