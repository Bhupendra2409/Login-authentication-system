import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./chat.css";
import Infobar from "../Infobar/Infobar";
import Chatmsgs from "../Chatmsgs/Chatmsgs";
import Input from "../Input/Input";



const ENDPOINT = "localhost:5000";

let socket;

export default function Chat({ location }) {
  
  const [name, setname] = useState("");
  const [room, setroom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setname(name);
    setroom(room);
    console.log('mainasdf');
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert('Username is taken');
        window.location.href ="/";
        console.log(error);
      }
    });

    return () => {
      socket.off();
    };
  }, [location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages(m=>[...m,message])
    console.log('msg recieved');
    });
  }, []);

  let sMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };
  
  let closeChat= ()=>{
      console.log('off request');
      socket.close();
  }
  
  let msgonchange = (e) => {
    setMessage(e.target.value);
  };
  let isenterkey = (e) => { 
    if (e.key === 'Enter') {
      sMessage(e);
    }
  };

  return (
    <div>
      <div className="container d-flex vh-100 justify-content-center align-items-center">
        <div className="sm-cnt-cw vw-50 vh-50 d-flex px-4 py-3 flex-column">
          
          <Infobar closeChat={closeChat} room ={room}/>
          <Chatmsgs messages={messages}/>
          <Input message ={message} isenterkey={isenterkey} msgonchange={msgonchange}/>
        </div>
      </div>
    </div>
  );
}
