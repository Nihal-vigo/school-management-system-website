import React, { useState } from 'react'

const TestimonialsHire = ({ ReviewOne, ReviewTwo, ReviewThree }) => {

    const [review, setReview] = useState(0);

    return (
        <section className=" w-full bg-gray-50 space-y-20 py-16 font-nunito ">
            <div className="lg:flex justify-center items-center xl:w-3/4 w-11/12 mx-auto max-w-7xl h-80">
                <div className='lg:w-2/5 w-full mx-auto text-center pb-8'>
                    <h2 className='lg:text-4xl text-3xl font-semibold text-primary uppercase px-2 '>Our Valuable Clients</h2>
                </div>
                <div className='xl:w-3/5  mx-auto lg:w-11/12 w-full xl:border-l xl:border-slate-300 xl:px-8 lg:px-14 border-slate-100 space-y-4'>
                    <h2 className='font-bold text-2xl text-secondary'><span className='text-primary'>#</span>&nbsp; CLIENT SAYS</h2>
                    <p className='w-1/4 h-[2px] bg-secondary'></p>
                    <div className="w-full py-4 ">
                        {review === 0 ? (
                            <>
                                {ReviewOne.map((elem: any, index) => {
                                    const { description, reviewName } = elem;
                                    return (

                                        <div key={index} className="space-y-3">
                                            <h3 className="italic  ">
                                                {description}
                                            </h3>
                                            <p className="font-semibold ">{reviewName}</p>
                                        </div>

                                    );
                                })}
                            </>
                        ) : null}

                        {review === 1 ? (
                            <>
                                {ReviewTwo.map((elem: any, index) => {
                                    const { description, reviewName } = elem;
                                    return (
                                        <div key={index} className="space-y-3">
                                            <h3 className=" italic">
                                                {description}
                                            </h3>
                                            <p className="font-semibold ">{reviewName}</p>
                                        </div>
                                    );
                                })}
                            </>
                        ) : null}
                        {review === 2 ? (
                            <>
                                {ReviewThree.map((elem: any, index) => {
                                    const { description, reviewName } = elem;
                                    return (

                                        <div key={index} className="space-y-3">
                                            <h3 className=" italic">
                                                {description}
                                            </h3>
                                            <p className="font-semibold ">{reviewName}</p>
                                        </div>
                                    );
                                })}
                            </>
                        ) : null}
                    </div>
                    <div>
                        <div className="xl:w-3/4  w-full flex  xl:justify-start justify-center " >
                            <span
                                onClick={() => setReview(review === 0 ? 0 : 0)}
                                className={
                                    review === 0
                                        ? "border-b-2 border-primary  w-1/4 text-center cursor-pointer"
                                        : "w-1/4 text-center cursor-pointer"
                                }
                            >
                                <span >01</span>
                            </span>
                            <span
                                onClick={() => setReview(review === 1 ? 0 : 1)}
                                className={
                                    review === 1
                                        ? "border-b-2 border-primary  w-1/4 text-center cursor-pointer"
                                        : "w-1/4 text-center cursor-pointer"
                                }
                            >
                                <span >02</span>
                            </span>
                            <span
                                onClick={() => setReview(review === 2 ? 0 : 2)}
                                className={
                                    review === 2
                                        ? "border-b-2 border-primary   w-1/4 text-center cursor-pointer"
                                        : " w-1/4 text-center cursor-pointer"
                                }
                            >
                                <span >03</span>
                            </span>

                        </div>
                        <p className='xl:w-[56.39%] w-full h-px bg-primary'></p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TestimonialsHire

