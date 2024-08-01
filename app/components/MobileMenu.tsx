import React from 'react'
import Link from 'next/link'
import { industryList, resourceList } from '../Constants'
import { IoChevronDown } from 'react-icons/io5'
import { HiMiniArrowUpRight } from 'react-icons/hi2'

const MobileMenu = () => {
  return (
    <div className="lg:hidden w-full bg-white pt-4 top-[62px] sm:top-[100px] z-20 left-0 right-0 absolute shadow-lg">
      <ul>
        <li className="relative group w-full items-center py-2 border-b">
          <span className="pb-1 flex items-center gap-1 font-bold text-base outline-none w-full justify-between px-4">
            Report Store{' '}
            <IoChevronDown className="w-[20px] h-[20px] group-hover:rotate-180 transition-all ease-in duration-150" />
          </span>
          <ul className="w-full bg-[#F7F7F7] border border-[#EDEDED] z-10 text-sm p-4 font-bold text-[#4F4F4F] max-h-[194px] overflow-y-scroll hidden group-hover:block">
            {industryList.map(industry => {
              return (
                <li className="mb-3" key={industry.industrySlug}>
                  <Link href={`./${industry.industrySlug}`}>{industry.industryName}</Link>
                </li>
              )
            })}
          </ul>
        </li>
        <li className="relative group w-full py-2 border-b">
          <span className="pb-1 flex items-center gap-1 font-bold text-base outline-none w-full justify-between px-4">
            Insights{' '}
            <IoChevronDown className="w-[20px] h-[20px] group-hover:rotate-180 transition-all ease-in duration-150" />
          </span>
          <ul className="w-full bg-[#F7F7F7] border border-[#EDEDED] z-10 text-sm p-4 font-bold text-[#4F4F4F] max-h-[194px] overflow-y-scroll hidden group-hover:block">
            {resourceList.map(resource => {
              return (
                <li className="mb-2" key={resource.resourceSlug}>
                  <Link href={`./${resource.resourceSlug}`}>{resource.resourceName}</Link>
                </li>
              )
            })}
          </ul>
        </li>
        <li className="font-bold text-base outline-none w-full justify-between px-4 py-3 border-b">
          <Link href={``}>About Ken</Link>
        </li>
        <li className="font-bold text-base outline-none w-full justify-between px-4 py-3 border-b">
          <Link href={``}>Consulting</Link>
        </li>
        <li className="font-bold text-base outline-none w-full justify-between px-4 py-3 border-b">
          <Link href={``}>Market Survey</Link>
        </li>
        <li className="font-bold text-base outline-none w-full justify-between px-4 py-3 border-b">
          <Link href={``}>Procurement</Link>
        </li>
        <li className="font-bold text-base outline-none w-full justify-between px-4 py-3 border-b">
          <Link href={``}>Expert Panel</Link>
        </li>
      </ul>
      <ul className="flex gap-2 items-center flex-col mb-4 mt-3">
        <li>
          <Link href={``} className="text-[#B01F24] text-xl text-nowrap ">
            Login / Sign up
          </Link>
        </li>
        <li className="w-full px-2">
          <Link
            href={``}
            className="w-full max-w-[371px] m-auto rounded h-[62px] bg-[#B01F24] flex justify-between px-4 items-center text-white text-[16px]"
          >
            Book discovery call <HiMiniArrowUpRight className="h-[34px] w-[34px]" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
