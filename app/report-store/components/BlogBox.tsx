import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from "react-icons/bs";

type articleProps = {
  title?: string;
  url?: string;
  imgSrc?: string;
};

const BlogBox = (props:articleProps) => {
  return (
    <div className="w-[376px]">
      <div
        className="rounded-lg w-full h-[300px] bg-center bg-cover mb-4"
        style={{ backgroundImage: `url(${props.imgSrc})` }}
      ></div>
      <div className="flex flex-col gap-3">
        <span className="text-xs text-[#2057A3] font-medium">Blog Post</span>
        <h4 className="text-base font-semibold">
          Lorem ipsum dolor sit amet consectetur. Velit euismod sit elementum
          pelle
        </h4>
        <Link
          href={``}
          className="underline text-sm font-semibold flex gap-2 items-end"
        >
          Read Blog <BsArrowRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
}

export default BlogBox