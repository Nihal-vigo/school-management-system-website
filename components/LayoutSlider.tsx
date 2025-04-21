import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const LayoutSlider = ({SliderClients}) => {
  
    const slider = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const settingsthree = {
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        centerMode: true,
        // centerPadding: '50px',
        beforeChange: (current, next) => {
            setCurrentSlideIndex(next);
            slider.current.slickGoTo(next);
        },
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                    dots: false
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

    const next = () => {
        slider.current.slickNext();
    };

    const previous = () => {
        slider.current.slickPrev();
    };

    const goToSlide = (slideIndex) => {
        setCurrentSlideIndex(slideIndex);
        slider.current.slickGoTo(slideIndex);
    };
    return (
        <section className="">
            <div className="mx-auto w-full md:py-12 py-5 bg-black" id="layout">
                <h2 className="text-white text-center font-bold lg:text-3xl md:text-2xl text-xl">Our Dating App Development Screens</h2>
                <div className="space-y-4 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl mx-auto">
                    <div className="flex justify-center items-center">
                        <button id="prev" aria-label="prev" title="previous" onClick={previous} className="md:block hidden px-3 py-3 text-white border rounded-full  transition-all duration-200 bg-black ">
                            <FaArrowLeft size="22" />
                        </button>
                        <Slider ref={slider} {...settingsthree} className="flex justify-center items-center w-full">
                            {SliderClients.map((elem, index) => {
                                const { img1, imgalt, num } = elem;
                                return (
                                    <div key={num}>
                                        <div className="flex w-full justify-center items-center py-20">
                                            <div
                                                onClick={() => {
                                                    goToSlide(index);
                                                }}
                                                className={`cursor-pointer focus:outline-none flex justify-between items-center gap-10 ${index === currentSlideIndex ? ' py-5 px-5 z-50 transition ease-in-out delay-150 -translate-y-1  scale-125 duration-300 flex items-center justify-center ' : 'blur-sm'}`}
                                            >
                                                <Image
                                                    src={elem.img1}
                                                    alt={`Navigation Image for Slide ${index}`}
                                                    width={190}
                                                    height={300}
                                                    title={imgalt}
                                                />  
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>

                        <button id="next" aria-label="next" title="next" onClick={next} className=" md:block hidden px-3 py-3 border rounded-full text-white transition-all duration-200 bg-black ">
                            <FaArrowRight size="22" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LayoutSlider;
