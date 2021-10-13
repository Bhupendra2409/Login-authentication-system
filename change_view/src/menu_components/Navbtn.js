import React from 'react'
import '../menu_styles/navele.css'

export default function Navele({name,logo,status,onClick}){
    
    return (
        <button className="navele-cnt" onClick={onClick}>
            <img src={logo} alt="" />
            <div className="text" >{name}</div>
        </button>
    )
}
