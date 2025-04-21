import React from 'react';
import Image from 'next/image';

const PartnersLogoMobileView = ({ title, para, partnersOne, partnersTwo }) => {
    return (
        <div className="mx-auto w-11/12 py-0 lg:py-12 text-center space-y-8">
            <div className='flex gap-6 flex-col justify-center items-center'>
                <div className="relative w-full">
                    {title &&
                        <h2 className='font-inter lg:text-4xl text-3xl md:whitespace-nowrap font-bold text-secondary capitalize bottom-[27%] md:absolute left-[50%] md:transform md:-translate-x-2/4'>
                            {title}
                        </h2>}
                </div>
                {para &&
                    <p className='lg:text-md text-base text-center text-white xl:w-4/5 w-full font-nunito'>{para}</p>
                }
            </div>
            <div className='xl:mx-auto 2xl:w-11/12 w-full sm:space-y-10 space-y-5'>
                <div className="w-full flex justify-between gap-6">
                    <div className='slider-wrapper-left'>
                        {partnersOne.map((elem, index) => {
                            const { title, img, icon } = elem;
                            return (
                                <div key={index} className="flex flex-col justify-center items-center lg:w-1/5 sm:w-1/4 w-[40%] flex-shrink-0">
                                    {icon && icon}
                                    {img && <Image src={img} alt={title} title={title} width={500} height={100} />}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="w-full flex justify-between gap-6">
                    <div className='slider-wrapper-right'>
                        {partnersTwo.map((elem, index) => {
                            const { title, img, icon } = elem;
                            return (
                                <div key={index} className="flex flex-col justify-center items-center lg:w-1/5 sm:w-1/4 w-[40%] flex-shrink-0">
                                    {icon && icon}
                                    {img && <Image src={img} alt={title} title={title} width={500} height={100} />}
                                </div>
                            );
                        })}
                    </div>
                </div>

                
            </div>
        </div>



    );
};

export default PartnersLogoMobileView;