import React from 'react'

const data = [
    {
        title: "Graphic Design Services",
        description: "Creative Graphic Design ",
        features: ["Unique", "Scalable", "Adaptable"],
        price: "$195",
        link: "https://colorwhistle.com/services/graphic-design-services/",
    },
    {
        title: "Graphic Design Services",
        description: "Creative Graphic Design ",
        features: ["Unique", "Scalable", "Adaptable"],
        price: "$195",
        link: "https://colorwhistle.com/services/graphic-design-services/",
    },
    {
        title: "Graphic Design Services",
        description: "Creative Graphic Design ",
        features: ["Unique", "Scalable", "Adaptable"],
        price: "$195",
        link: "https://colorwhistle.com/services/graphic-design-services/",
    },
    {
        title: "Graphic Design Services",
        description: "Creative Graphic Design ",
        features: ["Unique", "Scalable", "Adaptable"],
        price: "$195",
        link: "https://colorwhistle.com/services/graphic-design-services/",
    },
    {
        title: "Graphic Design Services",
        description: "Creative Graphic Design ",
        features: ["Unique", "Scalable", "Adaptable"],
        price: "$195",
        link: "https://colorwhistle.com/services/graphic-design-services/",
    },
    {
        title: "Graphic Design Services",
        description: "Creative Graphic Design ",
        features: ["Unique", "Scalable", "Adaptable"],
        price: "$195",
        link: "https://colorwhistle.com/services/graphic-design-services/",
    },
];

const OtherExpertise = () => {
    return (
        <>
            <h2 className="font-inter lg:text-4xl text-3xl font-bold text-primary capitalize text-center">Our Services</h2>
            <div className="md:flex items-center justify-between max-w-7xl 2xl:w-9/12 xl:w-5/6 w-full mx-auto font-nunito py-5 ">
                <div className="w-[20%] bg-gradient-to-tr from-[#082E5C] to-[#F55B14] p-4 xl:block hidden rounded-md">
                    <div className="flex flex-col justify-center items-center bg-white space-y-3 h-[320px] p-2 rounded-md ">
                        <h3 className="text-black font-bold text-3xl">Related Services We Offer</h3>
                        <p className="text-black text-base mt-2">
                            Slide this section to view the services we offer that can help you take a decision.
                        </p>
                    </div>
                </div>
                <div className="xl:w-[75%] w-[95%] px-4 relative">
                    <div className="absolute top-0 right-0 h-full w-2 bg-gradient-to-b from-[#F55B14] to-[#092f5c] z-10 rounded-xl"></div>
                    <div
                        className={`flex gap-6 py-5 overflow-x-auto scrollbar-auto`}
                        style={{ maxWidth: "100%", whiteSpace: "nowrap" }}
                    >
                        {data.map((service, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-lg text-black w-[450px] space-y-5 p-3 shadow-custom-shadow transform hover:-translate-x-7 hover:rotate-6 duration-200 hover:mr-[90px] ${index !== 0 ? 'ml-[-90px]' : ''} h-[350px] rounded-2xl`}
                            >
                                <h5 className="font-bold text-2xl bg-gradient-to-tr from-[#F55B14] to-[#092f5c] text-transparent bg-clip-text">
                                    {service.title}
                                </h5>
                                <p>{service.description}</p>
                                <ul className="list-disc pl-5">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="text-base">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <p className="price font-semibold">{service.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherExpertise