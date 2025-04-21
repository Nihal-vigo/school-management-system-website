import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react'
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { RiWhatsappFill } from 'react-icons/ri';
import { BsSuitcaseLg } from 'react-icons/bs';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa6';
  

const BuildTask = dynamic(() => import('../components/BuildTask'), {
  loading: () => <p>Loading...</p>,
})

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})

const locationCards = [
  {
    titleOne: "sales@vigorousit.com",
    decs: "91-8209514612",
    img: <BsSuitcaseLg size={50} />,
    title: "Sales Enquries"
  },
  {
    titleOne: "hr@vigorousit.com",
    decs: "+91-8854881710",
    img: <FaLaptopCode size={52} />,
    title: "Job Enquries"
  },
];

export default function Contact(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title> Vigorous IT App and Web Development Team | Get in Touch</title>
        <link rel="canonical" href="https://www.vigorousit.com/contact-us" />
        <meta name="description" content="Contact Vigorous IT to discuss your project requirements. we have multiple channels where you can contact us. Check out the one you want to choose" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Vigorous IT App and Web Development Team | Get in Touch" />
        <meta property="og:description" content="Contact Vigorous IT to discuss your project requirements. we have multiple channels where you can contact us. Check out the one you want to choose" />
        <meta property="og:url" content="https://www.vigorousit.com/contact-us" />
        <meta property="og:site_name" content="Vigorous IT" />
        <meta property="article:modified_time" content="2022-09-01T13:05:06+00:00" />
        <meta property="og:image" content="https://www.vigorousit.com/logo/vigorousit_logo.webp" />

        <meta name="twitter:card" content="summary" />
        <meta property="twitter:domain" content="vigorousit.com" />
        <meta name="twitter:site" content="“@vigorousit" />
        <meta property="twitter:url" content="https://www.vigorousit.com/contact-us" />
        <meta property="twitter:title" content="Vigorous IT App and Web Development Team | Get in Touch" />
        <meta property="twitter:description" content="Contact Vigorous IT to discuss your project requirements. we have multiple channels where you can contact us. Check out the one you want to choose" />
        <meta name="twitter:image" content="https://www.vigorousit.com/logo/vigorousit_logo.webp" />

      </Head>
      <div className="overflow-hidden ">
        <div className=" max-width w-full bg-[url('/images/contact/contact-banner.webp')] bg-cover  ">
          <Header />
          <div className="py-14 md:py-24 ">
            <div className=" w-11/12 max-w-7xl mx-auto 2xl:w-9/12 xl:w-5/6  py-28 ">

              <h1 className="text-white md:text-left text-left lg:text-5xl text-3xl font-bold font-inter">
                Contact Us
              </h1>
              <p className="mx-auto md:text-lg text-md font-bold text-white font-nunito">
                We are just a click away
              </p>

            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className="bg-white border-solid absolute left-2/4 -top-20 transform -translate-x-[50%] border-slate-200 outline-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px_8px] py-8 rounded-3xl mx-auto 2xl:w-2/3 xl:w-5/6 w-11/12 max-w-7xl space-y-4">
          <div className='flex flex-col justify-center items-center text-center md:px-10 sm:px-5 px-2 md:space-y-3 space-y-1'>
            <HiOutlineChatBubbleLeftRight size={52} />
            <h2 className='md:text-4xl text-xl font-extrabold font-inter'>Feel Free To Approach Us And Answers Of Your Questions
            </h2>
            <p className='md:text-3xl text-lg text-primary font-nunito'>Let’s Talk</p>
            <p className='lg:text-md text-base lg:px-10 font-nunito'>Our experts are ready to chat with you. You can share your ideas with them to minimize the chances of losing your investments. They will guide you in creating your dream website as a successful business. </p>
          </div>

          <div className='bg-gradient-to-l from-blue-500 to-blue-900 cursor-pointer whitespace-nowrap rounded-b-xl fixed sm:-bottom-14 -bottom-10 left-1/2 transform -translate-x-1/2'>
            <Link href="https://api.whatsapp.com/send?phone=918209514612" passHref={true} target="_blank"><p className='md:text-xl text-base text-white flex items-center font-bold sm:px-4 px-2 sm:py-2 py-0  gap-4 font-nunito'>Chat with us <span><RiWhatsappFill size={40} className='bg-green-500 rounded-full md:rounded-bl-none md:px-0 px-2' /></span></p></Link>
          </div>
        </div>
      </div>

      <section className='w-11/12 mx-auto xl:flex block justify-between 2xl:w-9/12 xl:w-5/6 max-w-7xl xl:gap-10 gap-2 sm:pt-80 pt-96 pb-20'>
        <div className='xl:w-1/2 w-full mx-auto p-2  '>
          <div className="wpb_raw_code wpb_content_element wpb_raw_html" >
            <div className="wpb_wrapper">
              <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.3380238326932!2d75.7397929011729!3d26.922265053857455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db367adcc873b%3A0xbe79e60941c05e9a!2s250%2C%20Janak%20Marg!5e0!3m2!1sen!2sin!4v1738127244490!5m2!1sen!2sin" width="100%" height="370" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        <div className='xl:w-1/2 w-full space-y-4 lg:px-10 m-auto py-16 relative bg-slate-100'>
          <div className="sm:flex gap-10 sm:space-y-0 space-y-10 justify-center text-center font-semibold items-center">
            {locationCards.map((elem, index) => {
              const { title, decs, img, titleOne } = elem;
              return (
                <div key={index}>
                  <div className=" border-solid  border  border-gray-300 md:w-full w-5/6 mx-auto bg-white ">
                    <div className='bg-primary py-1.5 text-white font-nunito'>{title}</div>
                    <div className='px-5 py-5 border-b-2 border-primary rounded-b space-y-3 '>
                      <div className='flex justify-center text-center '>
                        {img}
                      </div>
                      <p className="text-base font-nunito">{titleOne}</p>
                      <p className="text-base font-nunito">{decs}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <ul className="flex gap-5 pt-2 justify-center text-primary">
            <li>
              <Link passHref={true} href="https://www.facebook.com/vigorousitsolutions/" rel="noreferrer" aria-label="Facebook" target="_blank" className="transition hover:text-secondary">
                <FaFacebook size={30} />
              </Link>
            </li>
            <li>
              <Link passHref={true} href="https://twitter.com/vigorousit" rel="noreferrer" aria-label="twitter" target="_blank" className=" transition hover:text-secondary">
                <FaTwitter size={30} />
              </Link>
            </li>
            <li>
              <Link passHref={true} href="https://www.instagram.com/vigorousitsolutions/" rel="noreferrer" aria-label="instagram" target="_blank" className=" transition hover:text-secondary">
                <FaInstagram size={30} />
              </Link>
            </li>
            <li>
              <Link passHref={true} href="https://www.linkedin.com/company/vigorous-it-solutions/" rel="noreferrer" aria-label="linkedin" target="_blank" className=" transition hover:text-secondary">
                <FaLinkedin size={30} />
              </Link>
            </li>
            <li>
              <Link passHref={true} href="https://in.pinterest.com/vigorousitsolutions/" rel="noreferrer" aria-label="pinterest" target="_blank" className=" transition hover:text-secondary">
                <FaPinterest size={30} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <BuildTask />
       
    </>
  )
}

  
