import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import ButtonOne from './ButtonOne';
import Link from 'next/link';

const ServicesSlider = ({ mobile, website, quality, marketing, infrastructure, consulting }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };

    const servicesData = [
        { name: "Mobile", data: mobile, url: "/services/mobile-app-development" },
        { name: "Website", data: website, url: "/services/website-development" },
        { name: "Quality", data: quality, url: "/services/quality-assurance" },
        { name: "Marketing", data: marketing, url: "/services/digital-marketing" },
        { name: "Infrastructure", data: infrastructure, url: undefined },
        { name: "Consulting", data: consulting, url: undefined },
    ];

    return (
        <Slider {...settings} className="flex justify-center items-center overflow-hidden gap-6">
            {servicesData.map((service, idx) =>
                service.data?.map((slide, index) => (
                    <div key={`${service.name}-${index}`} className="px-1 bg-white flex justify-center items-center rounded-lg" data-aos="fade-right" data-aos-duration="1000">
                        <div className="space-y-4 w-full rounded-xl text-ternary/80">
                            <h3 className="lg:text-3xl text-2xl font-bold text-primary">
                                {slide.title}
                                <hr className="w-1/12 h-[3px] bg-black" />
                            </h3>
                            <p className="text-base font-nunito group-hover:text-white text-justify whitespace-normal">
                                {slide.desc}
                            </p>
                            <ul className="text-base text-[#1C4484] grid sm:grid-cols-2 grid-cols-1 gap-4">
                                {slide?.item?.map((item, idx) => (
                                    <li key={idx} className="flex gap-2 items-center whitespace-nowrap text-base font-nunito text-ternary/80">
                                        {item.url ? (
                                            <Link href={item.url} passHref={true} className="flex items-center gap-2">
                                                <span>
                                                    <BsFillArrowRightCircleFill size={17} className="text-ternary" />
                                                </span>
                                                <p className="border-b-2">{item.name}</p>
                                            </Link>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <span>
                                                    <BsFillArrowRightCircleFill size={17} className="text-ternary" />
                                                </span>
                                                <p className="border-b-2">{item.name}</p>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <ButtonOne url={service.url} name={"More Services"} type={undefined} justifyItem={undefined} />
                        </div>
                    </div>
                ))
            )}
        </Slider>
    );
};

export default ServicesSlider;
