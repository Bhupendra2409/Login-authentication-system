import React from 'react'
import '../styles/navele.css'
export const Navele = ({name,logo,status}) => {
    
    return (
        <div className="navele-cnt">
            <img src={logo} alt="" />
            <div className="text">{name}</div>
        </div>
    )
}
