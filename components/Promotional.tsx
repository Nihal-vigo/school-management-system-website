import React from 'react'
import Image from 'next/image'
import { IoIosChatbubbles } from 'react-icons/io'
import { GiFullFolder } from 'react-icons/gi'
import { AiOutlineAim } from "react-icons/ai";

const Promotional = () => {
    return (
        <section className="w-full bg-slate-50/50 relative  ">
            <div className=' 2xl:w-2/3 w-11/12  mx-auto py-12 gap-5 font-nunito max-w-7xl'>
                <div className='2xl:w-3/4 xl:w-3/4 w-full space-y-8 '>
                    <div className='flex items-center gap-4'>
                        <hr className='w-[50px] bg-black h-[2.5px]' />
                        <h3 className='lg:text-2xl text-xl text-secondary font-semibold'>Delivering innovative and transformative IT solution</h3>
                    </div>
                    <h2 className='lg:text-4xl text-3xl font-semibold tracking-wide leading-10 font-inter '>We Crafted Some of the <span className='text-primary'>Best Web & Mobile Solutions for the World</span></h2>
                    <p className='lg:text-md text-base '>Whether you are a startup and looking for an IT company to make a robust digital presence for your business or a set organization that wants to leverage their business revenue, we provide unique, innovative and result-oriented IT solutions for everyone.</p>
                    <div className='xl:block md:grid grid-cols-2 items-center gap-2 xl:space-y-14 md:space-y-0 space-y-5 xl:w-2/3 w-11/12 lg:py-5 xl:pl-16 xl:mx-0 mx-auto'>
                        <div className='flex items-center gap-2 xl:shadow-2xl border-b'>
                            <div className='md:block hidden'><AiOutlineAim size={60} className='text-primary' /></div>
                            <div>
                                <h3 className='md:text-2xl text-xl'>What Is Our Aim?</h3>
                                <p className='md:text-base text-sm '> Fulfill customer’s needs, Grow their business & Increase their returns </p>

                            </div>

                        </div>

                        <div className='flex items-center gap-2 '>
                            <div className='md:block hidden'><GiFullFolder size={60} className='text-primary' /></div>
                            <div>
                                <h3 className='md:text-2xl text-xl'>Why Are We Different?</h3>
                                <p className='md:text-base text-sm '>Seamless customer support, Use of advanced technologies & Excellent services</p>

                            </div>
                        </div>

                        <div className='flex items-center gap-2 xl:shadow-2xl border-b '>
                            <div className='md:block hidden'><IoIosChatbubbles size={60} className='text-primary' /></div>
                            <div>
                                <h3 className='md:text-2xl text-xl '>What Our Clients Say About Us?</h3>
                                <p className='md:text-base text-sm  '>Preferred by brands & Customers, Unmatchable service providers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='2xl:w-4/5 xl:w-3/5 absolute bottom-0 transform 2xl:translate-x-[48.50%] translate-x-[79%] translate-y-0 xl:block hidden' >
                    <Image src="/images/home/promo/person-with-screen-two.webp" alt="What Our Clients Say About Us?" title="What Our Clients Say About Us?" width={900} height={700} />
                </div>
            </div>

        </section >
    )
}

export default Promotional