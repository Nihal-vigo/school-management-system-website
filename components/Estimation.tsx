import React from 'react'
import Image from 'next/image';

const Estimation = ({ title, desc, Estimation }) => {
    return (

        <div className='mx-auto py-10 w-11/12 max-w-7xl font-nunito'>
            <div className="space-y-4 pb-5">
                <h2 className="text-primary text-center  lg:text-3xl text-2xl font-semibold font-inter">{title}</h2>
                <div className='flex justify-center'>
                    <Image src={'/images/section-heading.webp'} alt={''} width={200} height={60} className='' />
                </div>
                <p className=" text-base text-ternary text-center">{desc}</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-2 ">
                {Estimation.map((elem, index) => {
                    const { title, decs } = elem;
                    return (
                        <div key={index} className='group'>
                            <div className="flex justify-center items-start leading-9 tracking-wide  border-2 border-transparent rounded-xl my-5 md:h-72 group-hover:bg-white/90 group-hover:border-primary group-hover:shadow-xl transition-all duration-500 ease-in">
                                <div className="md:p-5 p-2 md:px-4  rounded-md space-y-4 relative ">
                                    <div className='flex justify-left items-center w-full py-1 px-4 bg-primary rounded-full text-white absolute top-[-18px] left-2/4 -translate-x-2/4 font-bold '>
                                        {index + 1} &nbsp; | &nbsp; {title}
                                    </div>
                                    <p className="text-base text-ternary pt-5">{decs}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div></div>
    )
}

export default Estimation