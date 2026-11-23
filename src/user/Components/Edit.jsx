import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

function Edit() {
  const [offCanvas, setOffCanvas] = useState(false)
  return (
    <div>
      {/* button */}
      <button onClick={() => setOffCanvas(true)} className='bg-black text-white font-bold p-2 rounded flex items-center justify-center hover:bg-white hover:text-black border'>
       <FaPen className='me-2' /> Edit
      </button>
      {/* Offcanvas */}
     { offCanvas && 
     <div>
       <div className='bg-gray-500/75 inset-0 fixed w-full h-full'></div>
        <div className='bg-white h-full z-50 fixed w-90 top-0 left-0'>
          {/* Head */}
            <div onClick={() => setOffCanvas(false)} className='flex justify-between items-center mb-5 bg-black text-white p-3 text-2xl'>
              <h1>Update User Profile</h1>
              <FaXmark />
  
            </div>
          {/* Body */}
          <div className='flex flex-col justify-center items-center my-5'>
            <label htmlFor="userProfile">
              <input hidden type="file" id='userProfile' />
              <img style={{height : '100px', width : '100px'}} src="https://img.magnific.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740&q=80" alt="user" />
              <button style={{marginLeft : '60px', marginTop : '-25px'}} className='bg-black text-white px-2 py-2 z-52 rounded fixed'> <FaPen /> </button>
            </label>
            {/* username */}
            <div  className='mt-10 mb-3 w-full px-5'>
              <input type="text" placeholder='Username' className='w-full bg-gray-100 rounded p-2' />
            </div>
            {/* password */}
            <div  className='mb-3 w-full px-5'>
              <input type="password" placeholder='Password' className='w-full bg-gray-100 rounded p-2' />
            </div>
            {/* new password */}
            <div  className='mb-3 w-full px-5'>
              <input type="password" placeholder='New Password' className='w-full bg-gray-100 rounded p-2' />
            </div>
            {/* bio */}
            <div  className='mb-3 w-full px-5'>
              <input type="text" placeholder='Bio' className='w-full bg-gray-100 rounded p-2' />
            </div>
            <div className='flex justify-end w-full mt-5 px-5'>
              <button className='bg-yellow-600 rounded font-bold text-white px-5 py-1'>RESET</button>
              <button className='bg-green-900 ms-3 rounded font-bold text-white px-5 py-1'>UPDATE</button>
            </div>
          </div>
  
        </div>
     </div>
      }


      
    </div>
  )
}

export default Edit
