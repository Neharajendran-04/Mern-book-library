import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaCircle } from 'react-icons/fa'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../Components/Edit'

function Profile() {
  const [currentTab, setCurrentTab] = useState(1)

  return (
    <>
      <Header />
      <div style={{height : '200px'}} className='bg-black'></div>
         <div style={{height : '230px', width : '230px', borderRadius : '50%', marginLeft: "75px", marginTop: '-130px'}} className='bg-white'>
            <img style={{height : '230px', width : '230px', borderRadius : '50%'}} src="https://img.magnific.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
         </div>
         <div className='flex justify-between px-20 mt-5 '>
          <div className='flex items-center'>
            <h2 className='font-bold md:text-3xl text-2xl'>Username</h2>
            <FaCircleCheck className='text-blue-500 ms-3'/>
          </div>
          <Edit />

         </div>
         <p className='text-xl font-bold px-20 mt-5'>Bio</p>
         <p className='text-justify items-center px-20 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae beatae omnis sapiente nihil deleniti alias modi delectus neque. Quas nam saepe at odit. Facere reprehenderit quod aliquid esse similique?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque earum odit facilis minus commodi consequatur doloribus. A officia, animi neque vero dolores optio! Qui assumenda laborum maxime quis ab cumque!</p>
         <div className='flex justify-center items-center my-8 font-bold text-lg'>
          <p onClick={() => (setCurrentTab(1))} className={currentTab == 1?'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Upload Book</p>
          <p onClick={() => (setCurrentTab(2))} className={currentTab == 2?'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Upload Book Status</p>
          <p onClick={() => (setCurrentTab(3))} className={currentTab == 3?'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Purchase History</p>
         </div>
        {currentTab == 1 && <div>Upload Books</div>}
         {currentTab == 2 && <div>Upload Books Status</div>}
         {currentTab == 3 && <div>Upload Purchase History</div>}

      
      <Footer />
    </>
  )
}

export default Profile
