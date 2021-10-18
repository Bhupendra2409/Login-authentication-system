import React, { useState, useEffect } from "react";
import "../login_styles/login.css";
import axios from "axios";
import { Link , useHistory } from 'react-router-dom'


export default function Loginform() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
     history.push("/");
    }
  }, [history]);

  let login = async (e) => {
    e.preventDefault();
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
        const {data}= await axios.post(
            "http://localhost:5000/api/auth/login",
            {email,password},
            config
        )
      console.log(data);
      if(data){
        localStorage.setItem("authToken",data.token);
        history.push("/");
      }
      
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setPassword('');
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  

  let isEnter = (e) => {
    if (e.key === "Enter") {
      login(e);
    }
  };

  return (
    <form className="login-form-cnt pb-3">
      <div className="input-data">
        <input
          className="px-2 mt-2"
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="px-2 mt-2"
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={isEnter}
        />
      </div>

      <button
        type="submit"
        className="login-page-btn btn-success btn"
        onClick={login}
      >
        Login
      </button>
      <button
        type="submit"
        className="login-page-btn btn mt-2"
      >
        <Link to="/forgotpassword">Forgot password?</Link>
        
      </button>
      {error && (
        <div className="alert alert-danger text-center p-2 mt-3">{error}</div>
      )}
    </form>
  );
}
