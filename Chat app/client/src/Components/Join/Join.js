import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Join() {
    const [name, setname] = useState('');
    const [room, setroom] = useState('');
    
    let onnamechange = (e)=>{
        setname(e.target.value);
    }
    let onpasschange=(e)=>{
        setroom(e.target.value);
    }
    let joinbtn = (e)=>{
        if(!name || !room){
            alert('No name/room entered')
            e.preventDefault();
        }
    }
    let isenterkey = (e)=>{
        if(e.key ==='Enter'){
            if(!name || !room){
                alert('No name/room entered')
                e.preventDefault();
            }
            else{
                window.location.href = `/chat?name=${name}&room=${room}`;
            }
        }
    }

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center">
                <h1 className='myfont-600 mb-4 text-center fs-1 fw-bold'>Login</h1>
                <input className='myfont userlogin-inp-cnt my-2 py-1 px-2 border-0 rounded-3' type="email" placeholder="Enter name" name="user" value={name} onChange={onnamechange} onKeyDown={isenterkey}/>
                <input className='myfont userlogin-inp-cnt my-2 py-1 px-2 border-0 rounded-3' type="room" placeholder="Enter room" name="pass" value={room} onChange={onpasschange} onKeyDown={isenterkey}/>
                <Link onClick={joinbtn} className='mt-3' to={`/chat?name=${name}&room=${room}`}>
                <button type="submit" className="userlogin-inp-cnt btn btn-danger">Join room</button>
                </Link>
                <button type="button" className=" mt-3  btn btn-outline-light">Make room</button>
                
                
             </div>
        
        </div>
        
    )
}
