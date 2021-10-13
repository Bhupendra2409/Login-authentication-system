import { React , useEffect} from 'react'
import '../styles/messagecnt.css'
import {Msgbox} from './Msgbox'

export const Messagecnt = ({msgs}) => {
    let scrolltobottom = document.getElementById('msg-cnt') ;
    
    useEffect(() => {
        if(scrolltobottom!==null)
        scrolltobottom.scrollTop= scrolltobottom.scrollHeight;
    }, [msgs, scrolltobottom]);
    
    return (
        <div id="msg-cnt">
           
            {
            msgs.map(i=>(
                <Msgbox key={i.msgid} msgdetails={i}/>
            ))
            }
        </div>
    )
}
