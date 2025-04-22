import React from 'react';
import { BsDot } from 'react-icons/bs';

const Plans = ({ title, desc, Plans }) => {
    return (
        <div className='mx-auto py-10 w-11/12 max-w-7xl font-nunito'>
            <div className="space-y-4 pb-5">
                <h2 className="text-primary text-center lg:text-4xl sm:text-3xl text-2xl  font-semibold font-inter">{title}</h2>
                <p className="lg:text-md text-base text-ternary text-center">{desc}</p>
            </div>
            <div className="pt-2 w-full mx-auto overflow-x-auto">
                <div className="flex sm:grid sm:grid-cols-2 gap-5 min-w-[600px] sm:min-w-0">
                    {Plans.map((elem, index) => {
                        const { title, decs, items, btnName } = elem;
                        return (
                            <div key={index} className="flex-shrink-0 w-[300px] sm:w-auto">
                                <div className="flex justify-center items-start leading-9 tracking-wide bg-[#f3f4f6] lg:h-[720px] md:h-[780px]  h-[850px] rounded-2xl">
                                    <div className='w-full'>
                                        <div className=''>
                                            <div className='space-y-1 p-6 bg-primary rounded-t-2xl xl:h-24 sm:h-28 h-32'>
                                                <h3 className="text-2xl text-white font-bold leading-6">{title}</h3>
                                                <p className="text-base text-white">{decs}</p>
                                            </div>
                                            {items && items.length > 0 && (
                                                <div className="space-y-3 p-4 lg:h-[530px] md:h-[596px] h-[650px] ">
                                                    {items.map((item, i) => (
                                                        <div key={i}>
                                                            <p className="font-semibold text-md">{item.subtitle}</p>
                                                            <ul className="text-base text-ternary list-disc list-inside text-left md:space-y-1 text-[15px]">
                                                                {Array.isArray(item.content) &&
                                                                    item.content.map((point, idx) => (
                                                                        <li key={idx} className='font-normal flex items-center last-of-type:border-none'>
                                                                            <span className="flex items-center gap-2">
                                                                                {point.icon}
                                                                                {point.name}
                                                                            </span>
                                                                        </li>
                                                                    ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className='mx-auto w-3/4 lg:mb-0 mb-5'>
                                            <button className='bg-primary hover:bg-primary/90 p-2 text-white font-bold rounded-2xl w-full'>{btnName}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default Plans;
