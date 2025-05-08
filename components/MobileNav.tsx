import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown, MdMenuOpen, MdMenu, MdMiscellaneousServices, MdDonutLarge, MdPersonSearch, MdSettingsSuggest } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { FiHome } from "react-icons/fi";
import $ from 'jquery';
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
// import { company, expertise, industry, services } from "./DesktopNav";
import { GrUserExpert } from "react-icons/gr";
import Login from "./Login";
import Signup from "./SignUp";



// const frontend = [
//   { name: "Hire Angularjs Developers", url: "/hire/angular-developer" },
//   { name: "Hire ReactJS Developers", url: "/hire/reactjs-developer" },
//   { name: "Hire MEAN Stack Developers", url: "/hire-mean-stack-developer" },
// ];

// const commerce = [
//   { name: "Hire WordPress Developers", url: "/hire/wordpress-developer" },
//   { name: "Hire Ecommerce Developers", url: "/hire/ecommerce-developer" },
// ]

// const backend = [
//   { name: "Hire NodeJs Developers", url: "/hire/nodejs-developer" },
//   { name: "Hire Laravel Developers", url: "/hire/laravel-developer" },
//   { name: "Hire PHP Developers", url: "/hire/php-developer" },
// ];

// const cloud = [
//   { name: "Hire AWS Expert", url: "/" },
// ];

// const ui = [
//   { name: "Hire Graphics Designer", url: "/hire/graphic-designer" },
//   { name: "Hire Website Designer", url: "/hire/website-designer" },
//   { name: "Hire UI/UX Designer", url: "/hire/ui-ux-designer" },
// ];

