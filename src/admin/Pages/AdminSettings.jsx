import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSideBar from '../Components/AdminSideBar'
import { FaPen } from 'react-icons/fa'

function AdminSettings() {
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 '>
        {/* sidebar section */}
        <div className='col-span-1 '>
              <AdminSideBar />
        </div>
        {/* Settings section */}
        
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl font-bold text-center mb-10'>Settings</h1> 
          <div className='md:grid grid-cols-2 items-center '>
            {/* First Section  */}
            <div>
             <h3 className='font-bold text-2xl mb-10'> Welcome, Admin 👋</h3>

<p className='text-justify'>This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>

<h4 className='font-bold text-lg my-5'>🔧 What You Can Manage in This Section:</h4>
<ul>
  
  <li>✏️ Update personal details (name, email, role, profile picture)</li>
  
  <li>🔐 Change or reset your password</li>
  
  <li>📢 Configure notification and alert preferences</li>
  
  <li>👥 Manage permissions based on assigned access level</li>
  
  <li>🧩 Customize dashboard visibility and layout</li>
</ul>

<p className='text-justify my-10'>Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>

            </div>
            {/* Second Section */}
              <div className='flex flex-col justify-center items-center m-10 bg-blue-100 p-10 '>
                        <label htmlFor="userProfile">
                          <input hidden type="file" id='userProfile' />
                          <img style={{height : '100px', width : '100px', borderRadius : "50%"}} src="https://img.magnific.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740&q=80" alt="user" />
                          <button style={{marginLeft : '60px', marginTop : '-25px'}} className='bg-black text-white px-2 py-2 z-52 rounded'> <FaPen /> </button>
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
                       
                        <div className='flex justify-end w-full mt-5 px-5'>
                          <button className='bg-yellow-600 rounded font-bold text-white px-5 py-1'>RESET</button>
                          <button className='bg-green-900 ms-3 rounded font-bold text-white px-5 py-1'>UPDATE</button>
                        </div>
                      </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default AdminSettings
