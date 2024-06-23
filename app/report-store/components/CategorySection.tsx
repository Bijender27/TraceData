import React from 'react'
import CategoryItem from './CategoryItem';
import { CategoryData } from '@/app/Constants';
import Link from 'next/link';


const CategorySection = () => {
  return (
    <div className="max-w-[1200px] m-auto text-center">
      <h2 className="text-center text-[#011237] text-3xl font-black mb-5">
        Categories
      </h2>
      <div className='mb-10'>
        <div className="flex flex-wrap justify-center gap-5 m-auto mb-5">
          {CategoryData.map((item) => {
            return (
              <CategoryItem
                imgLink={item.imgUrl}
                name={item.name}
                icon={item.i}
                key={item.name}
              />
            );
          })}
        </div>
      </div>
      <Link href={""} className="w-[250px] h-[60px] bg-[#011237] rounded-[40px] flex items-center justify-center text-base font-semibold text-white mb-10 m-auto shadow-md hover:shadow-lg hover:shadow-slate-900 transition-all ease-in-out duration-200">
        View All Reports
      </Link>
    </div>
  );
}

export default CategorySection