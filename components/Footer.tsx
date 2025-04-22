import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import dynamic from "next/dynamic";
import Link from "next/link";



const services = [
  { href: "/services/mobile-app-development", text: "Mobile App Development" },
  { href: "/services/android-app-development", text: "Android App Development" },
  { href: "/services/website-development", text: "Website Development" },
  { href: "/services/ios-app-development", text: "iOS App Development" },
  { href: "/services/ui-ux-design", text: "UI / UX Design" },
  { href: "/services/quality-assurance", text: "Quality Assurance" },
  { href: "/services/digital-marketing", text: "Digital Marketing" },
  { text: "RPO Services", href: "/services/recruitment-process-outsourcing" },
  { href: null, text: "Blockchain Development" },
  { href: null, text: "Cryptocurrency Development" }
];

const expertise = [
  { href: "/expertise/doctor-appointment-app-development", text: "Doctors App Development" },
  { href: "/expertise/dating-app-development", text: "Dating App Development" },
  { href: "/expertise/fantasy-sports-app-development", text: "Fantasy Sports App Development" },
  { href: "/expertise/food-delivery-app-development", text: "Food Delivery App Development" },
  { text: "Astrology App Development", href: "/expertise/astrology-app-development" },
  { text: "Real Estate App Development", href: "/expertise/real-estate-app-development" },
  { text: "Salon App Development", href: "/expertise/salon-app-development" },
  { text: "Stock Trading App Development", href: "/expertise/stock-trading-app-development" },
  { text: "Ewallet App Development ", href: "/expertise/ewallet-app-development" },
  { text: "CA Software Development ", href: "/expertise/ca-software-management-development"}
];

const links = [
  { href: "/career", text: "Career" },
  { href: "/about-us", text: "About Us" },
  { href: "/contact-us", text: "Contact Us" },

];

const socialMediaLinks = [
  {
    href: "https://www.facebook.com/vigorousitsolutions/",
    label: "Facebook",
    icon: <FaFacebook size={24} className="text-white/80 transition hover:text-white" />,
  },
  {
    href: "https://twitter.com/vigorousit",
    label: "Twitter",
    icon: <FaTwitter size={24} className="text-white/80 transition hover:text-white" />,
  },
  {
    href: "https://www.instagram.com/vigorousitsolutions/",
    label: "Instagram",
    icon: <FaInstagram size={24} className="text-white/80 transition hover:text-white" />,
  },
  {
    href: "https://www.linkedin.com/company/vigorous-it-solutions/",
    label: "LinkedIn",
    icon: <FaLinkedin size={24} className="text-white/80 transition hover:text-white" />,
  },
  {
    href: "https://www.pinterest.com/vigorousitsolutions/",
    label: "Pinterest",
    icon: <FaPinterest size={24} className="text-white/80 transition hover:text-white" />,
  },
  {
    href: "https://www.youtube.com/@Vigorous-IT-Solutions",
    label: "YouTube",
    icon: <FaYoutube size={24} className="text-white/80 transition hover:text-white" />,
  },
];

