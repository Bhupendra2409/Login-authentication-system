import React,{useState} from 'react'
import '../login_styles/login.css'
import Loginform from './Loginform'
import Signupform from './Signupform'

export default function Login() {

    const [status, setStatus] = useState('Login')
    return (
        <div className="big-cnt container d-flex">
        <div className="outer-cnt container d-flex flex-column">
            <div className="upper-cnt">
                <button className={`${status} btn btn-light  my-2 px-2`} onClick={()=>setStatus('Login')}>Login</button>
                <button className={`${status} btn btn-light  my-2 px-2`} onClick={()=>setStatus('Signup')}>Signup</button>
            </div>
            {status==='Login' && <Loginform/>}
            {status==='Signup' && <Signupform/>}
        </div>
        </div>
    )
}
