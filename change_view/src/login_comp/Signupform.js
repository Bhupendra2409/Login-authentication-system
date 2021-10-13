import React,{useState} from 'react'
import axios from 'axios';

export default function Signupform() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conpassword, setConpassword] = useState('');

    let register =(e)=>{
        e.preventDefault();
        if(email==='' || password==='' || conpassword===''){
            alert('Enter all the details required');
        }
        else{
            if(password!==conpassword){
                alert('Password do not match')
            }
            else{
                let user = {
                    name,
                    email,
                    password
                }
                axios.post('http://localhost:5000/auth/register',user).then(res=>{
                    console.log(res);
                    alert(res.data.message)
                })
            }
        }
    }
    let isEnter=(e)=>{
        if(e.key==='Enter'){
            register(e);
        }
    }

    return (
        <div className='login-form-cnt pb-3'>
            <div className="input-data">
            <input className="px-2 mt-2" type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter Name" />
            <input className="px-2 mt-2" type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Email" />
            <input className="px-2 mt-2" type="text" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter Password" />
            <input className="px-2 mt-2" type="text" onChange={(e)=>setConpassword(e.target.value)} value={conpassword} placeholder="Confirm Password" onKeyDown={isEnter}/>
            </div>
            <button type='submit' className='login-page-btn btn-success btn' onClick={register} >Signup</button>
        </div>
    )
}
