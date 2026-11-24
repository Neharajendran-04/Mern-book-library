import React from 'react'

function UploadBookStatus() {
  return (
    <div className='p-30 my-15 shadow rounded'>
      {/* Duplicate book status */}
      <div className='bg-gray-100 rounded p-5 mt-4'>
          <div className='md:grid grid-cols-[3fr_1fr]'>
            {/* Left section */}
           <div className='px-4 '>
              <h1 className='text-2xl font-bold '>Title</h1>
              <h1 className='text-xl'>Author</h1>
              <h1 className='text-lg text-blue-600'>$ Price</h1>
              <p className='font-bold mt-10'>Abstract :</p>

              <div className='flex '>
                <img width={'150px'} height={'150px'} src="/pending.png" alt="Pending" />
                <img width={'120px'} height={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xXnD0mN6q9inapbQxiC8BmY2jiZanuAsjFjIwS7rngwpkHv1_BJlmmk&s=10" alt="sold" />
                <img width={'200px'} height={'200px'} src="https://png.pngtree.com/png-vector/20250924/ourlarge/pngtree-green-approved-stamp-label-png-image_17571920.webp" alt="approved" />
              </div>
           </div>
           {/* Right section */}
           <div>
              <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqCnvIwVMhtV7FnZtGaSgspAt_4y992uev6Ek4Ntu5t5wo4VeB51nzApYU7syQ1pX035UawVrWQ39ZwGhWGHQj3_KsXwZGqedKNxklNxMOprVqiXA9AwSPcw" alt="" />
              <div className='flex justify-end'>
               <button className='bg-red-600 text-white font-bold px-3 py-2 rounded mt-3 '>  DELETE</button>
              </div>
           </div>
          </div>
      </div>
    </div>
  )
}

export default UploadBookStatus
