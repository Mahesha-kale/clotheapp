import React from 'react'

export const TodoItem = ({todo}) => {
  return (
    <>
    <div>
      <h4>{todo.clo_type}</h4>
      <p>{todo.clo_brand} {todo.clo_Colour} {todo.clo_type}</p>
      
    </div>
    <hr />
    </>
  )
}



/*
export const TodoItem = (props) => {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
    </div>
  )
}


<button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
*/