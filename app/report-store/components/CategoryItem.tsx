import {BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const CategoryItem = ({...props}) => {
  return (
    <div
      className={`w-[246px] h-[246px] rounded-[10px] bg-cover relative before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-black before:rounded-[10px] before:opacity-70`}
      style={{ backgroundImage: `url(${props.imgLink})`,backgroundPosition:'center' }}
    >
      <div className="relative z-10 flex flex-col items-center justify-between h-full p-4">
        <span className="h-14 w-14 bg-white rounded-full flex items-center justify-center">
          <props.icon className="text-3xl" />
        </span>
        <Link href={""} className="text-lg font-bold text-center text-white">
          {props.name}
        </Link>
        <Link
          href={"/reports"}
          className="group w-full flex justify-between text-white hover:underline text-base font-semibold transition-all ease-in-out"
        >
          View Reports
          <BsArrowRight className="text-2xl -rotate-45 transition-all ease-in-out group-hover:rotate-0" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
