import React from 'react'
import { IoSearch } from "react-icons/io5";

const ReportSearch = () => {
  return (
    <div className="max-w-[1200px] m-auto min-h-[100px] mb-4 p-5">
      <div className="h-14 bg-white shadow-lg max-w-5xl m-auto rounded-3xl flex gap-3 justify-between items-center p-3 border">
        <IoSearch className='text-2xl text-gray-500' />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search report"
          className="placeholder:text-gray-200 flex-1  outline-none"
        />
        <button type="button" className="bg-[#011237] h-10 rounded-full text-white min-w-28 flex justify-center items-center flex-shrink-0">
          Search
        </button>
      </div>
    </div>
  );
}

export default ReportSearch