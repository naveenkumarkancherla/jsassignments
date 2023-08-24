import React from 'react'
import {User} from './Users.js'
export function Apps(){

  let users = [
  {
    id :11,
    name :'Naveen',
    age:21,
    place :'Madanapalle'
  },
  {
    id :12,
    name :'Gnanesh',
    age:19,
    place :'Chennai'
  },
  {
    id :13,
    name :'Chowdary',
    age:22,
    place :'SVP'
  }
  ]
  function displayMessage(){
    alert("Hello Guruva!");
  }
  
  return (
    <>
    <button className="btn btn-danger" onClick={displayMessage}>Clicke me I will Generate an Alert!</button>
   {
  users.map(
    (u)=>{
      return <User key={u.id} id={u.id} name={u.name} age={u.age} place={u.place}/>
    }
      )
     }
    </>
 )
}