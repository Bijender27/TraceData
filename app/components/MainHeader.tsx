import logo from '../../public/TraceData-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {
  IoSearch,
  IoPersonCircleOutline,
  IoCartOutline,
  IoChevronDown,
} from "react-icons/io5";

const MainHeader = () => {
  return (
    <div className="h-[70px] bg-white flex items-center w-full border-b">
      <div className="max-w-[1440px] px-5 flex items-center gap-5 w-full m-auto">
        <Image
          alt="TaceData Logo"
          src={logo.src}
          width={185}
          height={42}
          style={{ width: "185px", height: "42px" }}
          priority
        />
        <div className="flex justify-between w-full gap-5">
          <ul className="flex gap-5 text-sm">
            <li>
              <Link href={""} className="flex gap-2 items-center font-medium">
                Report Store <IoChevronDown />
              </Link>
            </li>
            <li>
              <Link href={""} className="flex gap-2 items-center font-medium">
                Consultig <IoChevronDown />
              </Link>
            </li>
            <li>
              <Link href={""} className="flex gap-2 items-center font-medium">
                Resources <IoChevronDown />
              </Link>
            </li>
            <li>
              <Link href={""} className="font-medium">
                Survey
              </Link>
            </li>
            <li>
              <Link href={""} className="font-medium">
                About Us
              </Link>
            </li>
          </ul>
          <div className="flex justify-end">
            <ul className="flex text-2xl gap-5">
              <li>
                <Link href={""}>
                  <IoSearch />
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <IoPersonCircleOutline />
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <IoCartOutline />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader