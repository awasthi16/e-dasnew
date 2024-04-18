import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")

    const navigate = useNavigate();

 

    const collectData= async()=>{ console.warn(name,email,password)
    let result= await fetch("http://localhost:5000/register" ,{
      method:"post",
      body:JSON.stringify({name,email,password}),
      headers:{"content-type":"application/json"}
      
    })
    result = await result.json()
     console.log(result);
     localStorage.setItem("user", JSON.stringify(result))
  }
  return (
    <div className='register'>
      <h1> Register</h1>
      <input className='inputBox' type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
      <input className='inputBox' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter E-mail'/>
      <input className='inputBox' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
      <button type='button' onClick={collectData} className='appButton'> Sign Up</button>
    </div>
  )
}

export default SignUp
