import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Users = () => {
let [content,setContent]=useState([])

let navigate = useNavigate()

useEffect(()=>{
  axios.get("http://localhost:3000/employess")
  .then((response)=>{setContent(response.data);})
  .catch(()=>{console.log("ERROORRR");})
  },[])

 let deleteUser=(id)=>{
  let confirm=window.confirm("like to delete")
  if(confirm){
    axios.delete(`http://localhost:3000/employess/${id}`)
    navigate('/')
  }
 
 }
  return (
   <div id={style.userPage}>
    {content.map((x)=>{
      return(
        <div>
          <table>
            <tr>
              <th colSpan="2">Employee:{x.id}</th>
            </tr>
            <tr>
              <td>Name</td>
              <td>:{x.empName}</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>:{x.empSalary}</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>:{x.empCompany}</td>
            </tr>
            <tr>
              <td><button><Link to={`/editpage/${x.id}`}>EDIT</Link></button></td>
              <td><button onClick={()=>{deleteUser(x.id)}}>DELETE</button> </td>
            </tr>
          </table>
        </div>
      )
    })}

   </div>
  )
}

export default Users