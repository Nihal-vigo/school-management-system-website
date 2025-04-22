import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LiaCheckCircleSolid } from 'react-icons/lia';
import Button from '../components/Button';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import BuildTask from '../components/BuildTask';



const Header = dynamic(() => import('../components/Header'), {
    loading: () => <p>Loading...</p>,
})

const Features = [
    { num: "01", title: "Meaningful Work", index: "1", desc: "We always work with strategies to provide real-time success to customer’s businesses. This urges us to accept and face complex changes." },
    { num: "02", title: "Growth Opportunities", index: "2", desc: "We primarily focus on our team members who must learn new things on a daily basis. This encourages both company and individual growth." },
    { num: "03", title: "Collaborative Culture", index: "3", desc: "We know the power of minds that is why we focus on fostering a collaborative culture that brings ideas for business growth." },
    { num: "04", title: "Exciting Challenges", index: "4", desc: "We start work with a claim that “we are limitless.” This urges us to face challenges bravely. In such an environment, you will surely increase your limits." },
    { num: "05", title: "Work-Life Balance", index: "5", desc: "We allow all members to have open communication to put their needs in front of each other. This helps everyone and also manages work-life balance." },
    { num: "06", title: "Competitive Compensation and Benefits", index: "6", desc: "We offer competitive compensation packages to our employees because they are the real personalities behind our success. " },
]

const Portal = [
    { title: "User Interface", icon: <IoArrowForwardCircleOutline className='hover:text-secondary' size={50} />, subTitle: "UI", para: "5 Opening", bgColor: "bg-gray-600" },
    { title: "User Interface", icon: <IoArrowForwardCircleOutline className='hover:text-secondary' size={50} />, subTitle: "UI", para: "5 Opening", bgColor: "bg-blue-500" },
    { title: "User Interface", icon: <IoArrowForwardCircleOutline className='hover:text-secondary' size={50} />, subTitle: "UI", para: "5 Opening", bgColor: "bg-blue-600" },
    { title: "User Interface", icon: <IoArrowForwardCircleOutline className='hover:text-secondary' size={50} />, subTitle: "UI", para: "5 Opening", bgColor: "bg-yellow-600" },
    { title: "User Interface", icon: <IoArrowForwardCircleOutline className='hover:text-secondary' size={50} />, subTitle: "UI", para: "5 Opening", bgColor: "bg-green-600" },
    { title: "User Interface", icon: <IoArrowForwardCircleOutline className='hover:text-secondary' size={50} />, subTitle: "UI", para: "5 Opening", bgColor: "bg-violet-600" },

]

const values = [
    { valueName: "Integrity" },
    { valueName: "Innovation" },
    { valueName: "Excellence" },
    { valueName: "Collaboration" },
    { valueName: "Customer-centricity" },
    { valueName: "Social Responsibility" }
]

