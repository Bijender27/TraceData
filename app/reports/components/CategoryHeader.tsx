import React from 'react'
import CategorBanner from '../../../public/agriculture.jpg'

const CategoryHeader = () => {
  return (
    <div
      className='min-h-[500px] py-10 pt-24 relative w-full bg-cover before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-black/20'
      style={{ backgroundImage: `url(${CategorBanner.src})` }}
    >
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="max-w-[1200px] text-white relative z-20 m-auto">
        <h1 className='text-5xl font-bold mb-5'>Agriculture</h1>
        <p className='max-w-[600px] font-normal text-sm mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem libero blanditiis sunt nisi temporibus sint nulla ipsa tempore soluta. Laboriosam ab culpa omnis adipisci, repellat voluptate velit aliquam magni nemo!</p>
        <p className='max-w-[600px] font-normal text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem libero blanditiis sunt nisi temporibus sint nulla ipsa tempore soluta. Laboriosam ab culpa omnis adipisci, repellat voluptate velit aliquam magni nemo!</p>
      </div>
    </div>
  );
}

export default CategoryHeader