import React from 'react'
import coverPage from "@/public/coverPage.png";
import Image from "next/image";
import Link from "next/link";

type reportProp = {
  reportId: string;
  title: string;
  subTitle: string;
  pages: number;
  publishDate: number | Date;
  baseYear: number;
  startingPrice: number;
  urlSlug: string;
};

const ReportItem = (props:reportProp) => {
  return (
    <div className="bg-[#2057A3]/5 w-full min-h-10 rounded-lg p-2.5 flex mb-5">
      <div className="flex gap-4 items-center pr-4 border-r border-[#E1E1E1]">
        <div className="w-[120px] flex-shrink-0">
          <Image
            src={coverPage.src}
            width={152}
            height={210}
            alt="cover page"
            className="flex-shrink-0 "
          />
        </div>
        <div>
          <Link
            href={`/industry-report/${props.urlSlug}`}
            className="text-lg text-[#011237] font-bold mb-2 block"
          >
            {props.title}
          </Link>
          <p className="text-sm text-[#595959] mb-4 leading-5">
            {props.subTitle}
          </p>
          <ul className="flex gap-10  text-xs">
            <li>
              Pages: <strong>{props.pages}</strong>
            </li>
            <li>
              Published:{" "}
              <strong>
                {props.publishDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </strong>
            </li>
            <li>
              Base Year: <strong>{props.baseYear}</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/4 flex-shrink-0 flex flex-col pl-2 justify-center items-center gap-2">
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">Starting From</span>
          <span className="font-bold text-xl">${props.startingPrice}</span>
        </div>
        <Link
          href={``}
          className="p-2.5 bg-[#2057A3] text-white rounded-md text-sm text-center w-full"
        >
          Download Free Sample
        </Link>
        <Link
          href={``}
          className="p-2.5 bg-[#011237] text-white rounded-md text-sm text-center w-full"
        >
          Add to Cart
        </Link>
      </div>
    </div>
  );
}

export default ReportItem