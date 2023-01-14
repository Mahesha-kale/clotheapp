import React from 'react'

export const TodoItem = ({todo}) => {
  let myStyle = {
    width: "20rem"
  }
  return (
    <>
    <div className="col-lg-6 mb-4">
    <div className="card" style={ myStyle}>
  <div className="card-body">
    <h5 className="card-title">{todo.clo_type}</h5>
    <p className="card-text">{todo.clo_brand} {todo.clo_Colour} {todo.clo_type}</p>
  </div>
</div>
</div>

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


<button classNameName='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
*/


/*
<div>
      <h4>{todo.clo_type}</h4>
      <p>{todo.clo_brand} {todo.clo_Colour} {todo.clo_type}</p>
      
    </div>
    <hr />
    */