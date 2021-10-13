import React from 'react'
import {useState} from 'react';
export const Form = ({add}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const addtodo = (e)=>{
      e.preventDefault();
      if(title==="" || desc===""){
        alert("Title/ Description cannot be blank")
      }
      else{
      add(title,desc);
      console.log(title);
      console.log(desc);
      setTitle("");
      setDesc("");
    }
    }
    return (
        <form className="container my-3" onSubmit={addtodo}>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" onChange={e=>setTitle(e.target.value)}  value={title} id="title" aria-describedby="title" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1"  className="form-label">Description</label>
    <input type="text" className="form-control" onChange={e=>setDesc(e.target.value)} value={desc} id="desc" />
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    )
}
