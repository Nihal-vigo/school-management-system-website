
import React, { useRef } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Popup from "./Popup";

const TechnologyHire = ({ title, desc, Technology, btnName}) => {
  const slider: any = useRef(null);
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const settings = {
    initialSlide: Math.floor(Technology.length / 2),
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section>
      <div className=" w-full  lg:py-5 py-0 font-nunito space-y-5">
        <div className="bg-white py-5  rounded-md space-y-4 w-full text-center">
          <div className='w-full space-y-2 lg:pt-5 pt-2'>
            <h2 className="lg:text-3xl text-2xl text-primary font-semibold ">{title}</h2>
            {desc &&
              <p className="md:text-md text-base text-ternary lg:w-3/5 w-11/12 mx-auto">{desc}</p>}
          </div>
        </div>

        <div className="w-full  flex">
          <div className="xl:block w-[15%] hidden "></div>
          <div className="xl:w-[85%] w-full gap-10 ">
            <Slider ref={slider}  {...settings} className="flex justify-start items-start  ">
              {Technology.map((elem: any,index) => {
                const { title, decs, img, width, height } = elem;
                return (
                  <div key={index} className="md:px-3 px-0 w-full ">
                    <div className="bg-[#F2F5F9] py-5 px-4 rounded-lg shadow shadow-[#282278]/20 space-y-4 w-full h-72">
                      <Image src={img} alt={title} title={title} width={width} height={height} loader={uploadcareLoader}
                        unoptimized={true} className=""/>
                      <div className='w-full space-y-2'>
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <p className="md:text-md text-base text-ternary text-left line-clamp-4">{decs}</p>
                      </div>

                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className=" w-11/12 mx-auto">
          <div className="flex space-x-2 md:pb-0 py-2">
            <div className="xl:w-1/2 w-full 2xl:pl-52 xl:pl-44 mx-auto">
            <Popup
              url={"tel:918209514612"}
              name={btnName}
              clipShapeBgColor={"secondary"} bgColor={'bg-secondary'} iconColor={'text-white'}
            />
            </div>
            <div className="flex gap-3 w-1/2  justify-end mx-auto md:pt-0 pt-16">
              <button id="prev-two" aria-label="prev-two" title="previous" onClick={previous} className="px-1 py-1 text-ternary border rounded-full hover:text-white transition-all duration-200 bg-[#F0F2FA] hover:bg-primary">
                <BiChevronLeft className='text-[1.9rem]' />
              </button>
              <button id="next-two" aria-label="next-two" title="next" onClick={next} className="px-1 py-1 text-ternary border rounded-full hover:text-white transition-all duration-200 bg-[#F0F2FA] hover:bg-primary">
                <BiChevronRight className='text-[1.9rem]' />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default TechnologyHire