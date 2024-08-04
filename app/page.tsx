/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import bannerImage from '../public/hero-image.jpg'
import aboutImage from '../public/about-img1.jpg'
import Image from 'next/image';
import {
  PiUsers,
  PiChartLineUp,
  PiRocketLight,
  PiHandshakeLight,
  PiPresentationChartLight,
  PiSmileyThin,
  PiPhoneThin,
  PiMapPinLight,
  PiClockAfternoon,
} from "react-icons/pi";

const Home = () => {
  return (
    <div>
      <div className="bg-[#155bd5] text-white py-10">
        <div className="flex flex-col lg:flex-row max-w-[1200px] m-auto gap-5 justify-between items-center px-5 lg:px-0">
          <div className="w-full lg:w-[50%]">
            <h1 className="text-4xl font-bold mb-5">
              We Transform The Growth Journey For Business Enterprises
            </h1>
            <p className="mb-5">
              TraceData Research follows straightforward yet effective goal of
              converting unprocessed data into useful insights that enable
              companies to prosper. To strengthen our analytical skills, we
              embraced machine learning, artificial intelligence, and advanced
              analytics. With the addition of services including competitive
              research, predictive modelling, and consumer insights, our range
              has grown globally. Our path, which keeps pushing the boundaries
              of market research, is one of enthusiasm, creativity, and the
              unwavering quest of information.
            </p>
            <button
              type="button"
              className="px-6 py-2 bg-white text-[#155bd5] border-transparent border font-medium rounded hover:border hover:bg-transparent hover:border-white hover:text-white"
            >
              Get Started
            </button>
          </div>
          <div className="hidden md:block">
            <Image
              src={bannerImage.src}
              width={500}
              height={500}
              alt="banner"
            />
          </div>
        </div>
      </div>
      <div className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] flex flex-col lg:flex-row m-auto items-center gap-2 px-5 lg:px-0">
          <div className="hidden md:flex items-center justify-center flex-1 ">
            <Image
              src={aboutImage.src}
              width={400}
              height={400}
              alt="about image"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-3">Who We Are?</h2>
            <p className="text-[#6d6d6d]">
              The business offers consultancy services in addition to customised
              and syndicated research studies. The world's most prestigious
              universities and Fortune 500 firms utilise the TraceData database
              to comprehend the local and global business environment. Thousands
              of facts and in-depth analyses on 46 sectors across 25 major
              global nations are available in our database.
            </p>
          </div>
        </div>
      </div>
      <section id="services" className="py-14">
        <div className="section-title-five max-w-[1200px] m-auto mb-5">
          <div className="col-12">
            <div className="text-center md:w-1/2 m-auto px-5">
              <h6 className="py-2 px-8 rounded-full border-2 border-[#155bd5] w-fit m-auto mb-3">
                Services
              </h6>
              <h2 className="text-3xl font-bold mb-3">
                Overview of Market Research Services
              </h2>
              <p className="text-base text-[#6d6d6d] leading-normal">
                Our market research services give companies vital information
                that helps them make strategic decisions and promote long-term
                success.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] m-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group py-10 px-8 border border-[#efefef] rounded-xl transition-all ease-out duration-300 hover:shadow-lg">
              <div className="w-[78px] h-[78px] rounded-full mb-6 bg-white border-2 border-[#155bd5] flex items-center justify-center text-[#155bd5] group-hover:bg-[#155bd5] group-hover:text-white transition-all ease-out duration-300">
                <PiUsers className="text-4xl" />
              </div>
              <div className="service-content">
                <h4 className="text-xl font-semibold mb-5">
                  Consumer insights
                </h4>
                <p className="text-[#6d6d6d] text-base">
                  Using thorough segmentation, surveys, and focus groups, learn
                  about the attitudes, preferences, and behaviors of your target
                  audience.
                </p>
              </div>
            </div>

            <div className="group py-10 px-8 border border-[#efefef] rounded-xl transition-all ease-out duration-300 hover:shadow-lg">
              <div className="w-[78px] h-[78px] rounded-full mb-6 bg-white border-2 border-[#155bd5] flex items-center justify-center text-[#155bd5] group-hover:bg-[#155bd5] group-hover:text-white transition-all ease-out duration-300">
                <PiChartLineUp className="text-4xl" />
              </div>
              <div className="service-content">
                <h4 className="text-xl font-semibold mb-5">
                  Competitive Analysis
                </h4>
                <p className="text-[#6d6d6d] text-base">
                  Keep up with the latest developments by thoroughly examining
                  the tactics, advantages, disadvantages, and market positions
                  of your rivals.
                </p>
              </div>
            </div>

            <div className="group py-10 px-8 border border-[#efefef] rounded-xl transition-all ease-out duration-300 hover:shadow-lg">
              <div className="w-[78px] h-[78px] rounded-full mb-6 bg-white border-2 border-[#155bd5] flex items-center justify-center text-[#155bd5] group-hover:bg-[#155bd5] group-hover:text-white transition-all ease-out duration-300">
                <PiRocketLight className="text-4xl" />
              </div>
              <div className="service-content">
                <h4 className="text-xl font-semibold mb-5">
                  Trend forecasting
                </h4>
                <p className="text-[#6d6d6d] text-base">
                  To foresee changes and seize future possibilities, keep an eye
                  on growing markets and the most recent trends in your
                  business.
                </p>
              </div>
            </div>

            <div className="group py-10 px-8 border border-[#efefef] rounded-xl transition-all ease-out duration-300 hover:shadow-lg">
              <div className="w-[78px] h-[78px] rounded-full mb-6 bg-white border-2 border-[#155bd5] flex items-center justify-center text-[#155bd5] group-hover:bg-[#155bd5] group-hover:text-white transition-all ease-out duration-300">
                <PiHandshakeLight className="text-4xl" />
              </div>
              <div className="service-content">
                <h4 className="text-xl font-semibold mb-5">
                  Brand and Product Testing
                </h4>
                <p className="text-[#6d6d6d] text-base">
                  Use our brand and product testing services to evaluate your
                  concept before launching a new product or campaign.
                </p>
              </div>
            </div>

            <div className="group py-10 px-8 border border-[#efefef] rounded-xl transition-all ease-out duration-300 hover:shadow-lg">
              <div className="w-[78px] h-[78px] rounded-full mb-6 bg-white border-2 border-[#155bd5] flex items-center justify-center text-[#155bd5] group-hover:bg-[#155bd5] group-hover:text-white transition-all ease-out duration-300">
                <PiPresentationChartLight className="text-4xl" />
              </div>
              <div className="service-content">
                <h4 className="text-xl font-semibold mb-5">
                  Market Entry/Expansion
                </h4>
                <p className="text-[#6d6d6d] text-base">
                  Our strategy study addresses market viability, risk
                  assessment, and scalability planning whether we're entering a
                  new market or growing in an already-existing one.
                </p>
              </div>
            </div>

            <div className="group py-10 px-8 border border-[#efefef] rounded-xl transition-all ease-out duration-300 hover:shadow-lg">
              <div className="w-[78px] h-[78px] rounded-full mb-6 bg-white border-2 border-[#155bd5] flex items-center justify-center text-[#155bd5] group-hover:bg-[#155bd5] group-hover:text-white transition-all ease-out duration-300">
                <PiSmileyThin className="text-4xl" />
              </div>
              <div className="service-content">
                <h4 className="text-xl font-semibold mb-5">
                  Studies on Customer happiness and Loyalty
                </h4>
                <p className="text-[#6d6d6d] text-base">
                  Evaluate and assess customer happiness and loyalty to gain a
                  deeper understanding of what motivates customer interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="call-action"
        className={`py-24 bg-gradient-to-tl from-[#155bd5] to-[#1c3ab6] relative`}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[url('../public/overlay.png')] z-0 bg-cover"></div>
        <div className="max-w-[1200px] m-auto relative z-[2] text-center">
          <div className="px-5">
            <div className="lg:w-1/2 m-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                We love to make perfect <br />
                solutions for your business
              </h2>
              <p className="text-white mb-10">
                To provide comprehensive and useful insights, our methodology
                blends established research techniques with state-of-the-art
                tools like artificial intelligence and predictive analytics. Our
                market research services are meant to support you at every stage
                of your company's development, regardless of how big or little
                you are.
              </p>
              <button
                type="button"
                className="px-6 py-2 bg-transparent text-white border-white border font-medium rounded hover:border hover:bg-white hover:border-white hover:text-[#155bd5]"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-[1200px] m-auto">
          <div className="flex flex-col lg:flex-row gap-4 px-5 lg:px-0">
            <div className="lg:w-1/3">
              <div className="row">
                <div className="flex border border-[#e0e0e0] bg-white mb-7 p-5 rounded-lg hover:shadow-lg transition-all ease-out duration-300 gap-4">
                  <div className="w-[50px] h-[50px] flex-shrink-0 rounded-full bg-[#155bd5] flex justify-center items-center text-2xl text-white">
                    <PiPhoneThin />
                  </div>
                  <div className="contact-content">
                    <h4 className="text-xl text-[#155bd5] font-semibold">
                      Contact
                    </h4>
                    {/* <p>0984537278623</p> */}
                    <p className="text-base word-wrap">support@tracedataresearch.com</p>
                  </div>
                </div>
                <div className="flex border border-[#e0e0e0] bg-white mb-7 p-5 rounded-lg hover:shadow-lg transition-all ease-out duration-300 gap-4">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#155bd5] flex justify-center items-center text-2xl text-white">
                    <PiMapPinLight />
                  </div>
                  <div className="contact-content">
                    <h4 className="text-xl text-[#155bd5] font-semibold">
                      Address
                    </h4>
                    <p>Shakti Khand 2,Ghaziabad-201014</p>
                    <p>Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="flex border border-[#e0e0e0] bg-white mb-7 p-5 rounded-lg hover:shadow-lg transition-all ease-out duration-300 gap-4">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#155bd5] flex justify-center items-center text-2xl text-white">
                    <PiClockAfternoon />
                  </div>
                  <div className="contact-content">
                    <h4 className="text-xl text-[#155bd5] font-semibold">
                      Schedule
                    </h4>
                    <p>Mon-Fri</p>
                    <p>Office time: 10 AM - 6 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="py-14 px-10 border border-[#e0e0e0] rounded-xl hover:shadow-lg transition-all ease-out duration-300">
                <div className="mb-5">
                  <div className="col-xl-10 col-lg-8 mx-auto">
                    <div className="section-title text-center">
                      <span className="text-xl text-[#155bd5] font-medium">
                        Get in Touch
                      </span>
                      <h2 className="text-4xl font-medium">
                        Ready to Get Started
                      </h2>
                      <p></p>
                    </div>
                  </div>
                </div>
                <form action="#" className="contact-form">
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      className="py-3 px-6 border border-[#e0e0e0] rounded-3xl flex-1"
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="py-3 px-6 border border-[#e0e0e0] rounded-3xl flex-1"
                      required
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      className="py-3 px-6 border border-[#e0e0e0] rounded-3xl flex-1"
                      required
                    />

                    <input
                      type="text"
                      name="subject"
                      id="email"
                      placeholder="Subject"
                      className="py-3 px-6 border border-[#e0e0e0] rounded-3xl flex-1"
                      required
                    />
                  </div>

                  <textarea
                    name="message"
                    id="message"
                    placeholder="Type Message"
                    className="py-3 px-6 border border-[#e0e0e0] rounded-xl flex-1 w-full h-36 mb-10"
                  ></textarea>

                  <div className="button text-center rounded-buttons">
                    <button
                      type="submit"
                      className="bg-[#155bd5] text-white py-3 px-6 rounded-3xl hover:shadow-xl transition-all ease-out duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home