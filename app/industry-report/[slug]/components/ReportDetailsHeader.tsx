import React from 'react'
import Image from 'next/image'
import ReportCover from '../../../../public/coverPage.png'

const ReportDetailsHeader = () => {
  return (
    <div className="mt-5">
      <div className="flex max-w-[1200px] m-auto gap-10 ">
        <div className="flex-shrink-0">
          <Image src={ReportCover.src} alt="" width={170} height={247} />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            Brazil Lubricants Market Outlook to 2028
          </h1>
          <p className="text-sm text-gray-700">
            By Automotive Lubricants (Passenger Vehicle Motor Oils (PCMO), Heavy
            Duty Diesel Engine Oil, Gear Oil, Transmission Fluids, Hydraulic Oil
            and Greases) and Industrial Lubricants (Hydraulic Oil, Industrial
            Gear Oil, Transformer Oil, Turbine Oil, Greases and Compressor Oils)
          </p>
          <ul className="flex justify-between mt-5 flex-wrap">
            <li className="text-sm">
              Product Code: <span className="font-bold">TR1240</span>
            </li>
            <li className="text-sm">
              Author: <span className="font-bold">Joe Biden</span>
            </li>
            <li className="text-sm">
              Region: <span className="font-bold">South America</span>
            </li>
            <li className="text-sm">
              Published on: <span className="font-bold">Feburary 2024</span>
            </li>
            <li className="text-sm">
              Total Pages: <span className="font-bold">150</span>
            </li>
          </ul>
          <div className="flex justify-between items-center mt-5">
            <div className="text-sm">
              Starting Price: <span className="font-bold">$1500</span>
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                className="w-[270px] h-[45px] text-sm flex items-center justify-center rounded-full text-white bg-[#2057A3] font-medium hover:shadow-xl transition-all ease-in"
              >
                Download Sample Report
              </button>
              <button
                type="button"
                className="w-[270px] h-[45px] text-sm flex items-center justify-center rounded-full border border-gray-400 font-medium hover:text-white hover:bg-[#2057A3] hover:shadow-xl transition-all ease-in"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportDetailsHeader