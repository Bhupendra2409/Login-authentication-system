import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Header from "./My_components/Header" 
import {Footer} from "./My_components/Footer";
import {Todos} from "./My_components/Todos";
import {Form} from "./My_components/Form";

function App() {
  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addtodo = (title,desc)=>{
    let sno;
    if(todos.length==0)sno=1;
    else
     sno = todos[todos.length-1].sno +1;
    const newtodo = {
      sno : sno,
      title : title,
      desc : desc
    }
    setTodos([...todos,newtodo]);
  }
  const [todos,setTodos]  =useState([
    {
      sno: 1,
      title : "go to Market",
      desc : "bajar chale ja bhai"
    }
    ,
    {
      sno:2,
      title : "go to waterfall",
      desc : "bajar chale ja bhai"
    },
    {
      sno:3,
      title : "go to bunjee jumping",
      desc : "bajar chale ja bhai"
    }
  ]);
  return (
    
    <>
    <Header title = "Hello"/>
    <Form add = {addtodo} />
    <Todos todos = {todos} onDelete = {onDelete} />
    <Footer/>
    </>
  );
}

export default App;
