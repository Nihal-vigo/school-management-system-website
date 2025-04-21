import React from 'react';
import { BiSupport } from 'react-icons/bi';
import ButtonOne from './ButtonOne';
import Image from 'next/image';

const ServicesSection = ({ ServiceList, title, desc, type, bgImage, ServiceTitle, iconMapping, types }) => {
    const hasTwoColumns = ServiceList.length % 3 === 2 || ServiceList.length % 5 === 2;
    const sectionStyle = bgImage ? { 
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    } : {};
   {/* type=1 is for service section call to action */}
//    types=image-wrapper means to change the color of image on hover to orange 
    return (
        <div className='mx-auto py-10 2xl:w-10/12 w-11/12 max-w-7xl font-nunito'>
            <div className="space-y-4 pb-5">
                <h2 className="text-primary text-center lg:text-4xl text-3xl font-semibold font-inter">{title}</h2>
                <p className="lg:text-md text-base text-ternary text-center">{desc}</p>
            </div>
            <div className={`grid ${type === 1 ? 'lg:grid-cols-2' : 'xl:grid-cols-3 md:grid-cols-2'} grid-cols-1 gap-6 pt-2`}>
                {ServiceList.map((elem, index) => {
                    const { title, icon, decs, img, width, height } = elem;
                    return (
                        <div key={index} className={`${types === "color-change" ? "color-change" : types === "image-wrapper" ? "image-wrapper" : ""}`}>
                            <div className={`flex justify-center items-start leading-9 tracking-wide group ${type === 1 ? '' : 'transition duration-200 ease-in-out lg:h-80 border-2 hover:shadow-md border-transparent hover:border-gray-300'}`}>
                                <div className="md:p-5 p-2 md:px-4 text-center rounded-md">
                                    <div className='flex justify-start items-start group-hover:text-secondary'>
                                        {icon && iconMapping && iconMapping[icon]}
                                        {img &&
                                            <Image src={img} alt={title} title={title} width={width} height={height} />
                                        }
                                    </div>
                                    <div className='w-full space-y-2'>
                                        <h3 className="text-md text-ternary font-bold text-left">{title}</h3>
                                        <p className="text-base text-ternary text-left pr-2">{decs}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

             
                {type === 1 ? (
                    hasTwoColumns && (
                        <div className={`relative flex justify-center rounded-lg shadow hover:shadow-lg hover:shadow-[#99C3FF]/70 hover:border-b-4 hover:border-b-black xl:h-[260px] lg:h-56 h-72`} style={sectionStyle}>
                            <div className='bg-black/70 w-full rounded-lg flex justify-center items-center'>
                                <div className='space-x-3 py-2 gap-4 text-white text-center w-full space-y-5'>
                                    <p className='text-2xl capitalize font-bold tracking-wide'>{ServiceTitle}</p>
                                    <ButtonOne url="tel:+918209514612" name="Request A Demo" type="secondary" justifyItem={"center"} />
                                </div>
                                <div className="absolute top-0 bottom-0 left-0 h-16 w-1 my-auto bg-white"></div>
                                <div className="absolute top-0 bottom-0 right-0 h-16 w-1 my-auto bg-white"></div>
                            </div>
                        </div>
                    )
                ) : (
                    hasTwoColumns && (
                        <div className='flex justify-center items-center w-full'>
                            <div className={`relative flex bg-primary bg-auto bg-no-repeat rounded-lg shadow hover:shadow-lg hover:shadow-[#99C3FF]/70 hover:border-b-4 hover:border-b-blue-500 xl:h-[260px] lg:h-56 h-72 w-full`}>
                                <div className='w-full rounded-lg flex justify-center items-center'>
                                    <div className='space-x-3 py-2 gap-4 text-white/90 text-center w-full space-y-5'>
                                        <BiSupport size={55} className='text-white/90 animate-bounce flex justify-center w-full' />
                                        <ButtonOne url="https://api.whatsapp.com/send?phone=918209514612" name="Get a Quote" type="secondary" justifyItem={"center"} />
                                    </div>
                                    <div className="absolute top-0 bottom-0 left-0 h-16 w-1 my-auto bg-white"></div>
                                    <div className="absolute top-0 bottom-0 right-0 h-16 w-1 my-auto bg-white"></div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default ServicesSection;
