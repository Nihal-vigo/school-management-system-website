import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import dynamic from "next/dynamic";
import Button from "./Button";

const Popup = dynamic(() => import('./Popup'), {
  loading: () => <p>Loading...</p>,
})


const testimonialOne = [
  {

    desc: "Their team is very cooperative and helped us in migrating our business to the cloud. Their Knowledge made things smooth and stress-free.",
    name: "James Parker",
    subname: "Chief Information Officer, Tech Solutions Inc.",
    img1: "/images/home/testimonial/stars.svg",
    img2: "/images/home/testimonial/5.png"

  },
  {

    desc: "We found them when we were looking for reliable IT support. Vigorous experts delivered beyond our expectations and delivered comprehensive and tailored solutions.",
    name: "David Roberts",
    subname: "Operations Manager, Manufacturing Co.",
    img1: "/images/home/testimonial/stars.svg",
    img2: "/images/home/testimonial/1.png"

  },
  {

    desc: "Thanks to Vigorous  experts who redesigned our website. Their innovative approach and attention to minute detail have given us a competitive edge.",
    name: "Samantha Lee",
    subname: "IT Manager, Creative Media Agency",
    img1: "/images/home/testimonial/stars.svg",
    img2: "/images/home/testimonial/3.png"

  },
  {
    desc: "Highly recommend! Due to their exceptional cybersecurity services. They strengthened our security posture that soothes us from regular goosebumps.",
    name: "Michael Thompson",
    subname: "Marketing Director, Retail Pro Ltd.",
    img1: "/images/home/testimonial/stars.svg",
    img2: "/images/home/testimonial/4.png"

  },
  {
    desc: " Their managed IT services are top-notch. They provide proactive support and maintenance that ensures our business continuous performance.",
    name: "Laura Johnson",
    subname: "Head of IT Security, Financial Trust Corp.",
    img1: "/images/home/testimonial/stars.svg",
    img2: "/images/home/testimonial/2.png"

  },

]

const testimonialTwo = [
  {
    desc: "Their customer support is outstanding. They are always available to resolve our IT issues quickly and effectively.",
    name: "Anna Davis",
    subname: "Marketing Coordinator, Tech Innovators",
    img1: "/images/home/testimonial/stars.svg",
    img2: "/images/home/testimonial/6.png"

  },
  {
    desc: "I choose their IT consulting services and this provides me very valuable information. Their strategic advice saved me from losing my investment on a less effective idea.",
    name: "Emily White",
    subname: "Co-Founder, Startup Innovators",
    img1: "/images/home/testimonial/stars.svg",
    img2: "/images/home/testimonial/8.png"

  },
  {
    desc: "I was chosen vigorously for our e-commerce platform development. Their team understood our needs and delivered a robust, user-friendly website.",
    name: "Robert Harris",
    subname: "CEO, Global Enterprises",
    img1: "/images/home/testimonial/stars.svg",
    img2: "/images/home/testimonial/7.png"

  },
  {
    desc: "Their digital marketing services have greatly increased our online visibility. It raises our brand awareness and also brings sales. Highly recommended!",
    name: "Susan Miller",
    subname: " E-commerce Manager, Fashion Retailers",
    img1: "/images/home/testimonial/stars.svg",
    img2: "/images/home/testimonial/9.png"

  },

]

const testimonialThree = [
  {
    desc: "User-friendly and effective",
    name: "Cory j",
    subname: "Co-Founder",
    img1: "/images/home/testimonial/stars.svg",
    img2: "/images/home/testimonial/10.png"

  },
  {
    desc: "They serve us with their fintech app development services. They developed a fintech app for our business that revolutionized our business and attracted more customers.",
    name: "Natalie Evans",
    subname: "Financial Analyst, Banking Solutions",
    img1: "/images/home/testimonial/stars.svg",
    img2: "/images/home/testimonial/11.png"

  },
  {
    desc: "Working with vigorous entirely transformed my business. Their expertise has streamlined our business happenings and significantly reduced downtime.",
    name: "Natalie Evans",
    subname: "Financial Analyst, Banking Solutions",
    img1: "/images/home/testimonial/stars.svg",
    img2: "/images/home/testimonial/12.png"
  },
  {
    desc: "We have chosen Vigorous for mobile app development and it changed our business growth rate. It’s intuitive, reliable, and easy to manage.",
    name: "Mark Wilson",
    subname: "IT Support Lead, Health Services",
    img1: "/images/home/testimonial/stars.svg",
    img2: "/images/home/testimonial/5.png"
  },

]

