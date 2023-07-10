import React, { useState } from 'react'
import Header from './Header'
import Footer from '../components/Footer'

function SignUp() {
    const [active, setActive]= useState(1)
  return (
    <div>
     <Header/>
     <div className='m-5 bg-[#FFEDD6]'>
        <div className='w-full'>
            <button onClick={()=>setActive(1)} className={`w-1/2 ${active==1 ? 'bg-[#755D3A]' : 'transparent'} ${active==1 ? 'text-white' : 'text-black'} p-2`  }>LOGIN</button>
            <button onClick={()=>setActive(2)} className={`w-1/2 ${active==2 ? 'bg-[#755D3A]' : 'transparent'} ${active==2 ? 'text-white' : 'text-black'} p-2`  }>SIGNUP</button>
        </div>
        {active==1&&
        <div className=' p-5'>
            <label className='text-xl'>Welcome back, <span className='font-semibold'>Login Here</span></label>
            <hr className='my-4 bg-black'></hr>
            <label className='text-sm text-gray-500'>Please enter your phone number or email address below. We will send you the OTP.</label>
            <input placeholder='Email or Phone Number' className='p-2 w-full mt-4 border border-black'></input>
            <button className='w-full bg-[#B59363] text-white p-2 mt-2 font-semibold'>SUBMIT</button>
            <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              class="mx-4 mb-0 text-center text-sm dark:text-neutral-200">
              Login with
            </p>
          </div>
          <div className='w-full flex justify-between '>
            <button className='bg-[#B59363] w-[47%] p-2 text-white'>EMAIL</button>
            <button className='bg-black w-[47%] p-2 text-white'>FACEBOOK</button>
          </div>
        </div>}
        {active==2&&
        <div className=' p-5'>
            <label className='text-xl'>Hello there, <span className='font-semibold'>Signup Here</span></label>
            <hr className='my-4 bg-black'></hr>
            {/* <label className='text-sm text-gray-500'>Please enter your phone number or email address below. We will send you the OTP.</label> */}
            <input placeholder='Name' className='p-2 w-full mt-4 border border-black'></input>
            <input placeholder='Email ID' className='p-2 w-full mt-2 border border-black'></input>
            <input placeholder='Mobile Number' className='p-2 w-full mt-2 border border-black mb-2'></input>
            <input type='checkbox'></input>
            <label className='text-xs ml-2'>I ACCEPT PURKAUSHAL <span>TERMS OF SERVICE AND PRIVACY POLICY</span></label>
            <button className='w-full bg-[#B59363] text-white p-2 mt-2 font-semibold'>CREATE ACCOUNT</button>
            <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              class="mx-4 mb-0 text-center text-sm dark:text-neutral-200">
              Signup with
            </p>
          </div>
          <div className='w-full flex justify-center '>
            
            <button className='bg-black w-[47%] p-2 text-white'>FACEBOOK</button>
          </div>
        </div>}

     </div>
     <Footer/>
      
    </div>
  )
}

export default SignUp
