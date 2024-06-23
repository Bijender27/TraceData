import React from 'react'
import warehouse from "../../../public/store-banner.jpg";
import Link from 'next/link';
import ArticleBox from './ArticleBox';

const ArticleSection = () => {
  return (
    <div className="py-14 bg-[#f5f5f5]">
      <div className="max-w-[1200px] m-auto">
        <h2 className="text-center text-[#011237] text-3xl font-black mb-5">
          Articles
        </h2>
        <div className="flex gap-10 m-auto">
          <div className="flex-1 flex flex-col gap-5">
            <ArticleBox imgSrc={warehouse.src} />
            <ArticleBox imgSrc={warehouse.src} />
            <ArticleBox imgSrc={warehouse.src} />
          </div>
          <div className="h-full lg:min-h-[450px] flex-grow max-w-[450px] bg-[#011237] rounded-xl flex-1 p-5 flex flex-col justify-center text-center text-white">
            <h4 className="text-lg font-semibold mb-6">
              Lorem ipsum dolor sit amet consectetur. Velit euismod sit{" "}
            </h4>
            <Link href={``} className="font-base underline font-medium">
              View All Article Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleSection