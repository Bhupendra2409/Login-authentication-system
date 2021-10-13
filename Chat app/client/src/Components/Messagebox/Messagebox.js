import React from 'react'
import './messagebox.css'

export default function Messagebox({msg}) {
    return (
        <div className={`${msg.user} msg d-flex p-2 mx-3 my-2 rounded-3`}>
            {msg.text}
        </div>
    )
}
