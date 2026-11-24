import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSideBar from '../Components/AdminSideBar'

function AdminSettings() {
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 '>
        {/* sidebar section */}
        <div className='col-span-1 '>
              <AdminSideBar />
        </div>
        {/* Dashboard section */}
        
        <div>
          Admin Settings
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default AdminSettings
