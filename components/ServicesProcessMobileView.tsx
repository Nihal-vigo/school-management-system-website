import React from 'react'

const ServicesProcessMobileView = ({ServicesPoints}) => {

    return (
        <div className="w-11/12 mx-auto p-6 border-t border-[#7c7b7b] font-nunito text-center space-y-5 lg:hidden block">
            {ServicesPoints.map((point, index) => (
                <div key={index} className='space-y-10'  >
                    <div className='flex flex-col relative justify-center items-center'>
                        <div className=" w-8 h-8 bg-white text-ternary border border-black z-10 rounded-full  flex items-center justify-center ">
                            {index + 1}
                        </div>
                        <div className='circle'></div>
                    </div>
                    <div className=''>
                        <h2 className="text-xl font-semibold text-gray-800">{point.title}</h2>
                        <p className="text-gray-600 mt-2 pb-5">{point.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default ServicesProcessMobileView