import React from 'react'
import './chatmsgs.css'
import {ScrollWrapper} from 'react-bottom-scroll'

import Messagebox from '../Messagebox/Messagebox'

export default function Chatmsgs({messages}) {
    return (
        <ScrollWrapper>
            {
                messages.map(msg=>{
                    return   <Messagebox key={messages.indexOf(msg)} msg={msg}/>
                })
            }
        </ScrollWrapper>
    )
}
