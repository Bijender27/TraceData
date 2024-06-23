import storeBanner from '../../../public/store-banner.jpg'
import { BsSliders2 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const StoreBanner = () => {
  return (
    <div className='mb-8'>
      <div
        className='min-h-[350px] bg-cover bg-center relative before:absolute before:content-[""] before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-black before:opacity-90 flex flex-col justify-center items-center'
        style={{ backgroundImage: `url(${storeBanner.src})` }}
      >
        <div className="relative z-10 text-center text-white mb-10">
          <h1 className="text-3xl font-bold mb-3">
            Explore Our Market Research Repository
          </h1>
          <h4>Discover Insights, Trends, and Reports Tailored to Your Needs</h4>
        </div>
        <div className="relative z-10 w-3/4 bg-[#EFEAEA] rounded-lg h-[50px] flex items-center px-1">
          <div className="flex gap-3 items-center w-full justify-between">
            <button
              type="button"
              className="flex gap-2 bg-white items-center px-1 h-[43px] w-[134px] justify-center rounded-md text-sm font-semibold flex-shrink-0"
            >
              <BsSliders2 /> All Reports
            </button>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search reports"
              className="bg-transparent outline-none h-[50px] w-full"
            />
            <button
              type="button"
              className="bg-black h-[43px] rounded-md text-white text-3xl w-[47px] flex items-center justify-center flex-shrink-0"
            >
              <IoSearch />
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default StoreBanner;