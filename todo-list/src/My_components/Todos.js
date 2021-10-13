import React from 'react'
import {Todo} from "./Todo";

export const Todos = ({todos,onDelete}) => {
    return (
        <div className="container">
            {
                todos.map((todo)=>{
                    return <Todo todo ={todo} key={todo.sno} onDelete={onDelete}/>
                }
                )
            }
            
        </div>
    )
}
