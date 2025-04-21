import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import ButtonOne from './ButtonOne';
import dynamic from 'next/dynamic';

const Popup = dynamic(() => import('./Popup'), {
    loading: () => <p>Loading...</p>,
});

const caseStudies = [
    {

        title: "Tafri Travels",
        para: "Tafri Travels is a premier travel agency we have developed, specializing in customized tours for schools, colleges, corporate groups, and pilgrims. Bookings can be simplified through this platform and improve the travel experience for everyone.        ",
        projectImg: "/images/home/case-study/tafri-travels.webp",
        img: "/images/home/case-study/tafri-travels-logo.svg",
        height: 150,
        width: 100,
        textColor: "text-white",
        bgColor: "bg-green-900"
    },
    {

        title: "Shagun Makeovers",
        para: "A leading beauty service we have developed, Shagun Makeover offers bridal makeup, hair styling, and personalized beauty treatments in Datia, Madhya Pradesh. Through the platform, beauty is made more accessible and enjoyable for everyone.",
        projectImg: "/images/home/case-study/shagun-makeovers.webp",
        img: "/images/home/case-study/shagun-logo.png",
        height: 150,
        width: 160,
        textColor: "text-white",
        bgColor: "bg-black"
    },
    {

        title: "WINNEGO",
        para: "Here is WINNEGO, the new betting exchange platform we developed to improve local betting experiences. We make betting easy and enjoyable for everyone with a user-friendly interface and seamless functionality.",
        projectImg: "/images/home/case-study/winnego.webp",
        img: "/images/home/case-study/winnego-logo.webp",
        height: 150,
        width: 200,
        textColor: "text-white",
        bgColor: "bg-purple-700"
    },
    {

        title: "WedRobe ",
        para: "WedRobe is an easy-to-use platform designed to simplify bedding shopping. Experience seamless navigation, discover the perfect sleep solution, and explore a wide range of products.",
        projectImg: "/images/home/case-study/wedrobe.webp",
        img: "/images/home/case-study/wedrobe-logo.webp",
        height: 150,
        width: 200,
        textColor: "text-white",
        bgColor: "bg-red-700"
    },
    {

        title: "RJ Website",
        para: "Introducing the RJ Website, a personalized platform we created for a talented individual. Through podcasts and videos, this site showcases engaging content and enables fans and followers to connect.",
        projectImg: "/images/home/case-study/rj-portfolio.webp",
        img: "/images/home/case-study/portfolio-logo.png",
        height: 150,
        width: 100,
        textColor: "text-white",
        bgColor: "bg-indigo-950"
    }
];

const CaseStudy = () => {
    return (
        <>
            <div className="relative w-full lg:pt-24  pt-4">
                <h2 className="lg:block hidden text-transparent lg:whitespace-nowrap bg-clip-text text-stroke-white text-8xl font-inter capitalize xl:bottom-[8%] bottom-[2%] md:absolute left-[50%] md:transform md:-translate-x-2/4">Case Studies</h2>
                <p className='font-inter lg:text-4xl text-3xl font-bold px-5 text-center'>
                    <span>Success Stories :</span><span className="text-primary"> Insights From Our Client Case Studies</span>
                </p>
            </div>
            <p className='lg:text-md text-base font-nunito 2xl:w-3/5 w-11/12 mx-auto xl:pt-5 xl:py-0 py-5 text-center'>We are dedicated to our profession and urge to deliver exceptional websites to our customers. Below-mentioned case studies will share insights about the quality of our services. This way, you can get a glimpse of how we value our customers and offer personalized services</p>
            <div className='space-y-10 relative mx-auto 2xl:w-9/12 xl:w-4/5 w-11/12  lg:h-[700px] sm:h-[438px] h-[548px] overflow-y-auto slidenone pb-4'>
                {caseStudies.map((elem, index) => {
                    const { title, projectImg, img, para, bgColor, width, height, textColor } = elem;
                    return (
                        <div key={index} className='sticky z-50 top-[0.5rem] lg:py-12 py-2' >
                            <div className={`lg:py-20 py-10 flex md:flex-row flex-col-reverse items-center rounded-3xl px-4 lg:h-[500px] min-h-[450px] h-[340px] ${bgColor} `}>
                                <div className='lg:w-1/2 w-11/12 md:mx-auto space-y-5 md:space-y-10 text-left '>
                                    <Image src={img} alt={title} title={title} width={width} height={height} loader={uploadcareLoader} unoptimized={true} priority={true} loading="eager" />
                                    <p className={`md:text-xl text-lg  ${textColor} md:leading-relaxed font-nunito `}>{para}</p>
                                    <Popup
                                        buttonType={"popup"}
                                        url={"tel:8209514612"}
                                        name={"Build Your Own Project"}
                                    />
                                </div>
                                <div className='lg:w-2/5 w-11/12 lg:flex justify-center items-center  hidden'>
                                    <Image src={projectImg} alt={title} title={title} width={500} height={134} loader={uploadcareLoader} unoptimized={true} priority={true} loading="eager" />
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className='sticky z-50 top-96 lg:pb-10 pb-0' >
                    <div className='w-full mx-auto space-y-5 md:space-y-10 text-center  py-40 lg:h-[600px] rounded-3xl md:px-4 px-8 bg-black'>
                        <p className={`text-white font-semibold lg:text-md text-base font-nunito`}>Case Study</p>
                        <p className={`lg:text-3xl md:text-2xl text-xl font-semibold text-white leading-relaxed font-nunito`}>Transforming Businesses Worldwide - 100+ Success Stories and Counting</p>
                        <ButtonOne url="/contact-us" name="Build Your Own Project" type="primary" justifyItem={"center"} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaseStudy;
