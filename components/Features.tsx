import Image from 'next/image';
import React, { useState } from 'react'

const Features = ({ tabs, title, desc, tabFeatures }) => {
  const [activeTab, setActiveTab] = useState("Transportation/Library /Hostel");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50 ">
      <h1 className="lg:text-4xl sm:text-3xl text-2xl  font-bold text-center mb-2 ">
        {title}
      </h1>
      <p className="text-center text-gray-600 mb-6 font-nunito">
        {desc}
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center sm:gap-4 gap-2.5 font-inter sm:w-11/12 w-full mx-auto lg:p-6">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(tab.title)}
            className={`cursor-pointer px-4 py-2 rounded-xl shadow text-center  sm:w-56 w-[46%] md:h-44 h-36 transition-all duration-300 flex flex-col items-center justify-center hover:bg-primary hover:text-white hover:border-b-4 hover:border-tranparent
                 ${activeTab === tab.title ? "bg-primary text-white border-b-4 border-transparent" : "bg-white hover:bg-gray-100 border-b-4 border-primary"}`}
          >
            {/* <Image src={tab.img} alt={''} width={70} height={50} className='bg-black rounded-2xl p-2 '/> */}
           <p>{tab.icon}</p> 
            {tab.title}
          </div>

        ))}
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center relative p-0">
        <div className="md:w-[35%]  xl:block md:hidden relative z-10 md:pt-0 pt-10">
          <div className="bg-primary flex justify-start items-start 2xl:py-36 md:py-44 md:rounded-r-2xl ">
            <Image
              src={tabFeatures[activeTab]?.image}
              className="2xl:w-[80%] lg:w-[95%] w-full"
              alt=""
              width={600}
              height={900}
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-[95%] xl:w-[68%] flex justify-end items-end 2xl:py-20 py-10 relative xl:-ml-10 ml-0 z-50">
          <p className="absolute left-1/2 2xl:top-16 top-5 transform -translate-x-1/2 w-72 text-center bg-primary text-white px-4 py-2 rounded-xl z-50">
            {activeTab}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1250px] font-nunito border bg-white p-8 rounded-2xl">
            {tabFeatures[activeTab]?.features?.map((feature, index) => (
              <div
                key={index}
                className="group sm:mt-0 mt-5 relative overflow-hidden bg-white p-3 border border-transparent hover:border-secondary transition duration-300 text-center sm:h-56 flex flex-col justify-center items-center"
              >
                <div className="text-4xl mb-3 group-hover:hidden transition-opacity duration-300">
                  {feature.icon}
                </div>

                <h2 className="text-xl font-semibold mb-2 transform transition-all duration-300 -translate-y-3 group-hover:-translate-y-0">
                  {feature.title}
                </h2>

                <p className='w-1/6 h-[2px] mx-auto bg-transparent group-hover:bg-secondary'></p>

                <p className="text-gray-600 text-sm line-clamp-2 group-hover:line-clamp-none transform transition-all duration-300 translate-y-2 group-hover:translate-y-1">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Features