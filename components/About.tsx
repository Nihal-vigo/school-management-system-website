import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { uploadcareLoader } from '@uploadcare/nextjs-loader'

const About = ({ title, paraOne, paraTwo, paraThree, btnName, img, imgTitle }) => {
    return (
        <section>
            <div className="mx-auto py-16  xl:w-4/5 w-11/12 max-w-7xl font-nunito lg:flex items-center gap-5 ">
                <div className="lg:w-1/2 lg:block hidden">
                    <Image src={img}
                        alt="about-us"
                        title={imgTitle}
                        width={600}
                        height={675}
                        loader={uploadcareLoader}
                        unoptimized={true}
                        priority={true}
                        loading="eager" />
                </div>
                <div className='lg:w-1/2 space-y-5 '>
                    <div className="lg:text-md text-base text-ternary">
                        <div className='space-y-7'>
                            <h2 className="font-semibold lg:text-4xl sm:text-3xl text-2xl text-primary font-inter text-center lg:text-left">
                                {title}
                            </h2>

                            <div className="lg:hidden flex justify-center">
                                <Image src={img}
                                    alt="about-us"
                                    title={imgTitle}
                                    width={600}
                                    height={675}
                                    loader={uploadcareLoader}
                                    unoptimized={true}
                                    priority={true}
                                    loading="eager" />
                            </div>
                            <p>
                                {paraOne &&
                                    paraOne}
                            </p>
                            <p>
                                {paraTwo && paraTwo}
                            </p>
                            <p>
                                {paraThree && paraThree}
                            </p>
                        </div>
                    </div>
                    <Button btnName={btnName} url={"tel:+918209514612"} onClickFunc={undefined} clipShapeBgColor={"secondary"} bgColor={'bg-secondary'} bgColorOne={undefined} iconColor={undefined} />
                </div>

            </div>
        </section>
    )
}

export default About