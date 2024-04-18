import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Up =  () => {

const [name,setName]=React.useState("")
const [price,setPrice]=React.useState("")
const [category,setCategory]=React.useState("")
const [company,setCompany]=React.useState("")
const params= useParams();

useEffect(()=>{
    getProductDetails();
},[])

const getProductDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:5000/product/${params.id}`)
    result = await result.json();
    console.warn(result)
}
const updateProduct =  ()=>{
    console.warn(name,price,category,company)
}

  return (
    <div className='product'>
      <h1>Update Product</h1>
      <input type='text'  onChange={(e)=>{setName(e.target.value)}} value={name}
      placeholder='enter product name'  className='inputBox'/>
    
      <input type='text' onChange={(e)=>{setPrice(e.target.value)}} value={price} placeholder='enter product price' className='inputBox'/>
     
      <input type='text' onChange={(e)=>{setCategory(e.target.value)}} value={category} placeholder='enter product category' className='inputBox'/>
      
      <input type='text' onChange={(e)=>{setCompany(e.target.value)}} value={company} placeholder='enter product company' className='inputBox'/>
      
      <button onClick={updateProduct} className='appButton'>Update Product</button>
    </div>
  )
}

export default Up
