import React from 'react';
import {Todos} from './Todos';
import { useState, useEffect } from 'react';

export const Wardrobe = () => {

  const [data, setdata] = useState([{}])

  useEffect(() => {
     fetch('/wardrobe', {
      method:"GET",
      mode: 'no-cors',
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_API_URL,
        "Access-Control-Request-Headers": 'Content-Type, Authorization',
        'Accept': 'application/json',
       
      
    }}
  ).then(
      res => res.json()
    ).then(
      data => {
        setdata(data)
        
      }
    )
  }, [])

  return (
    <div>
        {<Todos todos = {data} />}
    </div>
  )
}
