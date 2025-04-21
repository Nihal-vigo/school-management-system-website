import React from 'react';
import Image from 'next/image';
import { TbBulb, TbDeviceAnalytics } from 'react-icons/tb';
import { PiMapPinFill } from "react-icons/pi";
import { SiCodefactor } from "react-icons/si";
import { RiCodeSSlashLine } from 'react-icons/ri';
import { VscServerProcess } from 'react-icons/vsc';

const Process = () => {
  return (
    <section className='w-full lg:space-y-10 space-y-4 bg-gray-100 py-10 font-nunito  '>
      <div className='text-center'>
        <div className="relative w-full lg:pt-5 pt-10">
          <p className="lg:block hidden text-transparent bg-clip-text text-stroke-white text-8xl capitalize font-inter  bottom-[5%] lg:absolute left-[50%] lg:transform lg:-translate-x-2/4">Process</p>
          <h2 className='lg:text-4xl text-3xl w-full font-bold text-primary font-inter capitalize'>Our Development Process</h2>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 grid-cols-1  2xl:w-5/6 w-11/12 max-w-7xl mx-auto 2xl:gap-[9rem] lg:gap-[5rem] gap-4 relative py-16 z-[2] '>

        <div className='lg:flex-row flex-col-reverse flex items-center w-full justify-center space-x-2 lg:bg-transparent group bg-white lg:space-y-0 space-y-4 lg:py-0 py-5 rounded-2xl lg:border-transparent border-gray-200 border'>
          <div className='lg:text-right text-center space-y-2'>

            <p className='text-7xl font-bold text-gray-500 lg:hidden block group-hover:text-primary'>1</p>
            <h3 className='xl:text-2xl text-xl font-bold'>Research</h3>
            <p className='lg:text-sm text-base  xl:tracking-wide xl:leading-6 lg:leading-4 leading-6  text-gray-600  '>This session contains deep research to understand  <br />your needs with the help of market research</p>
          </div>
          <p className='text-7xl font-bold text-gray-500 lg:block hidden group-hover:text-primary'>1</p>
          <div className='bg-white group-hover:bg-primary group-hover:text-white lg:flex hidden justify-center items-center w-28 h-28 flex-shrink-0 rounded-full shadow-xl  '>
            <TbBulb size={50} />
          </div>
        </div>

        <div className='absolute left-[62.5%] top-[25%] -z-[2] xl:block hidden '>
          <Image src='/images/about/process/process1.webp' alt='Testing' title='Testing' width={350} height={200} />
        </div>

        <div className='lg:order-none order-6 lg:flex items-center w-full justify-center space-x-2 lg:bg-transparent group bg-white lg:space-y-0 space-y-4 lg:py-0 py-5 rounded-2xl lg:border-transparent border-gray-200 border'>
          <div className='bg-white group-hover:bg-primary group-hover:text-white lg:flex hidden justify-center items-center w-28 h-28 flex-shrink-0 rounded-full shadow-xl lg:m-0 m-auto '>
            <PiMapPinFill  size={50} />
          </div>
          <p className='text-7xl font-bold text-gray-500 lg:text-left text-center group-hover:text-primary '>6</p>
          <div className='lg:text-left text-center space-y-2'>
            <h3 className='xl:text-2xl text-xl font-bold'>Delivery</h3>
            <p className='lg:text-sm text-base  xl:tracking-wide xl:leading-6 lg:leading-4 leading-6  text-gray-600  '>In the end, we deliver the product to the customer <br />with complete controls like administrator controls</p>
          </div>
        </div>

        <div className='absolute left-[64%] top-[59%] -z-[2] xl:block hidden '>
          <Image src='/images/about/process/process2.webp' alt='Delivery' title='Delivery' width={330} height={200} />
        </div>

        <div className=' lg:flex items-center w-full justify-center space-x-2 lg:bg-transparent group bg-white lg:space-y-0 space-y-4 lg:py-0 py-5 rounded-2xl lg:border-transparent border-gray-200 border'>
          <div className='bg-white group-hover:bg-primary group-hover:text-white lg:flex hidden justify-center items-center w-28 h-28 flex-shrink-0 rounded-full shadow-xl lg:m-0 m-auto '>
            <SiCodefactor  size={50} />
          </div>
          <p className='text-7xl font-bold text-gray-500 lg:text-left text-center group-hover:text-primary'>2</p>
          <div className='lg:text-left text-center space-y-2'>
            <h3 className='xl:text-2xl text-xl font-bold'>Design</h3>
            <p className='lg:text-sm text-base  xl:tracking-wide xl:leading-6 lg:leading-4 leading-6  text-gray-600  '>Crafting some mock designs according  <br />to your needs is part of this session</p>
          </div>
        </div>

        <div className='absolute left-[10%] top-[59%] -z-[2] xl:block hidden '>
          <Image src='/images/about/process/process4.webp' alt='Design'title='Design' width={330} height={200} />
        </div>

        <div className='lg:order-none order-5 lg:flex-row flex-col-reverse flex  items-center w-full justify-center space-x-2 lg:bg-transparent group bg-white lg:space-y-0 space-y-4 lg:py-0 py-5 rounded-2xl lg:border-transparent border-gray-200 border'>
          <div className='lg:text-right text-center space-y-2 '>

            <p className='text-7xl font-bold text-gray-500 lg:hidden block'>5</p>
            <h3 className='xl:text-2xl text-xl font-bold'>Testing</h3>
            <p className='lg:text-sm text-base  xl:tracking-wide xl:leading-6 lg:leading-4 leading-6  text-gray-600 '>It’s the test phase where we do a quality <br />test of   our developed website or <br /> app to ensure its quality</p>
          </div>
          <p className='text-7xl font-bold text-gray-500 lg:block hidden group-hover:text-primary'>5</p>
          <div className='bg-white group-hover:bg-primary group-hover:text-white lg:flex hidden justify-center items-center w-28 h-28 flex-shrink-0 rounded-full shadow-xl'>
            <VscServerProcess  size={50} />
          </div>
        </div>

        <div className='absolute left-[10%] top-[25%] -z-[2] xl:block hidden '>
          <Image src='/images/about/process/process5.webp' alt='Research' title='Research' width={350} height={200} />
        </div>

        <div className='lg:flex-row flex-col-reverse flex  items-center justify-center space-x-2  lg:bg-transparent group bg-white lg:space-y-0 space-y-4 lg:py-0 py-5 rounded-2xl lg:border-transparent border-gray-200 border'>
          <div className='lg:text-right text-center space-y-2 '>
            <h3 className='xl:text-2xl text-xl font-bold'>Feasibility</h3>
            <p className='xl:t-sm lg: lg:text-sm text-base xl:tracking-wide xl:leading-6 lg:leading-4 leading-6  text-gray-600 '>Choosing the final design for development <br />is the output of this session</p>
          </div>
          <p className='text-7xl font-bold text-gray-500 group-hover:text-primary'>3</p>
          <div className='bg-white group-hover:bg-primary group-hover:text-white lg:flex hidden justify-center items-center w-28 h-28 flex-shrink-0 rounded-full shadow-xl'>
            <TbDeviceAnalytics   size={50} />
          </div>
        </div>

        <div className='absolute 2xl:left-[35.5%] xl:left-[38%] 2xl:-bottom-8 xl:-bottom-[0rem] -z-[2]  xl:block hidden'>
          <img className='2xl:w-[378px] xl:w-[300px]' src='/images/about/process/process3.webp' alt='Feasibility' title='Feasibility' />
        </div>

        <div className='lg:flex items-center justify-center space-x-2 lg:bg-transparent group bg-white lg:space-y-0 space-y-4 lg:py-0 py-5 rounded-2xl lg:border-transparent border-gray-200 border'>
          <div className='bg-white group-hover:bg-primary group-hover:text-white lg:flex hidden justify-center items-center w-28 h-28 flex-shrink-0 rounded-full shadow-xl lg:m-0 m-auto '>
            <RiCodeSSlashLine size={50} />
          </div>
          <p className='text-7xl font-bold text-gray-500 lg:text-left text-center group-hover:text-primary'>4</p>
          <div className='lg:text-left text-center space-y-2'>
            <h3 className='xl:text-2xl text-xl font-bold'>Development</h3>
            <p className='lg:text-sm text-base  xl:tracking-wide xl:leading-6 lg:leading-4 leading-6  text-gray-600 '>Here, we start the development process <br /> with the help of the finalised mock design</p>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Process