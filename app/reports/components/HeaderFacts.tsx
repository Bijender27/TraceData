import React from 'react'

const HeaderFacts = () => {
  return (
    <div className="w-3/4 m-auto h-[150px] bg-white shadow-xl -mt-20 relative z-30 mb-10 rounded-md p-4 flex justify-center items-center">
      <ul className='flex justify-between w-full px-10'>
        <li className='flex flex-col items-center'>
          <span className='text-4xl font-bold'>15+</span>
          <span className='text-sm text-gray-600'>Industries covered</span>
        </li>
        <li className='flex flex-col items-center'>
          <span className='text-4xl font-bold'>15+</span>
          <span className='text-sm text-gray-600'>Industries covered</span>
        </li>
        <li className='flex flex-col items-center'>
          <span className='text-4xl font-bold'>15+</span>
          <span className='text-sm text-gray-600'>Industries covered</span>
        </li>
        <li className='flex flex-col items-center'>
          <span className='text-4xl font-bold'>15+</span>
          <span className='text-sm text-gray-600'>Industries covered</span>
        </li>
        
      </ul>
    </div>
  );
}

export default HeaderFacts