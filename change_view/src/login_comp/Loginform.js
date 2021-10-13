import React,{useState} from 'react'
import '../login_styles/login.css'
import axios from 'axios';

export default function Loginform() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let submitdetails = (e)=>{
        e.preventDefault();
        if(email==='' || password===''){
            alert('Email/password is empty');
        }
        else{
            let user = {
                email : email,
                password : password
            }
            
            axios.post('http://localhost:5000/auth/login',user).then(res=>{
                console.log(res);
                alert(res.data.message)
            })
    
        }
    }

    let isEnter=(e)=>{
        if(e.key==='Enter'){
            submitdetails(e);
        }
    }

    return (
        <div className='login-form-cnt pb-3'>
        <div className="input-data">
        <input className="px-2 mt-2" type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input className="px-2 mt-2" type="text" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} onKeyDown={isEnter}/>
        </div>
        <button type='submit' className='login-page-btn btn-success btn' onClick={submitdetails}>Login</button>
    </div>
    )
}
