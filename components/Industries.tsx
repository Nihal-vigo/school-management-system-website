import dynamic from 'next/dynamic';
import React from 'react';
import { BiSolidBank } from "react-icons/bi";
import { FaShoppingCart } from 'react-icons/fa';
import { FaDumbbell, FaHeartCirclePlus, FaTruck } from 'react-icons/fa6';
import { GiDramaMasks } from 'react-icons/gi';
import { IoIosPeople, IoLogoGameControllerB } from 'react-icons/io';
import { IoFastFoodSharp, IoSchool } from 'react-icons/io5';
import { MdSportsVolleyball, MdTravelExplore } from 'react-icons/md';
import SwipeCardsIndustries from './SwipeCardsIndustries';

const Popup = dynamic(() => import('../components/Popup'), {
    loading: () => <p>Loading...</p>,
})

const industriesOne = [
    { title: "Banking", icon: <BiSolidBank size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Banking" },
    { title: "Healthcare", icon: <FaHeartCirclePlus size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Healthcare" },
    { title: "Lifestyle", icon: <FaDumbbell size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Lifestyle" },
];

const industriesTwo = [
    { title: "Sports", icon: <MdSportsVolleyball size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Sports" },
    { title: "Food & Restaurants", icon: <IoFastFoodSharp size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Food & Restaurants" },
    { title: "Travel", icon: <MdTravelExplore size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Travel" },
];

const industriesThree = [
    { title: "Social", icon: <IoIosPeople size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Social" },
    { title: "Education", icon: <IoSchool size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Education" },
    { title: "eCommerce", icon: <FaShoppingCart size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "eCommerce" },
];

const industriesFour = [
    { title: "Entertainment", icon: <GiDramaMasks size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Entertainment" },
    { title: "Game", icon: <IoLogoGameControllerB size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Game" },
    { title: "Transportation", icon: <FaTruck size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Transportation" },
];

const Industries = () => {
    return (
        <section className="max-width w-full bg-blue-950 lg:bg-[url('/images/home/industries/industries-banner-one.webp')] bg-no-repeat bg-cover">
            <div className='xl:flex py-5 2xl:w-5/6 w-11/12 mx-auto'>

                <div className='text-white space-y-8 xl:pt-24 pt-0 xl:text-left text-center'>
                    <div className="relative w-full">
                        <p className="xl:block hidden text-transparent bg-clip-text text-stroke-DarkWhite text-8xl font-inter -top-[100%] md:absolute 2xl:left-[52%]  xl:left-[44%] md:transform md:-translate-x-2/4">Industries</p>
                        <p className='font-inter lg:text-4xl text-3xl md:whitespace-nowrap font-bold text-white capitalize '>
                            Industries We Work With
                        </p>
                    </div>
                    <p className='lg:text-md text-base xl:pr-20 pr-0 font-nunito'>Get a free consultation to discuss how we will transform your idea into an amazing digital product.</p>

                    <div className=" xl:block flex justify-center xl:w-full sm:w-5/6 w-3/4">
                        <Popup name="Contact Us" clipShapeBgColor={"secondary"} bgColorOne={'bg-gray-200'} iconColor={'text-ternary'} bgColor='bg-secondary' />
                    </div>
                </div>
                <div className='xl:flex lg:grid hidden lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 xl:py-0 py-5 lg:text-md text-base xl:text-wrap text-nowrap'>

                    <div className=' flex flex-col gap-4 xl:pt-52'>
                        {industriesOne.map((elem, index) => {
                            const { icon, industryName } = elem;
                            return (
                                <div key={index} className='flex flex-col justify-center items-center gap-3 py-10  text-md font-bold 2xl:px-24 px-10  rounded-xl bg-gray-200  font-nunito '>
                                    {icon}
                                    <p>{industryName}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className='flex flex-col gap-4 xl:pt-36'>

                        {industriesTwo.map((elem, index) => {
                            const { icon, industryName } = elem;
                            return (
                                <div key={index} className=' flex flex-col justify-center items-center gap-3 py-10  text-md font-bold 2xl:px-24 px-10  rounded-xl bg-gray-200  font-nunito '>
                                    {icon}
                                    <p>{industryName}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className='flex flex-col gap-4 xl:pt-20'>
                        {industriesThree.map((elem, index) => {
                            const { icon, industryName } = elem;
                            return (
                                <div key={index} className='flex flex-col justify-center items-center gap-3 py-10 text-md font-bold 2xl:px-24 px-10 rounded-xl bg-gray-200  font-nunito '>
                                    {icon}
                                    <p>{industryName}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className=' flex flex-col gap-4 xl:pt-2'>
                        {industriesFour.map((elem, index) => {
                            const { icon, industryName } = elem;
                            return (
                                <div key={index} className='flex flex-col justify-center items-center gap-3 py-10 text-md font-bold 2xl:px-24 px-8  rounded-xl bg-gray-200  font-nunito '>
                                    {icon}
                                    <p>{industryName}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className='lg:hidden block py-10'>
                    <SwipeCardsIndustries />
                </div>
            </div>
        </section>
    )
}

export default Industries