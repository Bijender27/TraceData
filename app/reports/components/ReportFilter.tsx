'use client'
import { FaAngleDown } from "react-icons/fa6";
import { categoryData } from '../constants';


//console.log(categoryData.Agriculture);
const ReportFilter = () => {
const categories = categoryData;
const handelClick =(event: { target: any; })=>{
  console.log(event.target.childNodes[0]);
  

}

  return (
    <div className="bg-white  w-full p-3">
      <div className="flex justify-between pb-5 border-b border-[#DBDBDB] mb-5">
        <h3 className="text-xl font-bold">Filters</h3>
        <button className="text-sm text-[#B5B5B5]">Reset</button>
      </div>
      <div>
        <h4 className="flex w-full justify-between text-base font-bold mb-2">
          <span>Categories</span> <FaAngleDown />
        </h4>
        <ul className="pl-2">
          
          {Object.keys(categories).map((category) => {
            return (
              <li
                className="text-sm mb-2 font-medium "
                onClick={handelClick}
                key={category}
              >
                <span className="flex justify-between cursor-pointer text-[#011237]">
                  {category} <FaAngleDown />
                </span>
                <ul className="ps-4 mt-2 border-l inlin">
                  {Object.keys(categories[category]).map(subCategory => {
                    return (
                      <li key={subCategory}>
                        {subCategory.valueOf()}
                        <ul className="ps-4 mt-2 border-l inlin">
                          {categories[category][subCategory].map((tag) => {
                            return <li key={tag}>{tag}</li>;
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ReportFilter