import React from 'react'
import {CWtitle} from './CWtitle'
import {Messagecnt} from './Messagecnt.js'
import {Typebox} from './Typebox.js'
import '../styles/centerpane.css'




export const Center = ({msgs,addmsg}) => {
    
    return (
        <div className="center-cnt">
            <CWtitle name="Bhupendra" email="bmalakar441@gmail.com"/>
            <Messagecnt msgs={msgs}/>
            <Typebox msgs={msgs} addmsg={addmsg}/>
        </div>
    )
}

