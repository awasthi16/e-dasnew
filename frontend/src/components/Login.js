import React,{ useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = ()=> {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate();
    useEffect(() => {
        const auth =localStorage.getItem("user");
        if(auth)
        {
          navigate("/")
        }
      });
    const handelLogin= async()=>{
        console.warn(email,password)
        let result= await fetch("http://localhost:5000/login", {
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{ "content-type":"application/json"}
        })
        result=await result.json();
        console.warn(result)
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result))
            navigate("/")


        }else{
            alert("please enter correct details")
        }
    }
  return (
    <div className='login'>
    <h1>Login</h1>
      <input type='text' onChange={(e)=>setEmail(e.target.value)} className='inputBox' placeholder='Enter Email' />
      <input type='password' onChange={(e)=>setPassword(e.target.value)} className='inputBox' placeholder='Enter Password'/>
      <button type='button'  onClick={handelLogin} className='appButton'>Ligin</button>
    </div>
  )
}

export default Login
