import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img src="https://www.myphukettravel.com/assets/front-end/images/404.gif" alt="Pagenotfound" />
      <p>Oh No!</p>
      <h1>Look Like You Are Lost!</h1>
      <p>The page you are looking for  is not available</p>
      <Link to={'/'} className='bg-black text-white mt-3 px-5 py-2 rounded'>Home</Link>
    </div>
  )
}

export default PageNotFound
