import React from 'react'
import '../styles/cwtitle.css'
export const CWtitle = ({name,email}) => {
    return (
        <div className="CWtitle-cnt">
            <div className="name">{name}</div>
            <div className="email">{email}</div>
        </div>
    )
}
