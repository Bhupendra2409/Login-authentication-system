
import '../styles/mainmenu.css';
import {Leftpane} from "./Leftpane";
import {Center} from "./Center";
import React, { useState } from 'react'


export const Mainmenu = (props) => {
    

    const [msgs, setmsgs] = useState([
        {
        msgid:0,
        text : "How are you?",
        from : "Bhupendra",
        type: 'sender'
        },
        {
            msgid:1,
            text: "i m fine?",
            from : "Vaishu",
            type: 'reciever'
        },
        
    ]);
    let addmsg = (text,from,type)=>{
        let curmsgid = msgs[msgs.length-1].msgid +1;
        let newmsg = {
            msgid: curmsgid,
            text : text,
            from :from,
            type: type
        }
        setmsgs([...msgs,newmsg]);
    }
    return (
        
        <div className= "container mainmenu-cnt">   
                 <Leftpane msgs={msgs}/>           
                <Center msgs={msgs} addmsg={addmsg}/>
        </div>
       
    )
}