const Testimonials = () => {
  return (
    <section className="w-full  bg-blue-50">
      <div className=" w-11/12 mx-auto xl:flex block gap-4 items-center justify-center 2xl:px-10 px-0 py-5 ">

        <div className="xl:w-2/5 w-full space-y-5" >

          <div className="flex gap-4">
            <Image src="/images/home/testimonial/reviews.png" alt="reviews" title="reviews" width={50} height={20} />
            <div>
              <div className='flex'>
                <IoIosStar className='text-yellow-500' size={32} />
                <IoIosStar className='text-yellow-500' size={32} />
                <IoIosStar className='text-yellow-500' size={32} />
                <IoIosStar className='text-yellow-500' size={32} />
                <IoStarHalf className='text-yellow-500' size={32} />
              </div>
              <p className="md:text-base text-sm text-ternary font-bold font-nunito">4.8 out of 5</p>
            </div>

          </div>

          <h2 className="lg:text-4xl text-3xl text-primary font-semibold text-left pr-5 font-inter">We're consistently ranked top on G2</h2>

          <p className="lg:text-md text-base text-ternary font-semibold leading-7 font-nunito">Our users rate us at the top of nearly 700 time trackers for a reason. With scores above <span className="text-primary">95% in Quality of Performance, Support, Ease of Use, and Setup</span>… our reputation speaks for itself</p>
          <div className=" grid sm:grid-cols-2 w-2/3 xl:gap-36 lg:gap-0 sm:gap-20 gap-5 xl:py-0 py-6 ">
            <div className="w-1/2 ">
              <Button
                url={"https://api.whatsapp.com/send?phone=918209514612"}
                btnName={"Start your free trial"}
                bgColor={'bg-secondary'} onClickFunc={undefined} clipShapeBgColor={"secondary"} />
            </div>
            <div className="w-1/2">
              <Popup
                url={undefined}
                name={"Book a demo"}
                bgColor={'bg-secondary'}
                clipShapeBgColor={'secondary'}
              />
            </div>
          </div>

        </div>


        <div className='xl:flex grid sm:grid-cols-2 grid-cols-1 gap-3 xl:py-0 py-5 xl:w-3/5 w-full justify-center xl:max-h-[700px] max-h-[500px] overflow-y-auto'>

          <div className=' flex flex-col gap-4 xl:h-[700px] overflow-y-auto slidenone'>

            {testimonialOne.slice(1, 6).map((elem, index) => {
              const { img1, img2, desc, name, subname } = elem;
              return (
                <div key={index} className='2xl:px-9 px-4 space-y-3.5 py-5 rounded-xl bg-white'>

                  <Image src={img1} alt="review" title="name" width={100} height={50} />
                  <p className="text-sm font-semibold font-nunito">"{desc}"</p>

                  <div className="flex items-center">
                    <Image src={img2} alt="review" title="name" width={50} height={50} className="bg-[#222569] rounded-full py-0.5 px-0.5" />
                    <div className="px-2">
                      <p className="text-sm font-semibold font-nunito">{name}</p>
                      <p className="text-sm text-gray-500 font-nunito">{subname}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          <div className=' flex flex-col gap-4 xl:h-[700px] xl:overflow-y-auto slidenone'>
            {testimonialTwo.map((elem, index) => {
              const { img1, img2, desc, name, subname } = elem;
              return (
                <div key={index} className='2xl:px-9 px-4  space-y-3.5 py-5 rounded-xl bg-white'>

                  <Image src={img1} alt="review" title="name" width={100} height={50} />
                  <p className="text-sm font-semibold font-nunito">"{desc}"</p>

                  <div className="flex items-center">
                    <Image src={img2} alt="review" title="name" width={50} height={50} className="bg-[#222569] rounded-full py-0.5 px-0.5" />
                    <div className="px-2">
                      <p className="text-sm font-semibold font-nunito">{name}</p>
                      <p className="text-sm text-gray-500 font-nunito">{subname}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          <div className=' xl:flex flex-col  gap-4 xl:h-[700px] xl:overflow-y-auto slidenone  sm:col-span-2 col-span-1 hidden'>
            {testimonialThree.map((elem, index) => {
              const { img1, img2, desc, name, subname } = elem;
              return (
                <div key={index} className=' 2xl:px-9 px-4 space-y-3.5 py-5 rounded-xl bg-white'>

                  <Image src={img1} alt="review" title="name" width={100} height={50} />
                  <p className="text-sm font-semibold font-nunito">"{desc}"</p>

                  <div className="flex items-center">
                    <Image src={img2} alt="review" title="name" width={50} height={50} className="bg-[#222569] rounded-full py-0.5 px-0.5" />
                    <div className="px-2">
                      <p className="text-sm font-semibold font-nunito">{name}</p>
                      <p className="text-sm text-gray-500 font-nunito">{subname}</p>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </div>


    </section>
  );
};
export default Testimonials;