import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdDonutLarge, MdOutlineWorkOutline } from "react-icons/md";
import $ from 'jquery';
import { RiPhoneLockLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { TbCloudComputing, TbDeviceImacCode } from "react-icons/tb";
import { FaPenNib } from "react-icons/fa6";
import Popup from "./Popup"
import { PiArrowUpRightBold } from "react-icons/pi";
import HeaderContacts from "./HeaderContacts";
import CallToActionNav from "./CallToActionNav";
import { CgWebsite } from "react-icons/cg";
import { LuScrollText } from "react-icons/lu";

export const company = [
  {
    num: 1,
    icon: <MdDonutLarge size={18} />,
    name: "About Us",
    url: "/",
  },
  {
    num: 2,
    icon: <RiPhoneLockLine size={18} />,
    name: "Contact Us",
    url: "/",
  },
  {
    num: 3,
    icon: <LuScrollText size={18} />,
    name: "Blogs",
    url: "/",
  },
  {
    num: 4,
    icon: <MdOutlineWorkOutline size={22} />,
    name: "Career",
    url: "/",
  },
];

// export const services = [
//   { name: "Mobile App Development", href: "/services/mobile-app-development" },
//   { name: "Android App Development", href: "/services/android-app-development" },
//   { name: "Website Development", href: "/services/website-development" },
//   { name: "iOS App Development", href: "/services/ios-app-development" },
//   { name: "Custom App Development", href: "/services/custom-app-development" },
//   { name: "UI / UX Design", href: "/services/ui-ux-design" },
//   { name: "Quality Assurance", href: "/services/quality-assurance" },
//   { name: "Digital Marketing", href: "/services/digital-marketing" },
//   { name: "RPO Services", href: "/services/recruitment-process-outsourcing" },
//   { name: "Blockchain Development", href: "/" },
//   { name: "Cryptocurrency Development", href: "/" },
//   // { name: "Game Development Services", href: "/services/game-development-services" },
// ];

// export const industry = [
//   { name: "On Demand", href: "/" },
//   { name: "Sports", href: "/" },
//   { name: "Healthcare", href: "/" },
//   { name: "Restaurant", href: "/" },
//   { name: "Entertainment", href: "/" },
//   { name: "Travel", href: "/" },
//   { name: "Telecom", href: "/" },
//   { name: "Construction", href: "/" },
//   { name: "eCommerce", href: "/" },
//   { name: "SaaS", href: "/" },
//   { name: "Games", href: "/" },
//   { name: "Wellness", href: "/" },
//   { name: "Finance", href: "/" },
//   { name: "Politics", href: "/" },
//   { name: "Social Networking", href: "/" },
//   { name: "Banking", href: "/" },
//   { name: "Insurance", href: "/" },
//   { name: "Real Estate", href: "/" },
//   { name: "Education", href: "/" },
//   { name: "News", href: "/" },
//   { name: "Logistics", href: "/" },
//   { name: "Aviation", href: "/" },
//   { name: "Agriculture", href: "/" },
//   { name: "EV", href: "/" },
//   { name: "Automotive", href: "/" },
//   { name: "Manufacturing", href: "/" }
// ];


// export const expertise = [
//   { name: "On Demand App Development", href: "/" },
//   { name: "School ERP Development", href: "/expertise/school-erp-software-development" },
//   { name: "Doctors App Development", href: "/expertise/doctor-appointment-app-development" },
//   { name: "Dating App Development", href: "/expertise/dating-app-development" },
//   { name: "Fantasy Sports App Development", href: "/expertise/fantasy-sports-app-development" },
//   { name: "Astrology App Development", href: "/expertise/astrology-app-development" },
//   // { name: "Live Streaming App Development", href: "/" },
//   { name: "Travel App Development", href: "/expertise/travel-app-development" },
//   { name: "Medicine App Development", href: "/" },
//   { name: "Food Delivery App Development", href: "/expertise/food-delivery-app-development" },
//   { name: "Grocery App Development", href: "/expertise/grocery-delivery-app-development" },
//   { name: "Logistic App Development", href: "/expertise/logistic-app-development" },
//   { name: "Shopping App Development", href: "/" },
//   { name: "Chat Application Development", href: "/" },
//   { name: "Finance App Development", href: "/" },
//   { name: "Real Estate App Development", href: "/expertise/real-estate-app-development" },
//   { name: "Fitness App Development", href: "/" },
//   { name: "Salon App Development", href: "/expertise/salon-app-development" },
//   { name: "Stock Trading App Development", href: "/expertise/stock-trading-app-development" },
//   { name: "Ewallet App Development ", href: "/expertise/ewallet-app-development" },
//   { name: "CA Software Development ", href: "/expertise/ca-software-management-development" },
//   { name: "Car Rental App Development ", href: "/expertise/car-rental-app-development" },
//   // { name: "E-commerce App Development ", href: "/expertise/e-commerce-app-development"},
//   // { name: "Car Wash App Development ", href: "/expertise/car-wash-app-development"},
//   { name: "Liquor Delivery App Development ", href: "/expertise/liquor-delivery-app-development"}
// ];

// const hire = [
//   {
//     title: "Frontend",
//     icon: <FaPenNib className="flex flex-shrink-0" />,
//     links: [
//       { href: "/hire/angular-developer", label: "Hire AngularJS Developers" },
//       { href: "/hire/reactjs-developer", label: "Hire ReactJS Developers" },
//       { href: "/hire/mean-stack-developer", label: "Hire MEAN Stack Developers" },
//     ],
//   },
//   {
//     title: "Cloud Consulting",
//     icon: <TbCloudComputing className="flex flex-shrink-0" />,
//     links: [{ href: "/hire/aws-experts", label: "Hire AWS Experts" }],
//   },
//   {
//     title: "Backend",
//     icon: <TbDeviceImacCode className="flex flex-shrink-0" />,
//     links: [
//       { href: "/hire/nodejs-developer", label: "Hire NodeJS Developers" },
//       { href: "/hire/laravel-developer", label: "Hire Laravel Developers" },
//       { href: "/hire/php-developer", label: "Hire PHP Developers" },
//     ],
//   },
//   {
//     title: "Ecommerce",
//     icon: <IoCartOutline className="flex flex-shrink-0" />,
//     links: [
//       { href: "/hire/ecommerce-developer", label: "Hire Ecommerce Developers" },
//       { href: "/hire/wordpress-developer", label: "Hire WordPress Developers" },
//     ],
//   },
//   {
//     title: "UI UX Design",
//     icon: <CgWebsite className="flex flex-shrink-0" />,
//     links: [
//       { href: "/hire/graphic-designer", label: "Hire Graphics Designers" },
//       { href: "/hire/website-designer", label: "Hire Website Designers" },
//       { href: "/hire/ui-ux-designer", label: "Hire UI/UX Designers" },
//     ],
//   },
// ];


export default function DesktopNav(props: any) {
  const [showNav, setShowNav] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(1);
  const [showCompanyNav, setShowCompanyNav] = useState(null);

  const handleItemHover = (num) => {

    if (num === showNav) {
      setHoveredItem(num);
    } else {
      setHoveredItem(num);
      setShowNav(num);
    }
  };

  useEffect(() => {
    setShowNav(1);
    handleItemHover(1);
  }, []);


  const [menu] = useState(false);
  function toggleSlideover() {
    document
      .getElementById("slideover-container")
      .classList.toggle("invisible");
    document.getElementById("slideover-bg").classList.toggle("opacity-0");
    document.getElementById("slideover-bg").classList.toggle("opacity-50");
    document.getElementById("slideover").classList.toggle("translate-x-full");
  }

  useEffect(() => {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('.headered').addClass('activeheader');
      } else {
        $('.headered').removeClass('activeheader');
      }
    });
  }, []);


  return (
    <div className="w-full headered fixed ">
      <nav className=" flex items-center justify-between  mx-auto  2xl:w-4/5 md:w-11/12 h-16 ">
        <Link passHref={true} href="/" className="relative flex items-center flex-shrink-0 text-white">
          <Image src="/logo/vigo-camp-logo.webp"
            alt="Vigorous IT Solutions logo"
            title="Vigorous IT Solutions logo"
            width={180}
            height={31}
            loader={uploadcareLoader}
            unoptimized={true}
            priority={true}
            loading="eager" />
        </Link>

        <div className={"lg:flex hidden  md:w-auto w-full items-center text-primary 2xl:px-6 xl:px-14 lg:px-10 justify-end whitespace-nowrap"}>
          <div className="block xl:space-x-4 space-x-2 text-sm font-medium md:flex md:items-center">
            <Link href="/" passHref={true}>
              <span className="relative block text-base font-bold leading-none transition duration-300  cursor-pointer animated-border-button border-b-2 border-transparent border xl:pl-2 pl-0 py-4   ">
                Home &nbsp;&nbsp;/
              </span>
            </Link>

            <div className="relative group ">
              <button id="company" aria-label="company"
                className="inline-flex items-center text-base font-bold animated-border-button border-b-2 border-transparent border xl:pl-2 pl-0 py-4 text-primary  cursor-pointer" >
                <span
                  className={
                    showCompanyNav === 3
                      ? "  font-bold text-white/90"
                      : " font-bold "}>
                  Company &nbsp;&nbsp;/
                </span>
              </button>
              <div className="z-50 lg:pt-0 md:pt-2 pt-5  lg:bg-white rounded-2xl bg-transparent capitalize text-gray-700 lg:absolute top-[3.8rem] lg:drop-shadow-xl  whitespace-nowrap relative -right-10  transform hidden group-hover:block transition duration-200 ease-in-out origin-top w-[12rem] ">
                <ul className="space-y-1 pt-2 text-base font-medium py-4">
                  {company.map((elem: any) => {
                    const { name, num, url, icon } = elem;
                    return (
                      <li
                        key={num}
                        className="py-1 left-5 text-black/80 whitespace-nowrap relative"

                      >
                        <Link
                          onClick={() => setShowCompanyNav(showNav === 1 ? 0 : 1)}
                          href={url}
                          passHref={true}
                          className={`hover:text-primary text-black font-semibold hover:font-bold flex gap-2 space-x-2 relative items-center font-nunito
                                  }`}
                        >
                          {icon}
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
{/* 
            <div className="relative group ">
              <button id="services" aria-label="services"
                onClick={() => setShowCompanyNav(showCompanyNav === 4 ? 0 : 4)}
                className="inline-flex items-center text-base font-bold animated-border-button border-b-2 border-transparent border xl:pl-2 pl-0 py-4 text-primary  cursor-pointer ">
                <span
                  className={
                    showNav === 3
                      ? "font-bold text-white/90"
                      : "font-bold"
                  }>
                  Services &nbsp;&nbsp;/
                </span>
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] bg-white rounded-2xl  text-black capitalize lg:absolute top-[3rem] lg:drop-shadow-xl   relative 2xl:-right-[5rem] xl:-right-[2.2rem] right-[2.1rem] transform  translate-x-[50%] hidden group-hover:block transition duration-200 ease-in-out origin-top 2xl:w-[90rem] xl:w-[76rem] lg:w-[63rem] w-[40rem] xl:py-10 py-6 mx-auto space-y-8 xl:whitespace-nowrap whitespace-normal  ">
                <ul className="px-6 grid grid-cols-4 gap-5 font-nunito text-base">
                  {services.map((service, index) => (
                    <li key={index} className="flex xl:items-center items-start gap-2 text-black hover:text-primary">
                      <span><PiArrowUpRightBold size={12} className="xl:mt-0 mt-1.5" /></span>
                      <Link className="flex items-center gap-2.5 text-black hover:text-primary" href={service.href}>
                        <b>{service.name}</b>
                      </Link>
                    </li>
                  ))}
                </ul>
                <CallToActionNav />
              </div>
            </div>

            <div className="relative group ">
              <button id="expertise" aria-label="expertise"
                onClick={() => setShowCompanyNav(showCompanyNav === 4 ? 0 : 4)}
                className="inline-flex items-center text-base font-bold animated-border-button border-b-2 border-transparent border xl:pl-2 pl-0 py-4 text-primary  cursor-pointer ">
                <span
                  className={
                    showNav === 3
                      ? "font-bold text-white/90"
                      : "font-bold"
                  }>
                  Expertise &nbsp;&nbsp;/
                </span>
              </button>
              <div className="z-40 lg:pt-0 mt-[10px] bg-white rounded-2xl  text-black capitalize lg:absolute top-[3rem] lg:drop-shadow-xl   relative 2xl:right-[2rem] xl:right-[5.75rem] right-[8.4rem] transform  translate-x-[50%] hidden group-hover:block transition duration-200 ease-in-out origin-top 2xl:w-[90rem] xl:w-[76rem] lg:w-[63rem] w-[40rem] xl:py-10 py-6 mx-auto xl:pt-12 pt-5 space-y-8 xl:whitespace-nowrap whitespace-normal">
                <ul className="px-6 grid grid-cols-4 gap-5 font-nunito text-base">
                  {expertise.map((expertise, index) => (
                    <li key={index} className="flex xl:items-center  items-start gap-2 text-black hover:text-primary">
                      <span><PiArrowUpRightBold size={12} className="xl:mt-0 mt-1.5" /></span>
                      <Link className="flex items-center gap-2.5 text-black hover:text-primary" href={expertise.href}>
                        <b> {expertise.name}</b>
                      </Link>
                    </li>
                  ))}
                </ul>
                <CallToActionNav />
              </div>
            </div>

            <div className="relative group">
              <button
                id="hire"
                aria-label="hire"
                onClick={() => setShowCompanyNav(showCompanyNav === 4 ? 0 : 4)}
                className="inline-flex items-center text-base font-bold animated-border-button border-b-2 border-transparent xl:pl-2 pl-0 py-4 text-primary cursor-pointer"
              >
                <span className="font-bold">
                  Hire &nbsp;&nbsp;/
                </span>
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] bg-white rounded-2xl text-black capitalize lg:absolute top-[3rem] lg:drop-shadow-xl whitespace-nowrap relative 2xl:right-[6rem] xl:right-[10rem] right-[12.2rem] transform translate-x-[50%] hidden group-hover:block transition duration-200 ease-in-out origin-top 2xl:w-[90rem] xl:w-[76rem] lg:w-[63rem] w-[40rem] xl:py-10 py-6 space-y-8">
                <div className="px-6 grid grid-cols-5 2xl:gap-10 gap-2 font-nunito text-base">
                  {hire.map((section, index) => (
                    <div key={index} className="space-y-2">
                      <p className="py-1 xl:text-lg text-base font-bold text-black border-b-2 w-28 border-white flex items-center gap-2">
                        {section.icon} {section.title}
                      </p>
                      <ul className="space-y-3">
                        {section.links.map((link, idx) => (
                          <li key={idx} className="flex xl:items-center items-start gap-2 text-black hover:text-primary">
                            <span>
                              <PiArrowUpRightBold size={12} className="xl:mt-0 mt-1.5" />
                            </span>
                            <Link href={link.href}>{link.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <CallToActionNav />
              </div>
            </div>

            <div className="relative group ">
              <button id="industries" aria-label="industries"
                onClick={() => setShowCompanyNav(showCompanyNav === 4 ? 0 : 4)}
                className="inline-flex items-center text-base font-bold animated-border-button border-b-2 border-transparent border xl:pl-2 pl-0 py-4 text-primary  cursor-pointer ">
                <span
                  className={
                    showNav === 3
                      ? "font-bold text-white/90"
                      : "font-bold"
                  }>
                  Industries
                </span>
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] bg-white rounded-2xl  text-black capitalize lg:absolute top-[3rem] lg:drop-shadow-xl  relative 2xl:right-[14rem] xl:right-[17rem] right-[18.8rem] transform  translate-x-[50%] hidden group-hover:block transition duration-200 ease-in-out origin-top 2xl:w-[90rem] xl:w-[76rem] lg:w-[63rem] w-[40rem] xl:py-10 py-6 mx-auto xl:pt-12 space-y-8 xl:whitespace-nowrap whitespace-normal">
                <ul className="px-6 grid grid-cols-5 gap-5 font-nunito text-base ">
                  {industry.map((industry, index) => (
                    <li key={index} className="flex xl:items-center items-start gap-2 text-black hover:text-primary">
                      <span><PiArrowUpRightBold size={12} className="xl:mt-0 mt-1.5" /></span>
                      <p className="flex items-center gap-2.5 text-black hover:text-primary" >
                        <b>{industry.name}</b>
                      </p>
                    </li>
                  ))}
                </ul>
                <CallToActionNav />
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          {/* <div className="xl:block hidden">
            <HeaderContacts />
          </div> */}

          <Popup name="Request a Quote" buttonType="callToAction" className="lg:block hidden" />
        </div>
      </nav>
    </div>
  );
}
