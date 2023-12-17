
import React, { useEffect } from 'react'
import { useState } from "react";

import { click } from '@testing-library/user-event/dist/click';
import Quote from "./texts"
function TodoText({ addTexts, setNum }) {
    const [comeOut, setComeOut] = useState("")
    const [num, setNUM] = useState()
    useEffect(() => {
    setNum(num)
},[num])
   
    function btn(e) {
        // e.preventDefault()
        addTexts(comeOut)
        setComeOut("")
        setNUM(0)
        
    }

    return (
        <div>
            <p className='add'>Add new transaction</p>
            <div className='widths'></div>
            <div className='inputs'>
                <div className='tx'>
                    <p className='te'>Text</p>
                    <input type='text' onChange={(e) => { setComeOut(e.target.value) }} value={comeOut} placeholder='Enter text...'/>
                </div>
            </div>
            <div className='am'>
                <p className='ame'>Amount</p>
                <input type='number' onChange={(e)=>{setNUM(e.target.value)}} value={num} placeholder='Enter amount...'/>
            </div>
            <button onClick={btn} className='btn'>Add transaction</button>
        </div>
    )
}
export default TodoText