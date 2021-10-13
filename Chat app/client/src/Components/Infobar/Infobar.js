import React from 'react'
import './infobar.css'
import {Link} from 'react-router-dom'

export default function Infobar({closeChat, room}) {
     
   

    return (
        <div className=" d-flex align-items-center p-2 justify-content-between">
            <div className="leftinnercnt">
                <h1>{room}</h1>
            </div>
            <div className="rightinnercnt">
                <Link onClick={closeChat} to={'/'}>
                <button type="button" aria-label="Close" className="btn-close btn-close-white"/>
                </Link>

            </div>
        </div>
    )
}
