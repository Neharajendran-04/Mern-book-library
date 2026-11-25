import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSideBar from '../Components/AdminSideBar'

function AdminResource() {
  const [currentTab, setCurrentTab] = useState(1)
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 '>
        {/* sidebar section */}
        <div className='col-span-1 '>
          <AdminSideBar />
        </div>
        {/* Dashboard section */}

        <div className='col-span-4 p-10'>
          <h1 className='font-bold text-3xl text-center'>All Resources</h1>
          <div className='flex justify-center items-center my-8 font-bold text-lg'>
            <p onClick={() => (setCurrentTab(1))} className={currentTab == 1 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Books</p>
            <p onClick={() => (setCurrentTab(2))} className={currentTab == 2 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Users</p>
          </div>
          {/* Tab contents */}
          {currentTab == 1 &&
            <div>
              <div className='md:grid grid-cols-4 w-full my-10'>
                <div className='shadow rounded p-3 m-4 md:my-0'>
                  <img width={'100%'} height={'200px'} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqCnvIwVMhtV7FnZtGaSgspAt_4y992uev6Ek4Ntu5t5wo4VeB51nzApYU7syQ1pX035UawVrWQ39ZwGhWGHQj3_KsXwZGqedKNxklNxMOprVqiXA9AwSPcw" alt="book" />
                  <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
                    <h3 className='text-lg font-bold'>Title</h3>
                    <p className='font-bold text-red-500'>Price</p>
                    <button className='bg-green-800 text-white p-2 rounded w-full font-bold'>Approve</button>
                  </div>
                </div>
              </div>
            </div>}
          {currentTab == 2 && 
          <div className='md:grid grid-cols-3 w-full my-5 '>
            {/* Duplicate according to the users */}
            <div className='rounded bg-gray-200 p-2 m-2'>
              <p className='text-red-500 font-bold text-md '>ID :</p>
              <div className='flex items-center mt-3'>
                <img width={'80px'} height={'80px'} style={{borderRadius: "50%"}} src="https://img.magnific.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740&q=80" alt="no image" />
                 <div className='ms-5 flex flex-col w-full'>
                  <h4 className='text-blue-400 font-bold text-md'>username</h4>
                  <p className='text-xs'>username@gmail.com</p>
                 </div>
              </div>
            </div>
            </div>}
        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminResource
