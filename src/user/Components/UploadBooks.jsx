import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBooks() {
  return (
    <div className='bg-gray-200 p-10 my-20 mx-50'>
      <h1 className='text-center text-2xl font-medium'>Upload Book Details</h1>
      {/* Grid */}
      <div className='md:grid grid-cols-2 mt-10 w-full'>
         {/* Left section */}
         <div className='px-5'>
             <div className='mb-3'>
              <input type="text" placeholder='Book Title' className='w-full p-2 bg-white rounded ' />
             </div>
              <div className='mb-3'>
              <input type="text" placeholder='Author' className='w-full p-2 bg-white rounded ' />
             </div>
              <div className='mb-3'>
              <input type="text" placeholder='Book Cover Image' className='w-full p-2 bg-white rounded ' />
             </div>
              <div className='mb-3'>
              <input type="text" placeholder='Total Pages' className='w-full p-2 bg-white rounded ' />
             </div>
              <div className='mb-3'>
              <input type="text" placeholder='Original Price' className='w-full p-2 bg-white rounded ' />
             </div>
              <div className='mb-3'>
              <input type="text" placeholder='Discount Price' className='w-full p-2 bg-white rounded ' />
             </div>
              <div className='mb-3'>
              <textarea type="text" rows={5} placeholder='Abstract' className='w-full p-2 bg-white rounded ' />
             </div>
         </div>
         {/* Right section */}
         <div>
           <div className='mb-3'>
              <input type="text" placeholder='Publisher' className='w-full p-2 bg-white rounded ' />
             </div>
              <div className='mb-3'>
              <input type="text" placeholder='ISBN' className='w-full p-2 bg-white rounded ' />
             </div>
              <div className='mb-3'>
              <input type="text" placeholder='Language' className='w-full p-2 bg-white rounded ' />
             </div>
              <div className='mb-3'>
              <input type="text" placeholder='Category' className='w-full p-2 bg-white rounded ' />
             </div>
             {/* Upload Book images */}
             <div className='my-10 flex justify-center items-center'>
              <label htmlFor="bookImages">
                <input hidden type="file" id='bookImages' />
                <img width={'150px'} height={'150px'}  src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="no image" />
              </label>
             </div>
             {/* Preview uploaded image */}
             <div className='flex justify-center items-center'>
                  <img width={'70px'} height={'70px'}   src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqCnvIwVMhtV7FnZtGaSgspAt_4y992uev6Ek4Ntu5t5wo4VeB51nzApYU7syQ1pX035UawVrWQ39ZwGhWGHQj3_KsXwZGqedKNxklNxMOprVqiXA9AwSPcw"  alt="book card" />
                  <label htmlFor="bookUpload">
                    <input hidden type="file" id='bookUpload' />
                    <FaPlus className='text-2xl ms-3'/>
                  </label>
             </div>

         </div>
      </div>
      {/* reset and add books */}
      <div className='flex md:justify-end mt-10 px-5 justify-center '>
        <button className='bg-gray-400 text-white px-3 py-2 rounded hover:bg-white hover:text-gray-400'>RESET</button>
        <button className='bg-blue-400 text-white px-3 py-2 rounded hover:bg-white hover:text-blue-400 ms-5'>ADD BOOK DETAILS</button>
      </div>
    </div>
  )
}

export default UploadBooks
