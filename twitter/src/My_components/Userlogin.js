import React, { useState } from 'react'
import axios from 'axios'
import '../styles/userlogin.css'



export const Userlogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    let onnamechange = (e)=>{
        setUsername(e.target.value);
    }
    let onpasschange=(e)=>{
        setPassword(e.target.value);
    }
    const formSubmit =(e)=>{
        e.preventDefault();
        console.log('submitted');
        if(username!=='' && password!==''){
            let request = {
                email : username,
                password : password
            }
            axios.post("http://localhost:8000/login",request).then(
                resp=>{
                    console.log(resp);
                    alert(resp.data.message,'error occured');
                    <h1>Hello</h1>
                    if(resp.data.success){
                        console.log('hello chutiye');
                        window.location.href = 'http://localhost:3000/chat';
                    }
                }
            ).catch(err=>{
                console.log(err);
            })
        }
        
    }

    return (
        <div className="big-userlogin-cnt container">
            <form className="userlogin-cnt" onSubmit={formSubmit} >
            <h1 className='myfont-600 mb-4'>Login</h1>
            <input className='myfont userlogin-inp-cnt my-2 p-1' type="email" placeholder="Enter Username" name="user" value={username} onChange={onnamechange}/>
            <input className='myfont userlogin-inp-cnt my-2 p-1' type="password" placeholder="Enter Password" name="pass" value={password} onChange={onpasschange}/>
         
            <button type="submit" className=" mt-3 userlogin-inp-cnt btn btn-success">Login</button>
           
            <button type="button" className=" mt-3  btn btn-primary btn-register">Register</button>
        </form>
        
        </div>
        
    )
}
