import React from 'react'

export default function Login() {
  return (
    <div className='flex flex-col items-center'>
      <div>
        <h1 className=' text-3xl font-bold flex justify-center p-10'>
          Leave your number and we'll call you back
        </h1>
        <p className='text-sm text-gray-500 text-center max-w-2xl mx- mb-20'>
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
        </p>
      </div>
      <form className='bg-gray-100 w-250 h-130 flex flex-col items-center justify-center'>
        <div className='flex flex-col'>
          <label htmlFor="name" className='font-semibold'>Name</label>
          <input id='name' type="text"  className='border w-70 h-10 border-gray-300'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="number" className='font-semibold'>Phone number</label>
          <input id='number' type="text" className='border w-70 h-10 border-gray-300'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="description" className='font-semibold'>Description</label>
          <input id='description' type="text" className='border w-70 h-10 border-gray-300'/>
        </div>
        <div className='p-5'>
          <button className='bg-green-600 text-white w-40 h-13 rounded-sm'>Send</button>
        </div>
          <p className='text-sm text-gray-500 '>We call back in 10-30 minutes, guaranteed!</p>
      </form>
    </div>
  )
}
