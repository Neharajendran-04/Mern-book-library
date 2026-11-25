import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
      {/* Header top */}
       <div className='flex justify-between items-center p-3 md:px-20'>
          <div className='flex items-center '>
            <img width={"50px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3GRtkod8-hsLa53F2UXCpMSIt6AFMRR73XqfaC0pYwe6xWFtNFXiRRA9&s=10" alt="logo" />
            <h1 className='text-2xl ms-3 font-bold'>Bookstore</h1>
           </div>
           {/* logout */}
           <button className='bg-black text-white px-3 py-2 rounded flex items-center me-3 hover:bg-white hover:text-black border font-bold'>Logout <FaPowerOff className='ms-3'/></button>
       </div>
      {/* Header marquee */}
      <div className='bg-black text-white p-3'>
          <marquee > Welcome Admin, Your all set to manage and monitor the system. Lets get into work!!!</marquee>
      </div>
    </>
  )
}

export default AdminHeader
