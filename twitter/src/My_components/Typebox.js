import React,{useState} from 'react'
import '../styles/typebox.css'
import sendicon from '../images/sendicon.svg'


export const Typebox = ({msgs,addmsg}) => {

    
    const [msg, setMsg] = useState("");
    const changemsg =(e)=>{
        setMsg(e.target.value);
    }
    const sendmsg =()=>{
        // console.log(msg);
        if(msg!=="")
        addmsg(msg,"Bhupendra","sender");
        setMsg("");
    }
    const sendmsgenter =(e)=>{
        if(e.key==='Enter' && msg !== ""){
        addmsg(msg,"Bhupendra","sender");
        // console.log(msg);
        setMsg("");
        }
    }
    return (
        <div className = "tb-cnt">
            <input type="text" className="myfont-600" id="msginp" onKeyDown={sendmsgenter} autoComplete='off' onChange={changemsg}  placeholder="Type here" value={msg}/>
            <button id="sendbtn" type="submit" onClick={sendmsg}><img src={sendicon} alt="" /></button>
        </div>
    )
}
