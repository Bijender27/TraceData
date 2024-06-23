import React from 'react'
import warehouse from '../../../public/store-banner.jpg'
import WhitePaperBox from './WhitePaperBox'
import healthcare from "../../../public/healthcare.jpg";
import retail from "../../../public/retail.jpg";
import shipping from "../../../public/shipping.jpg";
import oilGas from "../../../public/oilGas.jpg";

const WhitePaperSection = () => {
  return (
    <div>
      <div className="min-h-[500px] bg-[#011237] py-14">
        <h2 className="text-center text-[#ffffff] text-3xl font-black mb-10">
          Whitepapers
        </h2>
        <div className="grid grid-cols-3 gap-5 max-w-[1200px] m-auto">
          <WhitePaperBox imgSrc={warehouse.src} colSpan="yes" />
          <WhitePaperBox imgSrc={retail.src} />
          <WhitePaperBox imgSrc={healthcare.src} />
          <WhitePaperBox imgSrc={shipping.src} />
          <WhitePaperBox imgSrc={oilGas.src} />
        </div>
      </div>
    </div>
  );
}

export default WhitePaperSection