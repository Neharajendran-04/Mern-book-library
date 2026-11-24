import React from 'react'

function PurchaseHistory() {
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
                <img width={'200px'} height={'200px'} src="https://static.vecteezy.com/system/resources/previews/023/629/822/non_2x/web-button-icon-purchase-button-free-png.png" alt="Purchased" />
              </div>
           </div>
           {/* Right section */}
           <div>
              <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqCnvIwVMhtV7FnZtGaSgspAt_4y992uev6Ek4Ntu5t5wo4VeB51nzApYU7syQ1pX035UawVrWQ39ZwGhWGHQj3_KsXwZGqedKNxklNxMOprVqiXA9AwSPcw" alt="" />
           </div>
          </div>
      </div>
    </div>
  )
}

export default PurchaseHistory
