import React from 'react'
import './TodoItem'
export default function Todoitem(props) {
    

    return (
       <div className="todoItem">
        
           <p>{props.name}{props.done.toString()}</p>
       </div>
    )
}
