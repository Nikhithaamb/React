import React from 'react'
import style from "./home.module.css"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUsers = () => {

    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")

    let Navigate = useNavigate()

    let nameData = (e) =>{
        setName(e.target.value);
    }
    let salaryData = (e) =>{
        setSalary(e.target.value);
    }
    let companyData = (e) =>{
        setCompany(e.target.value);
    }

    let formHandle = (e)=>{
        e.preventDefault()
        // console.log(Emp Name :${name});
        // console.log(Emp Salary :${salary});
        // console.log(Emp Company :${company});

        let payload={
            empName:name,
            empSalary:salary,
            empCompany:company
        }

    axios.post("http://localhost:3000/employess",payload)
    .then(()=>{console.log("DATA SENT");})
    .catch(()=>{console.log("ERORRROR");})

    Navigate("/users")

    }

  return (
    <section id={style.myForm}>
        <form action="">
        <h1>CREATEUSER</h1>
        <label htmlFor="">NAME : </label>
        <input type="text" value={name} onChange={nameData}/> <br />

        <label htmlFor="">SALARY : </label>
        <input type="text" value={salary} onChange={salaryData}  /> <br />

        <label htmlFor="">COMPANY : </label>
        <input type="text" value={company} onChange={companyData}/> <br />
 
        <button onClick={formHandle}>SUBMIT</button>
        
        </form> 
    </section>
  )
}

export default CreateUsers