import React from 'react'
import './input.css'

export default function Input({message, isenterkey,msgonchange}) {
    return (
        <div>
          <input
            className="rounded-pill w-100 border border-0 my-3  py-2 px-3"
            type="text"
            id="inpmsg"
            value={message}
            onKeyDown={isenterkey}
            onChange={msgonchange}
          /> 
        </div>
    )
}
