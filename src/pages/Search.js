import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' 

function Search() {
  const navigation = useNavigate()
  const [products, setProducts] = useState([])


  const searchProduct = async(x)=>{
    try {
       const res = await axios.get("http://localhost:5001/api/allProduct")
      const searchData = res.data.data.filter((product)=> product.productName.toLowerCase().includes(x.toLowerCase()))
      setProducts(searchData)
      console.log(searchData);
      } catch (error) {
      console.log(error);
    }
  }
useEffect(()=>{
  searchProduct()
},[])

  return (
    <div className='bg-[#FFEDD6] h-screen'>
      <div className='py-2 bg-white shadow-lg'>
        <button onClick={() => navigation('/')} className='p-2 w-[10%]'><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
        <input onChange={(e)=>searchProduct(e.target.value)} className='border-none p-2 w-[87%]' placeholder='Search...'></input>
        <div className='w-full shadow-md  mx-auto'>
         {products?.map((item)=>

          <p className='my-1 border-b-2 pl-10 py-1'>{item.productName}</p>
         )}
          {/* <p className='my-1 border-b-2 pl-10 py-1'>this is search</p>
          <p className='my-1 border-b-2 pl-10 py-1'>this is search</p>
          <p className='my-1 border-b-2 pl-10 py-1'>this is search</p>
          <p className='my-1 border-b-2 pl-10 py-1'>this is search</p>
          <p className='my-1 border-b-2 pl-10 py-1'>this is search</p> */}
        
        </div>
      </div>
    </div>
  )
}

export default Search
