import React from 'react'
import {Employee} from './Employee.js'
export function Emp(){

  let users = [
  {
    id :11,
    name :'Naveen',
    salary:20000,
    place :'Madanapalle'
  },
  {
    id :12,
    name :'Gnanesh',
    salary:50000,
    place :'Chennai'
  },
  {
    id :13,
    name :'Chowdary',
    salary:60000,
    place :'Banglore'
  }
  ]
  
  return (
    <>
   {
  users.map(
    (u)=>{
      return <Employee key={u.id} id={u.id} name={u.name} age={u.salary} place={u.place}/>
    }
      )
     }
    </>
 )
}