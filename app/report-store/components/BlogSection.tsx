import Link from 'next/link';
import React from 'react'
import retail from '../../../public/retail.jpg'
import healthcare from "../../../public/healthcare.jpg";
import oilGas from "../../../public/oilGas.jpg";
import BlogBox from './BlogBox';

const BlogSection = () => {
  return (
    <div>
      <div className="max-w-[1200px] m-auto py-12">
        <div className="mb-16 flex justify-between">
          <h2 className="text-center text-[#011237] text-3xl font-black ">
            Blogs
          </h2>
          <Link
            href={``}
            className="px-8 py-3 flex items-center justify-center border border-[#011237] rounded-lg font-medium"
          >
            View All Blogs
          </Link>
        </div>

        <div className="flex gap-10">
          <BlogBox imgSrc={retail.src} />
          <BlogBox imgSrc={healthcare.src} />
          <BlogBox imgSrc={oilGas.src} />
        </div>
      </div>
    </div>
  );
}

export default BlogSection