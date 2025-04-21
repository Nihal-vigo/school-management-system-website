import React from 'react'
import Image from 'next/image';

const PartnersLogo = ({ type, title, titleOne, para, partnersOne, partnersTwo }) => {
  const imageWidth = type === 1 ? 150 : 100;
  return (
    <div className="mx-auto w-11/12  text-center space-y-8">
      <div className='flex gap-5 flex-col justify-center items-center'>
        <div className="relative w-full">
          {title &&
            <h2 className="xl:block hidden text-transparent bg-clip-text text-stroke-DarkWhite text-8xl font-inter">{title}</h2>}
          {titleOne &&
            <div className='font-inter lg:text-4xl text-3xl md:whitespace-nowrap font-bold text-secondary capitalize bottom-[27%] md:absolute left-[50%] md:transform md:-translate-x-2/4'>
              {titleOne}
            </div>}
        </div>
        {para &&
          <p className='lg:text-md text-base text-center text-white xl:w-4/5 w-11/12 font-nunito'>{para}</p>
        }
      </div>

      <div className="flex justify-center items-center">
        <div className='xl:mx-auto 2xl:w-11/12 w-full space-y-10'>
          <div className={`w-full grid ${type === 1 ? 'xl:grid-cols-7' : type === 2 ? 'xl:grid-cols-4' : 'xl:grid-cols-5'} text-white lg:grid-cols-4 grid-cols-2 ${type === 1 ? 'xl:gap-8 gap-12' : 'xl:gap-14 gap-16'} place-items-center`}>
            {partnersOne.map((elem,index) => {
              const { title, img, teamName, designation,icon } = elem;
              return (
                <div key={index}>
                  <div className={`flex justify-center ${type === 1 ? 'gap-8' : 'gap-0'} items-center`}>
                    {icon && icon}
                    {img &&
                    <Image src={img} alt={title} title={title} width={imageWidth} height={200} className={` ${type === 1 ? 'grayscale hover:grayscale-0 ' : ''}`} />}
                  </div>
                  {teamName && <p className="font-bold mt-2 font-nunito text-base">{teamName}</p>}
                  {designation && <p className="font-nunito text-base">{designation}</p>}
                </div>
              );
            })}
          </div>

          <div className="xl:w-5/6 w-full mx-auto text-white">
            <div className={`w-full grid ${type === 1 ? 'xl:grid-cols-5' : type === 2 ? 'xl:grid-cols-3 ' : 'xl:grid-cols-3'} lg:grid-cols-4 grid-cols-2 ${type === 1 ? 'xl:gap-8 gap-12' : type === 2 ? 'xl:gap-10 gap-14' : 'xl:gap-14 gap-16'} place-items-center`}>
              {partnersTwo.map((elem,index) => {
                const { title, img, teamName, designation,icon } = elem;
                return (
                  <div key={index}>
                    <div className={`flex justify-center ${type === 1 ? 'gap-8' : 'gap-0'} items-center`}>
                      {icon && icon}
                     {img && <Image src={img} alt={title} title={title} width={imageWidth} height={200} className={` ${type === 1 ? 'grayscale hover:grayscale-0 ' : ''}`} />}
                    </div>
                    {teamName && <h3 className="font-bold mt-2 text-center font-nunito text-base">{teamName}</h3>}
                    {designation && <p className=" font-nunito text-base">{designation}</p>}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PartnersLogo;
