import React from 'react'

const AddProduct = () => {

const [name,setName]=React.useState("")
const [price,setPrice]=React.useState("")
const [category,setCategory]=React.useState("")
const [company,setCompany]=React.useState("")
const [error,setError]=React.useState(false)
const addProduct = async()=>{

  console.warn(!name);
  if(!name || !price || !category || !company)
  {
    setError(true)
    return false;
  }
    console.warn(name,price,category,company);
    const userId= JSON.parse(localStorage.getItem("user"))._id
  
   let result= await fetch("http://localhost:5000/add-product",{
      method:"post",
      body:JSON.stringify({name,price,category,company,userId}),
      headers:{"Content-Type":"application/json"}
    })
    result = await result.json();
    console.warn(result)
}

  return (
    <div className='product'>
      <h1>Add Product</h1>
      <input type='text'  onChange={(e)=>{setName(e.target.value)}} value={name}
      placeholder='enter product name'  className='inputBox'/>
    { error && !name&& <span className='invalid-input'>Enter Valid Name</span>}
      <input type='text' onChange={(e)=>{setPrice(e.target.value)}} value={price} placeholder='enter product price' className='inputBox'/>
      { error && !price&& <span className='invalid-input'>Enter Valid Price</span>}
      <input type='text' onChange={(e)=>{setCategory(e.target.value)}} value={category} placeholder='enter product category' className='inputBox'/>
      { error && !category&& <span className='invalid-input'>Enter Valid category</span>}
      <input type='text' onChange={(e)=>{setCompany(e.target.value)}} value={company} placeholder='enter product company' className='inputBox'/>
      { error && !company&& <span className='invalid-input'>Enter Valid company</span>}
      <button onClick={addProduct} className='appButton'>Add Product</button>
    </div>
  )
}

export default AddProduct
