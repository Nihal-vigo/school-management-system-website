import Link from "next/link";
import { useState } from "react";

export default function FaqSection({ faqDataOne, faqDataTwo }) {
  const [currentCountfaqDataOne, setCurrentCountfaqDataOne] = useState("");
  const [currentCountfaqDataTwo, setCurrentCountfaqDataTwo] = useState("");
  const dataOne = faqDataOne;
  const dataTwo = faqDataTwo;

  if (!dataOne || !dataTwo) {
    return <div>Loading...</div>;
  }
  return (
    <section className="bg-[url('/images/faq-bg.jpg')] bg-cover">
      <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl lg:px-0 md:px-6 px-0 py-10">
        <div className="">
          <div className="space-y-4 w-full">
            <h3 className="font-bold md:text-4xl text-3xl  text-white text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
           Frequently Asked Questions
            </h3>

            <div className="lg:flex block gap-20 font-nunito">
              <div className=" lg:w-1/2 w-full">
                {faqDataOne.map((elem, index) => {
                  const { title, desc } = elem;
                  return (
                    <div key={index} className="bg-white cursor-pointer w-full  m-3">
                      <div
                        className={currentCountfaqDataOne === index
                          ? "flex items-start justify-center w-full px-2 py-4 text-base font-medium text-left md:items-center md:px-6  md:text-lg bg-white "
                          : "flex items-start justify-center w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6  md:text-lg"}
                        onClick={() => setCurrentCountfaqDataOne(currentCountfaqDataOne === index ? false : index)}
                      >
                        <p className="w-full text-base font-semibold">{title}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className={currentCountfaqDataOne === index ? "icon icon-tabler icon-tabler-chevron-down rotate-180 transition-all duration-200" : "icon icon-tabler icon-tabler-chevron-down rotate-0 transition-all duration-200"} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                      <div className={currentCountfaqDataOne === index ? " px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200" : "pt-0 px-6 text-black text-sm md:text-base transition-height duration-200 min-h-0 h-0 overflow-hidden"}>
                        <p className="pb-5">{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="lg:w-1/2 w-full">
                {faqDataTwo.map((elem, index) => {
                  const { title, desc } = elem;
                  return (
                    <div key={index} className="bg-white cursor-pointer w-full m-3">
                      <div
                        className={currentCountfaqDataTwo === index
                          ? "flex items-start justify-center w-full px-2 py-4 text-base font-medium text-left md:items-center md:px-6  md:text-lg bg-white "
                          : "flex items-start justify-center w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6  md:text-lg"}
                        onClick={() => setCurrentCountfaqDataTwo(currentCountfaqDataTwo === index ? false : index)}
                      >
                        <p className="w-full text-base font-semibold">{title}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className={currentCountfaqDataTwo === index ? "icon icon-tabler icon-tabler-chevron-down rotate-180 transition-all duration-200" : "icon icon-tabler icon-tabler-chevron-down rotate-0 transition-all duration-200"} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                      <div  className={currentCountfaqDataTwo === index ? " px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200" : "pb-0 px-6 text-black text-sm md:text-base transition-height duration-200 min-h-0 h-0 overflow-hidden"}>
                      <p className="pb-5">{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>

  );
}