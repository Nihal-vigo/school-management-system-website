import React, { use, useState } from 'react';
import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';

const WhyChooseSection = ({ WhyChoose, title, para, type, benefits }) => {
    const [currentCount, setCurrentCount] = useState(0);
    return (
        <section>
            <div className="pb-5 xl:py-5 lg:py-14 py-20 px-2">
                <div className="font-nunito text-ternary items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl lg:flex justify-between lg:space-x-24 space-x-0 lg:space-y-0 space-y-10">
                    <div className="lg:w-[40%] w-full space-y-4 text-left">
                        <h2 className="lg:text-3xl text-2xl text-left font-bold text-primary xl:leading-[2.2rem]">
                            {title}
                        </h2>
                        <p className="md:text-md text-base lg:text-left text-justify">
                            {para}
                        </p>
                    </div>
                    {type === 1 ?
                        (
                            <div className="md:space-y-2 space-y-4 xl:w-3/4 lg:w-2/3 w-full">
                                <div className="w-full py-4 space-y-4 overflow-y-auto  h-[400px] ">
                                    {benefits.map((elem, index) => {
                                        const { title, decs } = elem;
                                        const isOpen = currentCount === index;

                                        return (
                                            <div
                                                key={index}
                                                className="bg-white cursor-pointer w-full border-b-2 border-black/10"
                                                onClick={() => setCurrentCount(isOpen ? -1 : index)} // Toggle open/close
                                            >
                                                <div
                                                    className={
                                                        isOpen
                                                            ? "flex items-start justify-between w-full px-2 py-4 text-base font-medium text-left md:items-center md:px-6 border-b-2 border-black/10 md:text-md bg-white text-primary"
                                                            : "flex items-start justify-between w-full px-2 py-4 text-base font-medium text-left md:items-center md:px-6 text-ternary md:text-md"
                                                    }
                                                >
                                                    <div className="flex items-center">

                                                        <p className="w-full md:text-md text-base font-semibold leading-8">{title}</p>
                                                    </div>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className={`icon icon-tabler icon-tabler-chevron-${isOpen ? "up" : "down"} transition-all duration-200`}
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="#2c3e50"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </div>
                                                <div
                                                    className={
                                                        isOpen
                                                            ? "py-6 md:px-6 text-ternary space-y-3 md:text-md text-base transition-height duration-200 "
                                                            : "pt-0 px-6 text-ternary space-y-3 md:text-md text-base transition-height duration-200 min-h-0 h-0 overflow-hidden"
                                                    }
                                                >
                                                    <p className="md:text-md text-base text-ternary">{decs}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        ) :
                        (
                            <div className="lg:w-[60%] lg:h-[480px] w-full space-y-10 mx-auto overflow-y-auto slidenone ">
                                {WhyChoose &&
                                    WhyChoose.map((elem,index) => {
                                        const { title, img, decs } = elem;
                                        return (
                                            <div key={index} className="space-y-3 image-wrapper">
                                                <div className='flex items-center gap-3 '>
                                                    <Image src={img} alt={title} title={title} width={40} height={60} loader={uploadcareLoader} unoptimized={true} />
                                                    <h3 className="text-md text-left font-bold">
                                                        {title}
                                                    </h3>
                                                </div>
                                                <p className="text-base lg:text-left line-clamp-3">{decs}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        )}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseSection;
