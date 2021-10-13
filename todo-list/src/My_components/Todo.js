import React from 'react'

export const Todo = (props) => {
    return (
        <div>
           <h1>{props.todo.title}</h1>
            <h5>{props.todo.desc}</h5>
            <button className="btn btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
        </div>
    )
}
