import React, { useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import ButtonOne from './ButtonOne';
import ServicesSlider from './ServicesSlider';
import Link from 'next/link';

interface Service {
  title: string;
  item: Array<{ name: string; url?: string }>;
  desc: string;
  url?: string
}

interface ServicesIndexProps {
  mobile: Service[];
  website: Service[];
  quality: Service[];
  marketing: Service[];
  infrastructure: Service[];
  consulting: Service[];
}

const ServicesIndex: React.FC<ServicesIndexProps> = ({
  mobile,
  website,
  quality,
  marketing,
  infrastructure,
  consulting
}) => {
  const [tech, setTech] = useState<number>(0);

  const renderServiceContent = (data: Service[]) => {
    return data.map((service, index) => {
      const { title, item, desc, url } = service;
      return (
        <div key={index} className="2xl:p-5 p-1 space-y-6 w-full rounded-xl text-black/80 bg-white " data-aos="fade-right" data-aos-duration="1000">
          <h3 className="lg:text-2xl text-xl font-bold text-secondary font-inter">
            {title}
            <hr className="w-1/12 h-[3px] bg-secondary" />
          </h3>
          <p className="lg:text-md text-base group-hover:text-white text-justify whitespace-normal font-nunito">
            {desc}
          </p>
          <ul className="lg:text-md text-base text-[#1C4484] grid sm:grid-cols-2 grid-cols-1 gap-4 font-nunito">
            {item.map((item, index) => (
              <li key={index} className="flex gap-2 items-center lg:text-md text-base text-black/80">
                {item.url ? (
                  <Link href={item.url} passHref={true} className='flex items-center gap-2'>
                    <span><BsFillArrowRightCircleFill size={17} className="text-black" /></span>
                    <p className='border-b-2'>{item.name}</p>
                  </Link>
                ) : (
                  <div className='flex items-center gap-2'>
                    <span><BsFillArrowRightCircleFill size={17} className="text-black" /></span>
                    <p className='border-b-2'>{item.name}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <ButtonOne name="More Services" url={url} type={undefined} justifyItem="end" />
        </div>
      );
    });
  };

  return (
    <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:py-8 max-w-7xl py-5">
      <div className="relative w-full text-center">
        <h2 className="xl:block hidden text-transparent bg-clip-text xl:whitespace-nowrap text-stroke-white text-8xl font-inter 2xl:-bottom-[5%] xl:bottom-[20%] lg:bottom-[55%] md:absolute left-[50%] md:transform md:-translate-x-2/4">Services</h2>
        <h3 className='font-inter lg:text-4xl text-3xl font-bold text-primary capitalize xl:text-nowrap'>
          Services We Offer - Best Mobile App & Web Designing Company
        </h3>
      </div>
      <p className=' text-center lg:text-md text-base font-nunito py-5'>We are providing edge-cutting services that enable our customers to dominate the market.</p>
      <div className="lg:flex justify-center items-start lg:space-y-0 space-y-4 lg:space-x-8 space-x-0 bg-white">
        <div className="bg-primary py-5 lg:w-[30%] w-full lg:space-y-2 space-y-0 lg:block hidden items-center xl:justify-center lg:justify-start justify-start lg:space-x-0 space-x-2 overflow-y-hidden">
          {['Mobile Development', 'Website Development', 'Quality Assurance', 'Digital Marketing', 'IT Infrastructure', 'IT Consulting'].map((category, index) => (
            <div
              key={index}
              onClick={() => setTech(tech === index ? -1 : index)}
              className={
                tech === index
                  ? "lg:flex block lg:justify-start justify-center items-center text-white px-4 text-center font-bold py-4 capitalize cursor-pointer lg:w-full md:w-96 space-x-3 lg:h-auto h-[120px]"
                  : "rounded-xl lg:flex block lg:justify-start justify-center items-center text-white/75 px-4 text-center font-bold py-4 capitalize cursor-pointer lg:w-full md:w-96 space-x-3 lg:h-auto h-[120px]"
              }
            >
              <p className="lg:text-md text-base font-nunito">{category}</p>
            </div>
          ))}
        </div>
        <div className="lg:w-[70%] w-full relative lg:block hidden">
          {tech >= 0 ? renderServiceContent([mobile, website, quality, marketing, infrastructure, consulting][tech]) : null}
        </div>
        <div className='lg:hidden block'>
          <ServicesSlider mobile={mobile} website={website} quality={quality} marketing={marketing} infrastructure={infrastructure} consulting={consulting} />
        </div>
      </div>
    </div>
  );
};

export default ServicesIndex;
