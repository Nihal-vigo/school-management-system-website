import Image from 'next/image';
import React, { useState } from 'react'

const Features = ({ tabs, title, desc, tabFeatures }) => {
  const [activeTab, setActiveTab] = useState("Transportation/Library /Hostel");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50 ">
      <h1 className="md:text-4xl  text-3xl font-bold text-center mb-2 ">
        {title}
      </h1>
      <p className="text-center text-gray-600 mb-6 font-nunito">
        {desc}
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 font-inter w-11/12 mx-auto md:p-6">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-4 py-2 rounded-xl shadow text-center w-56 md:h-44 h-36 transition-all duration-300 flex items-center justify-center
                 ${activeTab === tab ? "bg-primary text-white border-b-4 border-transparent" : "bg-white hover:bg-gray-100 border-b-4 border-primary"}`}
          >
            {tab}
          </div>

        ))}
      </div>

      {/* Feature Cards */}

      <div className="flex justify-center items-start relative p-0">
        {/* Left Side Image */}
        <div className="w-[35%] xl:block hidden relative z-10">
          <div className="bg-primary flex justify-start items-start py-28 rounded-r-2xl">
            <Image
              src="/images/exam-management-info.webp"
              className="w-[80%]"
              alt=""
              width={600}
              height={900}
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full xl:w-[65%] flex justify-end items-end py-20 relative p-6">
          {/* Centered Tab Title */}
          <p className="absolute left-1/2 top-16 transform -translate-x-1/2 w-72 text-center bg-primary text-white px-4 py-2 rounded-xl z-50">
            {activeTab}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1250px] font-nunito border bg-white p-8 rounded-2xl">
            {tabFeatures[activeTab]?.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white p-3 border border-transparent hover:border-gray-300 transition duration-300 text-center h-56 flex flex-col justify-center items-center"
              >
                <div className="text-4xl mb-3 group-hover:hidden transition-opacity duration-300">
                  {feature.icon}
                </div>

                <h2 className="text-xl font-semibold mb-2 transform transition-all duration-300 -translate-y-3 group-hover:-translate-y-0">
                  {feature.title}
                </h2>

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