import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const features = [
    {
        id: 1,
        title: 'Fast Performance',
        description: 'Loads pages quickly and efficiently with optimized code and caching.Uses OAuth, secure tokens, and encryption to protect user data.Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data.Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data.',
        image: '/images/exam-management-info.webp ',
    },
    {
        id: 2,
        title: 'Secure Login',
        description: 'Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data.Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data.Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data.',
        image: '/images/exam-management-info.webp',
    },
    {
        id: 3,
        title: 'Time Saver',
        description: 'Automates routine tasks and workflows to save your valuable time.Automates routine tasks and workflows to save your valuable time.Automates routine tasks and workflows to save your valuable time.Automates routine tasks and workflows to save your valuable time.Automates routine tasks and workflows to save your valuable time.Automates routine tasks and workflows to save your valuable time.Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data.',
        image: '/images/exam-management-info.webp',
    },
    {
        id: 4,
        title: 'Secure Login',
        description: 'Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data.Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data.Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data.',
        image: '/images/exam-management-info.webp',
    },
    {
        id: 5,
        title: 'Time Saver',
        description: 'Automates routine tasks and workflows to save your valuable time.Automates routine tasks and workflows to save your valuable time.Automates routine tasks and workflows to save your valuable time.Automates routine tasks and workflows to save your valuable time.Automates routine tasks and workflows to save your valuable time.Automates routine tasks and workflows to save your valuable time.Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data.Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data. Uses OAuth, secure tokens, and encryption to protect user data.',
        image: '/images/exam-management-info.webp',
    },
];

const ScrollFeatures = () => {
    const [currentFeature, setCurrentFeature] = useState(features[0]);
    const [scrollProgress, setScrollProgress] = useState(0);
    const featureRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = featureRefs.current.findIndex((ref) => ref === entry.target);
                        if (index !== -1) {
                            setCurrentFeature(features[index]);
                            setScrollProgress(((index + 1) / features.length) * 100);
                        }
                    }
                });
            },
            { threshold: 0.6 }
        );

        featureRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            featureRefs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
    }, []);

    return (
        <div className='bg-primary relative my-10'>
            <div className="md:flex block lg:w-5/6 w-11/12 mx-auto md:min-h-[10dvh]">
                {/* Sidebar */}
                <div className="md:w-1/2 w-full lg:p-10 sticky top-0 h-screen flex flex-col justify-center ">
                    <h2 className="text-white md:text-3xl text-2xl font-bold mb-4">Features</h2>
                    <p className="text-gray-300 mb-8 text-sm">
                        Discover the power of our tools, tailored to help you optimize performance and productivity.
                    </p>
                    <div className="relative pl-6">
                        {/* Vertical progress bar */}
                        <div
                            className="absolute left-0 w-1 bg-secondary transition-all duration-300 ease-in-out"
                            style={{ height: `${scrollProgress}%`, top: 0 }}
                        />
                        <div className="absolute -left-10 -top-[80%] lg:block hidden circle-motion">
                            <Image src="/images/tri1.png" alt="" width={50} height={200} className="orbit " />
                        </div>

                        <div className="absolute -right-20 -top-[95%] lg:block hidden">
                            <Image src="/images/sq.png" alt="" width={20} height={200} className="orbit " />
                        </div>

                        <div className="absolute -right-40 -bottom-40 lg:block hidden half-circle-motion">
                            <Image src="/images/tri1.png" alt="" width={50} height={200} className="orbit " />
                        </div>

                        <div className="absolute left-10 -bottom-[60%] lg:block hidden ">
                            <Image src="/images/tri4.png" alt="" width={20} height={200} className="orbit" />
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white">
                                {currentFeature.id < 10 ? `0${currentFeature.id}` : currentFeature.id}.
                            </div>
                            <div className="text-xl font-semibold mt-2 text-white">{currentFeature.title}</div>
                            <p className="text-sm text-white mt-3 font-nunito">{currentFeature.description}</p>
                        </div>
                    </div>
                </div>



                {/* Features on right */}
                <div className="md:w-1/2 w-full">
                    {features.map((feature, index) => (
                        <section
                            key={feature.id}
                            ref={(el) => { featureRefs.current[index] = el }}
                            className="min-h-screen flex items-center justify-center md:p-8"
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="rounded-lg shadow-xl w-4/5 max-w-md"
                            />
                        </section>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ScrollFeatures;
