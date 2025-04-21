import React from 'react'
import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';

const GridSection = ({ values, title, para, type, GridSectionIcons, types }) => {
    return (

        <section >

            {title && (
                <div className="space-y-4 pb-20">
                    <h2 className="text-primary text-center lg:text-3xl text-2xl font-bold font-inter">
                        {title}
                    </h2>
                    {para && (
                        <p className="lg:text-md text-base text-ternary text-center">
                            {para}
                        </p>
                    )}
                </div>
            )}

            <div className={` grid ${type === 1 ? 'lg:grid-cols-3 ' : 'lg:grid-cols-3 md:grid-cols-2'}  grid-cols-1 gap-6 `}>
                {values.map((elem: any, index: any) => {
                    const { title, decs, icon, img } = elem;
                    return (
                        <div key={index} className={`${types === "color-change" ? "color-change" : types === "image-wrapper" ? "image-wrapper" : ""}`} >
                            <div className={`flex ${type === 1 ? 'justify-start' : 'justify-center'} group items-center leading-9 tracking-wide ${type === 1 ? '' : 'bg-white md:h-64 py-5'}`} >
                                <div className="lg:p-5  lg:px-4 text-center rounded-md space-y-4 ">
                                    <div className='flex justify-center items-center text-primary group-hover:text-secondary'>
                                        {img && <Image className="rounded-md" src={img} alt={title} title={title} width={60} height={60} loader={uploadcareLoader}
                                            unoptimized={true} />}
                                        {icon && GridSectionIcons[icon]}
                                    </div>
                                    <div className='w-full space-y-2 text-center'>
                                        <h3 className="text-md  text-ternary font-bold ">{title}</h3>
                                        <p className="text-base text-ternary ">{decs}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </div>

        </section>

    )
}

export default GridSection