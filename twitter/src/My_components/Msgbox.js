import React from 'react'
import '../styles/msgbox.css'

export const Msgbox = ({msgdetails}) => {
    // console.log(msgdetails);
    return (
        <div className={`${msgdetails.type} msgbox`}>
            {msgdetails.text}
        </div>
    )
}
