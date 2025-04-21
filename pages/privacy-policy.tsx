import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Get in Touch with Vigorous IT Today</title>
        <link rel="canonical" href="https://www.vigorousit.com/privacy-policy" />
        <meta name="description" content="Contact Vigorous IT to discuss your project requirements. Our experienced developers can help you bring your app or web project to life. Get in touch with us today to get started."
        />
        <meta name="robots" content="noindex"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Get in Touch with Vigorous IT Today" />
        <meta property="og:description" content="Contact Vigorous IT to discuss your project requirements. Our experienced developers can help you bring your app or web project to life. Get in touch with us today to get started." />
        <meta property="og:url" content="https://www.vigorousit.com/privacy-policy" />
        <meta property="og:site_name" content="Vigorous IT" />
        <meta property="article:modified_time" content="2022-09-01T13:05:06+00:00" />
        <meta property="og:image" content="https://www.vigorousit.com/logo/vigorousit_logo.webp" />
       
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vigorousit.com" />
        <meta name="twitter:site" content="“@vigorousit" />
        <meta property="twitter:url" content="https://www.vigorousit.com/privacy-policy" />
        <meta name="twitter:title" content="Get in Touch with Vigorous IT Today" />
        <meta name="twitter:description" content="Contact Vigorous IT to discuss your project requirements. Our experienced developers can help you bring your app or web project to life. Get in touch with us today to get started." />
        <meta name="twitter:image" content="https://www.vigorousit.com/logo/vigorousit_logo.webp" />
      </Head>
      <div className="overflow-hidden">
        <div className="bg-primary">
          <Header />
          <div className="py-14 md:py-24">
            <div className=" flex flex-col-reverse w-11/12 max-w-7xl mx-auto 2xl:w-9/12 xl:w-5/6 lg:flex-row md:items-center lg:space-x-20 lg:space-y-0 ">
              <div className="w-full space-y-8 mx-auto text-center lg:py-40 py-20 text-white">
                <p className="lg:block hidden opacity-5  text-[10rem] whitespace-nowrap">Privacy Policy</p>
                <h1 className=' lg:text-5xl text-4xl font-bold  lg:absolute left-[50%] lg:transform lg:-translate-x-2/4 lg:-translate-y-[350%] '>Privacy Policy</h1>
                <p className="mx-auto md:text-md text-base font-nunito">
                  At Vigorous, we take immense pride in turning your visionary sports app concept into a tangible digital manifestation. Our Zealous team of creative minds, sports fanatics and ingenious developers collaborates seamlessly to revamp just a mere idea into prolific sports software.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className='font-nunito lg:text-md text-base text-center max-w-7xl mx-auto pt-10 w-11/12'>All the data we collect from our clients is only used by Vigorous and we don't allow any third party to use the data without any severe business change. Here, “our”, “us”, and “we” like citations refer to Vigorous while “you” and “your” citations will be for customers. We strictly follow our privacy policy and also ensure the primary security of our participants. We also allow them to access different parts of our website due to owing our policy policies.
        </p>

        <div className="md:w-11/12 w-full mx-auto lg:p-4 p-0 flex xl:flex-row flex-col-reverse  items-center font-nunito lg:py-10 py-16 text-gray-800 ">
          <div className='lg:w-1/2 md:w-full w-11/12 space-y-5 lg:mx-0 mx-auto lg:mt-0 mt-10'>
            <div className="lg:flex gap-6 w-full lg:space-y-0 space-y-5 ">
              <div className="bg-gray-100 p-4 rounded-md shadow-md border-black border hover:shadow-xl lg:w-1/2 w-full">
                <h2 className="text-xl font-semibold mt-2 text-secondary">Client Info Acquirement</h2>
                <p>We collect data from our customers that they share while using our website. They shared data in the form of resumes, images, queries and even emails. We also track the mail data that they send to our company. In short, all the information that you share will be under our observation. </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md shadow-md border-black border hover:shadow-xl lg:w-1/2 w-full">
                <h2 className="text-xl font-semibold mt-2 text-secondary">Other Zones Of Interaction</h2>
                <p>Approaching us through different other platforms like forums is also practically possible. In such a scenario, we encourage customers to use precautions to decrease data loss risk. It is because we are able to protect your data on such forums.</p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md border-black border hover:shadow-xl">
              <h2 className="text-xl font-semibold mt-2 text-secondary">Passive Insights</h2>
              <p>We track your personal information like your browsing behavior, IP address and browser type. We do all this to enhance your user experience on our website and we do not use this for any promotional purpose.</p>
            </div>
            <div className=" lg:flex gap-6 w-full lg:space-y-0 space-y-5">
              <div className="bg-gray-100 p-4 rounded-md shadow-md border-black border hover:shadow-xl lg:w-1/2 w-full">
                <h2 className="text-xl font-semibold mt-2 text-secondary">How We Handle Personal Data?
                </h2>
                <p>We collect and save data in our secure databases. Then, we use this data for different purposes for what purpose the specific data will be collected. We do the data-collecting process transparently to sustain customer’s trust in us. </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md shadow-md border-black border hover:shadow-xl lg:w-1/2 w-full">
                <h2 className="text-xl font-semibold mt-2 text-secondary">Data Procured through Applications
                </h2>
                <p>We urge our customers to share prior access to us who submitted their applications for career-related opportunities. Through analyzing this data, we provide the best deals to them and all the deals follow the GDPR community guidelines.</p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md border-black border hover:shadow-xl">
              <h2 className="text-xl font-semibold mt-2 text-secondary">Third-Party free Data Procurement</h2>
              <p>We never allow interference from third parties especially when it comes to revealing data but in some cases, we have to do it. At that time, we do it under the agreement through data-protecting internal policies. </p>
            </div>
          </div>

          <div className='lg:w-2/5 w-full mx-auto xl:px-10 px-4 space-y-10 bg-primary text-white py-20  '>
            <h1 className="font-bold text-2xl ">Refined</h1>
            <h2 className="font-semibold lg:text-6xl text-5xl tracking-wide ">Modes of Procuring Client Data</h2>
            <p className=' leading-6 lg:text-md text-base'>Vigorous offers versatile digital services including designing, fintech, media etc. We completely analyze the development process to provide better services. These are a listing of our modes of procuring client data where you can know all minor details.</p>
            <ul className="list-none lg:pl-3 space-y-5 lg:text-md text-base">
              <li>Data Procured through Applications</li>
              <li>Other Zones Of Interaction</li>
              <li>Third-Party free Data Procurement</li>
              <li>Data Procured through Applications</li>
              <li>Third-Party Free Data Procurement</li>
            </ul>
          </div>
        </div>

        <div className=" text-gray-800">
          <div className="w-11/12  mx-auto lg:p-6  ">

            <h2 className="text-4xl font-bold text-primary text-center ">Insights on</h2>

            <div className="w-full space-y-5 py-5 mx-auto font-nunito">

              <div className="lg:flex gap-6 text-base w-full lg:space-y-0 space-y-5">
                <div className="bg-gray-100 p-4 rounded-md shadow-md hover:shadow-xl  border-black border lg:w-1/2 w-full">
                  <h2 className="text-xl font-semibold mt-2 text-secondary">Refund Policy</h2>
                  <p>
                    We always encourage customers to request for refund policy but in case of getting unfair services. Our services are based on standard practices that make the refunding process more transparent and secure.
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md shadow-md hover:shadow-xl border-black border lg:w-1/2 w-full">
                  <h2 className="text-xl font-semibold mt-2 text-secondary">Refund Eligibility
                  </h2>
                  <p>
                    In case of facing any inconvenience or any less satisfactory situation, you can make a request to abandon the project. Here, we will analyze your request to complete further process of cancelling the deals.
                  </p>
                  <p>
                    Once, you make the initial payments, they will be not refunded and this applies on every condition but for those who pay the entire project fee and ask to abandon the project in 15 days, we will refund their cost.
                  </p>
                </div>
              </div>

              <div className="lg:flex gap-6 text-base w-full lg:space-y-0 space-y-5 ">
                <div className="bg-gray-100 p-4 rounded-md shadow-md hover:shadow-xl border-black border lg:w-1/2 w-full">
                  <h2 className="text-xl font-semibold mt-2 text-secondary">Payment Durations</h2>
                  <p>
                    At Vigorous, we insist customers to pay 30 to 50 percent of the project amount to initiate it while the remaining payment can be made after completing the project.
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md shadow-md hover:shadow-xl border-black border lg:w-1/2 w-full">
                  <h2 className="text-xl font-semibold mt-2 text-secondary">Discussions</h2>
                  <p>
                    We encourage you to discuss all project details and also about the refund policy in the counselling session. Here, you can get the best guide that will help us both to proceed with a positive attitude.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="font-nunito bg-white p-4 rounded-md shadow-md mx-auto text-center py-6 space-y-5 mb-20 mt-10 md:border-solid md:border-slate-200 md:outline-4 md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px_8px] 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
          <h2 className='text-2xl font-bold text-primary'>Disclaimer</h2>
          <p className='text-base'>We fairly know how risky is to share your data on the internet. There are precautions and safety practices available but at Vigorous we disclaim to own responsibility for any data loss. We, our affiliates and our contractors are all beyond this claim. Besides this, we will do our best to make your data safer and will try to implement all precautions.
          </p>
        </div>

      </div>

    </>
  );
};

export default PrivacyPolicy;
