import React from 'react'

type whitePaperProps = {
  title?: string;
  category?: string;
  publishDate?: Date | string;
  colSpan?: string;
  imgSrc?:string
};

const WhitePaperBox = (props:whitePaperProps) => {
  return (
    <div
      className={`h-[386px] bg-slate-400 ${
        props.colSpan && "col-span-2"
      } rounded-lg bg-cover bg-center relative flex flex-col justify-end p-5 pb-10`}
      style={{ backgroundImage: `url(${props.imgSrc})` }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-black/20 z-1"></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-gradient-to-t from-[#051841] to-[#000000]/0 z-10"></div>
      <div className="text-white relative z-20">
        <div className="text-xs font-thin flex gap-3 mb-3">
          <span>Logistcs & Warehousing</span>
          <span>15 May 2024</span>
        </div>
        <h3 className="text-xl">
          Lorem ipsum dolor sit amet consectetur. Turpis nisl velit habitant at
          sed magnis
        </h3>
      </div>
    </div>
  );
}

export default WhitePaperBox