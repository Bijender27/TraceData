import Link from 'next/link'
import React from 'react'


type articleProps={
    title?:string,
    url?:string,
    imgSrc?:string
}

const ArticleBox = (prop:articleProps) => {
  return (
    <div className="flex gap-5 pr-4">
      <div
        className="w-[137px] h-[137px] bg-cover bg-center rounded flex-shrink-0"
        style={{ backgroundImage: `url(${prop.imgSrc})` }}
      ></div>
      <div className="flex flex-col justify-between">
        <span className="text-xs text-[#2057A3] font-medium">Article Post</span>
        <h3 className="text-base font-semibold">
          Lorem ipsum dolor sit amet consectetur. Velit euismod sit elementum
          pelle
        </h3>
        <Link href={``} className="underline text-sm font-semibold">
          Read Article
        </Link>
      </div>
    </div>
  );
}

export default ArticleBox