const ContactFormFooter = dynamic(() => import('../components/ContactFormFooter'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const Footer = () => {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Vigorous IT Solution",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "448",
              "reviewCount": "375"
            },

          })
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Vigorous IT Solutions",
            "image": "https://www.vigorousit.com/logo/vigorousit_logo.webp",
            "@id": "",
            "url": "https://www.vigorousit.com/",
            "telephone": "+91 820 951 4612",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "250, Janak Marg, Hanuman Nagar Extension, Officers Campus Colony, Jaswant Nagar,",
              "addressLocality": "Jaipur, Rajasthan",
              "postalCode": "302021",
              "addressCountry": "IN"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/vigorousitsolutions/",
              "https://twitter.com/vigorousit",
              "https://www.instagram.com/vigorousitsolutions/",
              "https://www.youtube.com/@Vigorous-IT-Solutions",
              "https://www.linkedin.com/company/vigorous-it-solutions/",
              "https://www.pinterest.com/vigorousitsolutions/"
            ]

          })
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "Vigorous IT Solution",
            "url": "https://www.vigorousit.com/",
            "logo": "https://www.vigorousit.com/logo/vigorousit_logo.webp",
            "sameAs": [
              "https://www.facebook.com/vigorousitsolutions/",
              "https://twitter.com/vigorousit",
              "https://www.instagram.com/vigorousitsolutions/",
              "https://www.linkedin.com/company/vigorous-it-solutions/",
              "https://www.pinterest.com/vigorousitsolutions/",
              "https://www.youtube.com/@Vigorous-IT-Solutions"
            ]
          })
        }}
      />

      <footer className="bg-black font-nunito">
            <ContactFormFooter />
            <div className=" max-w-7xl 2xl:w-9/12 w-11/12 px-4 pb-20 mx-auto xl:flex justify-evenly items-start grid  md:grid-cols-2 grid-cols-1    xl:pt-4 pt-0 gap-6 whitespace-nowrap">
              {/* <div className="">
                <p className="text-xl font-bold text-secondary pb-2">Services</p>
                <ul className="mt-4 space-y-2 font-medium text-base border-l border-gray-400 h-[250px] overflow-y-auto slidenone">
                  {services.map((service, index) => (
                    <li key={index}>
                      {service.href ? (
                        <Link passHref={true} href={service.href} className="text-white/80 hover:text-white transition black flex items-center">
                          <hr className="w-[10px] bg-gray-400 h-[2px]" />
                          &nbsp;&nbsp;{service.text}
                        </Link>) :

                        <div className="text-white/80 hover:text-white transition black flex items-center">
                          <hr className="w-[10px] bg-gray-400 h-[2px]" />
                          &nbsp;&nbsp;{service.text}
                        </div>}
                    </li>
                  ))}
                </ul>
              </div> */}
{/* 
              <div >
                <p className="text-xl font-bold text-secondary pb-2">Expertise</p>
                <ul className="mt-4 space-y-2 font-medium text-base border-l border-gray-400 h-[250px] overflow-y-auto slidenone">
                  {expertise.map((expertise, index) => (
                    <li key={index}>
                      {expertise.href ?
                        <Link passHref={true} href={expertise.href} className="text-white/80 hover:text-white transition black flex items-center">
                          <hr className="w-[10px] bg-gray-400 h-[2px]" />
                          &nbsp;&nbsp;{expertise.text}
                        </Link> :
                        <div className="text-white/80 hover:text-white transition black flex items-center">
                          <hr className="w-[10px] bg-gray-400 h-[2px]" />
                          &nbsp;&nbsp;{expertise.text}
                        </div>}
                    </li>
                  ))}
                </ul>
              </div> */}

              <div className="">
                <p className="text-xl font-bold text-secondary pb-2">Quick Links</p>
                <ul className="mt-4 space-y-2 font-medium text-base border-l border-gray-400">
                  {links.map((link, index) => (
                    <li key={index}>
                      {link.href ? (
                        <Link passHref={true} href={link.href} className=" text-white/80 transition hover:text-white flex items-center">
                          <hr className="w-[10px] bg-gray-400 h-[2px] " />
                          &nbsp;&nbsp;{link.text}
                        </Link>) :
                        <div className=" text-white/80 transition hover:text-white flex items-center">
                          <hr className="w-[10px] bg-gray-400 h-[2px] " />
                          &nbsp;&nbsp;{link.text}
                        </div>
                      }
                    </li>
                  ))}
                </ul>
              </div>

              <div className='space-y-3'>
                <p className="text-xl font-bold text-secondary pb-2">Contact</p>
                <div className="text-secondary flex gap-1 w-full items-center mt-4">
                  <FaPhoneAlt size={17} className="text-white" />&nbsp;
                  <span className="text-white/80 text-md font-medium transition hover:text-white ">
                    <Link passHref={true} href="tel:+918209514612">
                      +911234567890
                    </Link>
                  </span>
                </div>
                <div className="text-secondary flex gap-3 w-full items-center">
                  <span><FaEnvelopeOpenText size={17} className="text-white" /></span>
                  <span className="text-white/80 text-md font-medium transition hover:text-white">
                    <Link passHref={true} href="mailto:contact@vigorousit.com">
                      abc@gmail.com
                    </Link>
                  </span>
                </div>

                {/* <div className='space-y-3'>
                <p className="text-xl font-bold text-secondary pb-2">Contact</p>
                <div className="text-secondary flex gap-1 w-full items-center mt-4">
                  <FaPhoneAlt size={17} className="text-white" />&nbsp;
                  <span className="text-white/80 text-md font-medium transition hover:text-white ">
                    <Link passHref={true} href="tel:+918209514612">
                      +91 82095 14612
                    </Link>
                  </span>
                </div>
                <div className="text-secondary flex gap-3 w-full items-center">
                  <span><FaEnvelopeOpenText size={17} className="text-white" /></span>
                  <span className="text-white/80 text-md font-medium transition hover:text-white">
                    <Link passHref={true} href="mailto:contact@vigorousit.com">
                      contact@vigorousit.com
                    </Link>
                  </span>
                </div> */}
{/* 
                <p className="text-xl font-bold text-secondary pt-5">Follow Us</p>
                <ul className="flex gap-5">
                  {socialMediaLinks.map(({ href, label, icon }, index) => (
                    <li key={index}>
                      <Link passHref href={href} rel="noreferrer" aria-label={label} target="_blank">
                        {icon}
                      </Link>
                    </li>
                  ))}
                </ul> */}

               
              </div>
            </div>
      </footer>
    </>
  );
};
export default Footer;