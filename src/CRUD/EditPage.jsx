import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
const EditPage = () => {
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let navigate = useNavigate()

    let obj = useParams("")
     console.log(obj);

       let getName=(e)=>{
            setName(e.target.value)
        }
        let getSalary=(e)=>{
            setSalary(e.target.value)
        }
        let getCompany=(e)=>{
            setCompany(e.target.value)
        }
        useEffect(()=>{
            axios.get(`http://localhost:3000/employess/${obj.id}`)
            .then((response)=>{setName(response.data.empName);
            setSalary(response.data.empSalary);
            setCompany(response.data.empCompany);
            })
            .catch(()=>{console.log("ERORRRRR");})

        },[])
    
        let formHandle=(e)=>{
            e.preventDefault()
            let payload={
                empName:name,
                empSalary:salary,
                empCompany:company
            }
            axios.put(`http://localhost:3000/employess/${obj.id}`,payload)
            .then((response)=>{console.log("DATA UPDATED");
           setName(response.data.empName)
           setSalary(response.data.empSalary)
           setCompany(response.data.empCompany)})
            .catch(()=>{console.log("erroorr");})
            navigate("/")
        }
       
  return (
    <section id={style.myForm}>
        <form action="">
            <h1>EDIT USER</h1>
        <label htmlFor="">NAME : </label>
        <input type="text" value={name} onChange={getName}/> <br />

        <label htmlFor="">SALARY : </label>
        <input type="text" value={salary} onChange={getSalary}/> <br />

        <label htmlFor="">COMPANY : </label>
        <input type="text" value={company} onChange={getCompany}/> <br />
 
        <button onClick={formHandle}>SUBMIT</button>
        
        </form> 
    </section>
  )
}

export default EditPage