// const categories = [
//   { name: "Frontend", data: frontend },
//   { name: "Cloud Computing", data: cloud },
//   { name: "Backend", data: backend },
//   { name: "Ecommerce", data: commerce },
//   { name: "UI UX Design", data: ui }
// ];
export default function MobileNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(0);
  const [showCompanyNav, setShowCompanyNav] = useState(0);
  const [showInnerNav, setInnerShowNav] = useState(0);
  const [showInnerNavbar, setShowInnerNavbar] = useState(0);

  const [menu] = useState(false);
  function toggleSlideover() {
    document.getElementById("slideover-container").classList.toggle("invisible");
    document.getElementById("slideover-bg").classList.toggle("opacity-0");
    document.getElementById("slideover-bg").classList.toggle("opacity-50");
    document.getElementById("slideover").classList.toggle("translate-x-full");
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('.headered').addClass('activeheader');
      } else {
        $('.headered').removeClass('activeheader');
      }
    })

  }, []);


  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.headered').addClass('activeheader');
    } else {
      $('.headered').removeClass('activeheader');
    }
  });

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // Toggle login/signup modal
  const openSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false); // Ensure login modal is closed
    toggleSlideover();
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false); // Ensure signup modal is closed
    toggleSlideover();
  };

  const closeModal = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(false); // Close both modals
  };

  return (
    <div className="headered top-0 z-20 bg-transparent fixed w-full">
      <nav className=" flex items-center justify-between w-full px-4 mx-auto 2xl:w-9/12 xl:w-10/12 md:w-11/12 lg:px-0 h-12 pt-2">
        <div className="flex items-center flex-shrink-0 text-primary ">
          <Link passHref={true} href="/" className="relative">
            <Image
              src='/logo/vigo-camp-logo.webp'
              alt="Vigorous IT logo"
              title="Vigorous IT logo"
              width="120"
              height="41"
              loader={uploadcareLoader}
              unoptimized={true}
              priority={true}
              loading="eager"
            />
          </Link>
        </div>
        <div
          onClick={() => toggleSlideover()}
          className={`flex items-center py-2 my-4 rounded cursor-pointer bg-transparent text-primary  xl:hidden `} >
          {menu ? <MdMenuOpen size={5} /> : <MdMenu size={32} />}
        </div>
        <div
          id="slideover-container"
          className="fixed inset-0 invisible w-full h-full">
          <span
            onClick={() => toggleSlideover()}
            id="slideover-bg"
            className="absolute inset-0 w-full h-full transition-all duration-100 ease-out  "></span>
          <div
            id="slideover"
            className="md:w-96 w-80 bg-[#092F5C]  h-[100dvh] absolute  right-0 duration-300 ease-out transition-all translate-x-full overflow-scroll">
              <div>
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-2 bg-[#092F5C]">
              <p className="text-[#FFFFFF] text-[17.5px] font-semibold">
                Menu
              </p>
              <span
                onClick={() => toggleSlideover()}
                className="p-2 rounded-full bg-slate-100/20"
              >
                <VscChromeClose size={20} className="text-white" />
              </span>
            </div>
            <div className="font-medium text-white divide-y divide-white/10 flex flex-col justify-between ">
              <Link
                onClick={() => toggleSlideover()}
                href="/"
                passHref={true}
              >
                {" "}
                <p className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                  <FiHome className="text-[#fff]" size={22} />
                  <span>Home</span>
                </p>
              </Link>

              <Link
                onClick={() => toggleSlideover()}
                href="/"
                passHref={true}
              >
                {" "}
                <p className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                  <FiHome className="text-[#fff]" size={22} />
                  <span>Home</span>
                </p>
              </Link>

              <Link
                onClick={() => toggleSlideover()}
                href="/"
                passHref={true}
              >
                {" "}
                <p className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                  <FiHome className="text-[#fff]" size={22} />
                  <span>Home</span>
                </p>
              </Link>

              {/* <div
                onClick={() => { setShowNav(0); setShowCompanyNav(showCompanyNav === 1 ? 0 : 1) }}
                className={
                  showCompanyNav === 1
                    ? "flex justify-between p-2 items-center px-6 bg-white/10"
                    : "flex justify-between p-2 items-center px-6 bg-transparent "
                }
              >
                <p className="flex items-center space-x-2 ">
                  <MdDonutLarge className="text-[#fff]" size={22} />
                  <span>Company</span>
                </p>
                <MdKeyboardArrowDown size={30} className={showCompanyNav === 1 ? "rotate-180" : "rotate-0"} />
              </div>
              <div
                className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showCompanyNav === 1 ? "max-h-full transition delay-75 ease-in duration-100" : "max-h-0"
                  } `}
              >
                <ul className="grid grid-cols-1 gap-2 p-4">
                  <div className="p-2 space-y-2 text-sm font-medium">
                    {company.map((elem: any, index) => {
                      const { name, url } = elem;
                      return (
                        <li key={index} className="  py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link onClick={() => setShowCompanyNav(showCompanyNav === 1 ? 0 : 1)} href={url} passHref={true} >
                            {name}
                          </Link>
                        </li>);
                    })}
                  </div>
                </ul>
              </div> */}

              {/* <div
                onClick={() => { setShowCompanyNav(0); setShowNav(showNav === 1 ? 0 : 1) }}
                className={
                  showNav === 1
                    ? "flex justify-between p-2 items-center px-6 bg-white/10"
                    : "flex justify-between p-2 items-center px-6 bg-transparent "
                }
              >
                <p className="flex items-center space-x-2 ">
                  <MdMiscellaneousServices className="text-[#fff]" size={22} />
                  <span>Services</span>
                </p>
                <MdKeyboardArrowDown size={30} className={showNav === 1 ? "rotate-180" : "rotate-0"} />
              </div> */}
              {/* <div
                className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 1 ? "max-h-full" : "max-h-0"
                  } `}
              >
                <ul className="grid grid-cols-1 gap-2 p-4 font-nunito text-base ">
                  {services.map((service, index) => (
                    <li key={index} >
                      <Link className="flex items-center gap-2.5 text-white" href={service.href}>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* <div
                onClick={() => { setShowCompanyNav(0); setShowNav(showNav === 2 ? 0 : 2) }}
                className={
                  showNav === 2
                    ? "flex justify-between p-2 items-center px-6 bg-white/10"
                    : "flex justify-between p-2 items-center px-6 bg-transparent "
                }
              >
                <p className="flex items-center space-x-2 ">
                  <GrUserExpert className="text-[#fff]" size={21} />
                  <span>Expertise</span>
                </p>
                <MdKeyboardArrowDown size={30} className={showNav === 2 ? "rotate-180" : "rotate-0"} />
              </div>
              <div
                className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 2 ? "max-h-full" : "max-h-0"
                  } `}
              >
                <ul className="grid grid-cols-1 gap-2 p-4 font-nunito text-base ">
                  {expertise.map((expertise, index) => (
                    <li key={index} >
                      <Link className="flex items-center gap-2.5 text-white" href={expertise.href}>
                        {expertise.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                onClick={() => { setShowCompanyNav(0); setShowNav(showNav === 3 ? 0 : 3) }}
                className={
                  showNav === 3
                    ? "flex justify-between p-2 items-center px-6 bg-white/10"
                    : "flex justify-between p-2 items-center px-6 bg-transparent "
                }
              >
                <p className="flex items-center space-x-2 ">
                  <MdPersonSearch className="text-[#fff]" size={25} />
                  <span>Hire</span>
                </p>
                <MdKeyboardArrowDown size={30} className={showNav === 3 ? "rotate-180" : "rotate-0"} />
              </div>
              <div className={`bg-transparent text-white font-normal pl-4 text-sm capitalize overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 3 ? "max-h-full" : "max-h-0"}`}>
                {categories.map((category, index) => {
                  const categoryIndex = index + 1;
                  const isActive = showInnerNav === categoryIndex;
                  return (
                    <div key={categoryIndex}>
                      <div
                        onClick={() => { setShowInnerNavbar(0); setInnerShowNav(isActive ? 0 : categoryIndex) }}
                        className={`flex justify-between p-2 items-center px-6 ${isActive ? "bg-white/10" : "bg-transparent"}`}
                      >
                        <div className="flex items-center space-x-2">
                          <span>{category.name}</span>
                        </div>
                        <MdKeyboardArrowDown size={30} className={isActive ? "rotate-180" : "rotate-0"} />
                      </div>

                      <div
                        className={`bg-transparent text-white font-normal pl-4 text-sm capitalize overflow-hidden transition-[max-height] duration-300 ease-in ${isActive ? "max-h-full" : "max-h-0"}`}
                      >
                        <ul className="space-y-3 py-1">
                          {category.data.map((item, idx) => (
                            <li key={idx} className="flex xl:items-center items-start gap-2 text-white font-nunito px-5 py-1.5 hover:bg-white/10">
                              <Link href={item.url}>{item.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <div
                  onClick={() => { setShowCompanyNav(0); setShowNav(showNav === 4 ? 0 : 4) }}
                  className={
                    showNav === 4
                      ? "flex justify-between p-3 items-center px-6 bg-white/10"
                      : "flex justify-between p-3 items-center px-6 bg-transparent "
                  }
                >
                  <p className="flex items-center space-x-2 ">
                    <MdSettingsSuggest className="text-[#fff]" size={22} />
                    <span>Industries</span>
                  </p>
                  <MdKeyboardArrowDown size={30} className={showNav === 4 ? "rotate-180" : "rotate-0"} />
                </div>
                <div
                  className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 4 ? "max-h-full" : "max-h-0"
                    } `}
                >
                  <ul className="grid grid-cols-1 gap-2 p-4 font-nunito text-base ">
                    {industry.map((industry, index) => (
                      <li key={index} >
                        <Link className="flex items-center gap-2.5 text-white py-1.5 hover:bg-white/10 px-1" href={industry.href}>
                          {industry.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}

            </div>
            </div>
            <div className="flex-col gap-3  text-white text-sm sticky bottom-0 z-20 flex items-center justify-between px-6 py-2 bg-[#092F5C]">
              <button className="w-11/12 py-1 rounded-md bg-secondary hover:bg-primary" onClick={openSignup}>
                Signup
              </button>
              <button className="w-11/12 py-1 rounded-md bg-secondary hover:bg-primary" onClick={openLogin}>
                Login
              </button>

            
            </div>
          </div>
        </div>
        {(isLoginOpen || isSignupOpen) && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg flex relative">
                    <button className="absolute top-2 right-2 text-gray-500 hover:text-black" onClick={closeModal}>
                      ✕
                    </button>

                    <div className="w-full md:w-1/2 p-8">
                      {isLoginOpen ? (
                        <Login onSwitch={() => { setIsLoginOpen(false); setIsSignupOpen(true); }} onClose={closeModal} isOpen={openLogin} />
                      ) : (
                        <Signup onSwitch={() => { setIsSignupOpen(false); setIsLoginOpen(true); }} onClose={closeModal} isOpen={openSignup} />
                      )}
                    </div>
                  </div>
                </div>
              )}
      </nav>
    </div>
  );
}
