import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
  let myStyle = {
    minheight: "100vh",
    margin: "40px auto"
  }

  
  return (
    
    <div className='container'  style={myStyle}>
      <div className="row">
            
      <h3 className='my-3'>Clothes List</h3>
      {props.todos.length===0?"No Clothes To Display":
        props.todos.map((todo)=>{
        return ( 
           <TodoItem todo={todo} key={todo.clo_id}/>
           )
      })}
      </div>
      </div>
    
  )
}