export default function career({ initialData }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="language" content="en" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                <title> Current Job Openings & Career opportunities -  Vigorous IT   </title>
                <meta name="description" content=" Work with the next-generation IT company Vigorous IT in Jaipur. Find the best job opportunities to advance your career." />
                <link rel="canonical" href="https://www.vigorousit.com/career" />

                <meta property="og:url" content="https://www.vigorousit.com/career" />
                <meta property="og:title" content=" Current Job Openings & Career opportunities -  Vigorous IT " />
                <meta property="og:site_name" content="Vigorous IT" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content=" Work with the next-generation IT company Vigorous IT in Jaipur. Find the best job opportunities to advance your career." />
                <meta property="og:image" content="https://www.vigorousit.com/logo/vigorousit_logo.webp" />

                <meta name="twitter:card" content="summary" />
                <meta property="twitter:domain" content="vigorousit.com" />
                <meta name="twitter:site" content="“@vigorousit" />
                <meta property="twitter:url" content="https://www.vigorousit.com/career" />
                <meta property="twitter:title" content=" Current Job Openings & Career opportunities -  Vigorous IT " />
                <meta property="twitter:description" content=" Work with the next-generation IT company Vigorous IT in Jaipur. Find the best job opportunities to advance your career." />
                <meta name="twitter:image" content="https://www.vigorousit.com/logo/vigorousit_logo.webp" />
            </Head>
            <section className="overflow-hidden">
                <div className="max-width w-full bg-[url('/images/career/banner.webp')] bg-cover">
                    <Header />
                    {/* 1 */}
                    <div className="md:space-y-4 space-y-0 md:py-72 py-40 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl text-white text-center">
                        <h1 className="lg:text-5xl text-4xl  py-2 font-bold font-inter">Job Openings</h1>
                        <p className='font-nunito lg:text-md text-base lg:px-52 px-5 '>Explore our career opportunities to join the Vigorous team and make your future journey in the IT sector more secure and exciting.</p>
                    </div>
                </div>

                <section className='mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:py-12 max-w-7xl space-y-5 py-20'>
                    <div className='lg:flex'>
                        <div className='lg:w-1/2 w-11/12 space-y-3 lg:px-5 px-0'>
                            <div className="relative w-full lg:pt-5">
                                <p className="lg:block hidden text-transparent bg-clip-text text-stroke-white text-8xl capitalize -bottom-[8%] md:absolute 2xl:left-[24%] xl:left-[30%] lg:left-[35%] md:transform md:-translate-x-2/4">Values</p>
                                <h2 className='lg:text-4xl text-3xl 2xl:w-11/12 w-full font-bold font-inter capitalize '>Our core <span className='text-primary'>values!</span></h2>
                            </div>
                            <p className='lg:text-md text-base font-nunito'>Due to following our core values, we are dominating the market and crushing the competition. These are values that shape us and build our company. We make our decisions and guides by following them and our interactions with customers are also based on these values. Let’s check our values:</p>
                            <ul className='grid grid-cols-2 py-4 gap-2 px-1 font-nunito lg:text-md text-base'>
                                {values.map((values, index) =>
                                (<li key={index} className='flex items-center gap-2'>
                                    <span>
                                        <LiaCheckCircleSolid size={16} />
                                    </span>
                                    {values.valueName}
                                </li>
                                ))}
                            </ul>
                            <div className='py-5 '>
                                <Button
                                    url={""}
                                    btnName={"Apply Now"} onClickFunc={undefined} clipShapeBgColor={"secondary"} bgColorOne='bg-black' bgColor='bg-secondary' />
                            </div>
                        </div>
                        <div className='lg:w-1/2 flex justify-center items-center'>
                            <Image src='/images/career/our-core-values.webp' alt={'career'} title="career" width={960} height={685} />
                        </div>
                    </div>
                </section>

                <section className='w-full py-10 bg-gray-50'>
                    <div className='w-11/12 mx-auto max-w-7xl'>
                        <div className='space-y-3 text-center xl:w-4/5 w-full mx-auto'>

                            <div className="relative w-full">
                                <p className="lg:block hidden text-transparent bg-clip-text text-stroke-white text-8xl font-inter -bottom-[15%] md:absolute left-[50%] md:transform md:-translate-x-2/4">Join</p>
                                <div className='font-inter lg:text-4xl text-3xl md:whitespace-nowrap font-bold  capitalize '>
                                    Why <span className='text-primary'>join</span> us?
                                </div>
                            </div>
                            <p className='lg:text-md text-base font-nunito'>
                                We consider our team a family because we know our success is not due to any single individual but due to the collection of all individuals. We created an environment where we grow with each other while never disrespecting anybody. Below are some further reasons about why you should join us.
                            </p>
                        </div>

                        <div className='lg:w-11/12 mx-auto pt-4'>
                            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-8 gap-4 lg:pt-10 pt-5'>
                                {Features.map((elem) => {
                                    const { num, index, title, desc } = elem;
                                    return (
                                        <div key={num}>
                                            <div className='font-nunito'>
                                                <div className='flex justify-start gap-4'>
                                                    <div className=' w-10 h-10 flex items-center justify-center rounded-full border-2 text-center text-md font-semibold text-white bg-primary flex-shrink-0'>
                                                        {index}
                                                    </div>
                                                    <div>
                                                        <h3 className=' text-lg font-bold '>{title}</h3>
                                                        <p className='text-gray-800 w-full leading-7 md:h-36 text-base tracking-wide'>{desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section className='mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:py-12 max-w-7xl space-y-5 py-10'>
                    <div className='space-y-3 text-center lg:w-4/5  mx-auto '>
                        <div className="relative w-full">
                            <p className="lg:block hidden text-transparent bg-clip-text text-stroke-white text-7xl font-inter bottom-[15%] md:absolute left-[50%] md:transform md:-translate-x-2/4">Portal</p>
                            <div className='font-inter lg:text-4xl text-3xl md:whitespace-nowrap font-bold  capitalize '>
                                We help<span className='text-primary'> businesses </span>grow
                            </div>

                        </div>
                        {/* <h2 className='lg:text-4xl text-3xl font-semibold font-inter'>We help<span className='text-blue-500'> businesses </span>grow</h2> */}
                        <p className='lg:text-md text-base font-nunito'>We offer a dynamic, innovative, and challenging work environment that fosters creativity, collaboration, and growth. Here's a closer look at the career opportunities we offer:</p>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 font-nunito'>
                        {Portal.map((elem, index) => {
                            const { subTitle, title, para, icon, bgColor } = elem;
                            return (
                                <div key={index} className='border-gray-200 rounded-xl border flex px-5 items-center py-4 space-x-4'>
                                    <div className={`w-20 h-16 ${bgColor} rounded-lg flex justify-center items-center text-white text-base`}>{subTitle}</div>
                                    <div className='w-full flex justify-between items-center'>
                                        <div className='tracking-wide '>
                                            <h3 className='lg:text-md text-base font-bold'>{title}</h3>
                                            <p className='text-sm'>{para}</p>
                                        </div>
                                        {icon}
                                    </div>
                                </div>);
                        })}
                    </div>
                </section>


                <BuildTask />

            </section>
        </>
    )
}

