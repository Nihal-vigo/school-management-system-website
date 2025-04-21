import React from 'react'
import ServicesProcessMobileView from './ServicesProcessMobileView'
import { TbLoadBalancer } from 'react-icons/tb'
import { FaPencilRuler } from 'react-icons/fa'
import { MdOutlineDeveloperMode } from 'react-icons/md'
import { PiRocketLaunchBold } from 'react-icons/pi'
import { GiTimeTrap } from 'react-icons/gi'


const ServicesProcess = ({ title, para, processOne, processOneDesc, processTwo, processTwoDesc, processThree, processThreeDesc, processFour, processFourDesc, processFive, processFiveDesc, ServicesPoints }) => {
    return (

        <div className="bg-gray-100">

            <div className=" 2xl:w-5/6 w-[95%] max-w-7xl lg:mx-auto py-12 font-nunito">
                <div className="text-center lg:mb-44 space-y-4 px-5">
                    <h2 className="lg:text-4xl text-3xl font-semibold font-inter text-primary">{title}</h2>
                    <p>{para}</p>
                </div>


                <div className=' w-full space-y-14 relative lg:block hidden'>
                    <span className='border border-dashed absolute -top-[85px] left-0 border-black w-full'></span>

                    <div className="grid 2xl:gap-10 xl:gap-3 gap-16 grid-cols-3  xl:h-[170px] h-[190px]">
                        <div className="w-full">
                            <div className=" space-y-2 text-center relative">
                                <div className="flex-shrink-0 2xl:w-14  w-12 2xl:h-14 h-12 m-auto flex bg-primary text-white rounded-full items-center justify-center">
                                    <GiTimeTrap size={28} className='' />
                                    {/* <Image src={"/images/services/dating/process/design icon.svg"} alt={''} width={9} height={100}/> */}

                                    <div className=' flex-shrink-0 absolute -top-[100px] left-2/4 -translate-x-2/4 w-8 h-8 bg-white text-ternary font-bold border border-black z-10 rounded-full  flex items-center justify-center '>
                                        1
                                        <span className='w-[1px] h-[70px] absolute top-[100%] left-2/4 -translate-x-2/4 block bg-black'></span>
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold mb-2">{processOne}</h2>
                                <p className="text-gray-700 ">{processOneDesc}</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className=" space-y-2 text-center relative">
                                <div className="flex-shrink-0 2xl:w-14  w-12 2xl:h-14 h-12 m-auto flex bg-primary text-white rounded-full items-center justify-center">
                                    <MdOutlineDeveloperMode size={28} />
                                    <div className=' flex-shrink-0  absolute -top-[100px] left-2/4 -translate-x-2/4  w-8 h-8 bg-white text-ternary font-bold border border-black z-10 rounded-full  flex items-center justify-center'>
                                        3
                                        <span className='w-[1px] h-[70px] absolute top-[100%] left-2/4 -translate-x-2/4 block bg-black'></span>
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold mb-2">{processThree}</h2>
                                <p className="text-gray-700 ">{processThreeDesc}</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className=" space-y-2 text-center relative">
                                <div className="flex-shrink-0 2xl:w-14  w-12 2xl:h-14 h-12 m-auto flex bg-primary text-white rounded-full items-center justify-center">
                                    <PiRocketLaunchBold size={28} />
                                    <div className=' flex-shrink-0  absolute -top-[100px] left-2/4 -translate-x-2/4  w-8 h-8 bg-white text-ternary font-bold border border-black z-10 rounded-full  flex items-center justify-center'>
                                        5
                                        <span className='w-[1px] h-[70px] absolute top-[100%] left-2/4 -translate-x-2/4 block bg-black'></span>
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold mb-2 ">{processFive}</h2>
                                <p className="text-gray-700 ">{processFiveDesc}</p>
                            </div>
                        </div>

                    </div>

                    <div className='grid gap-5 grid-cols-2 lg:w-[66%] w-full mx-auto'>

                        <div className="w-full">
                            <div className="text-center space-y-2 relative">
                                <div className="flex-shrink-0 2xl:w-14 w-12 2xl:h-14 h-12 m-auto flex bg-primary text-white rounded-full items-center justify-center"> <FaPencilRuler size={22} />
                                    <div className="flex-shrink-0 absolute 2xl:-top-[328px] xl:-top-[326px] -top-[345px] left-2/4 -translate-x-2/4  w-8 h-8 bg-white text-ternary font-bold border border-black z-10 rounded-full  flex items-center justify-center">
                                        2
                                        <span className="w-[1px] xl:h-[292px] h-[313px] absolute top-[100%] left-2/4 -translate-x-2/4 block bg-black"></span>
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold ">{processTwo}</h2>
                                <p className="text-gray-700 ">{processTwoDesc}</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="text-center space-y-2 relative">
                                <div className="flex-shrink-0 2xl:w-14 w-12 2xl:h-14 h-12 m-auto flex bg-primary text-white rounded-full items-center justify-center">
                                    <TbLoadBalancer size={30} />
                                    <div className=" flex-shrink-0  absolute 2xl:-top-[328px] xl:-top-[326px] -top-[345px] left-2/4 -translate-x-2/4  w-8 h-8 bg-white text-ternary font-bold border border-black z-10 rounded-full flex items-center justify-center">
                                        4
                                        <span className="w-[1px] xl:h-[292px] h-[313px] absolute top-[100%] left-2/4 -translate-x-2/4 block bg-black"></span>
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold mb-2">{processFour}</h2>
                                <p className="text-gray-700">{processFourDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ServicesProcessMobileView ServicesPoints={ServicesPoints} />

        </div >
    )
}

export default ServicesProcess
