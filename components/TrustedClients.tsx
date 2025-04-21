import React, { useRef } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrustedClients = ({ clients }) => {
  const settings = {
    initialSlide: Math.floor(clients.length / 2),
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 2,
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
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true
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
    <section className="bg-[#e6e6ff]/50">
      <div className="2xl:w-9/12 xl:w-5/6 w-11/12 py-10 mx-auto space-y-4 max-w-7xl">
        <div className="space-y-2 text-center">
          <h2 className="lg:text-3xl text-2xl  text-center font-bold text-[#222569] xl:leading-[3rem]">Trusted by Awesome Clients</h2>
          <p className=" text-[17.5px] text-ternary lg:text-center text-justify">Not to brag, but a lot of hot startups and market leaders reach out & touch base to commission our work.</p>
        </div>
        <div className="relative flex items-center justify-center py-4">
          <Slider {...settings} className="flex justify-center items-center w-3/4 overflow-hidden h-32 ">
            {clients.map((elem,index) => {
              const { img } = elem;
              return (
                <div key={index} className='flex justify-center items-center w-full'>
                  <Image src={img} alt="Our Clients" title="Our Clients" width={232} height={110} loader={uploadcareLoader}
                    unoptimized={true} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default TrustedClients;