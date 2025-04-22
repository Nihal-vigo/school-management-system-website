import Image from "next/image";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from 'next/dynamic'
import PageData from "./data.json"
import PartnersLogoMobileView from "../components/PartnersLogoMobileView";
import OtherExpertise from "./roles";
import Link from "next/link";
import About from "../components/About";
import Panels from "../components/Panels";
import Benefits from "../components/Benefits";
import Plans from "../components/Plans";
import Offer from "../components/Offer";
import Features from "../components/Features";
import FaqSection from "../components/FaqSection ";
import ClientTestimonial from "../components/ClientsTestimonials";
import { HiAcademicCap } from "react-icons/hi2";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FcOk } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})


const HeroSection = dynamic(() => import('../components/HeroSection'), {
  loading: () => <p>Loading...</p>,
})


const plans = [
  {
    "title": "Basic Plan",
    "decs": "Perfect for Small Institutions or Startups (Upto 300 Students)",
    "items": [
      {
        "subtitle": "Included:",
        "content": [

          {
            icon: <FcOk />,
            name: "Student, Teacher & Staff Records Management"
          },
          {
            icon: <FcOk />,
            name: "Attendance Tracking (Manual Entry)"
          },
          {
            icon: <FcOk />,
            name: "Timetable & Scheduling Tool"
          },
          {
            icon: <FcOk />,
            name: "Email & SMS Notification System"
          },
          {
            icon: <FcOk />,
            name: "Document Management (Limited)"
          },
          {
            icon: <FcOk />,
            name: "Basic Reporting & Analytics"
          },
          {
            icon: <FcOk />,
            name: "Web Admin Portal"
          }
        ]
      },
      {
        "subtitle": "Not Included:",
        "content": [
          {
            icon: <ImCross size={12} />,
            name: "Mobile App Access"
          },
          {
            icon: <ImCross size={12} />,
            name: "Online Fee Collection"
          },
          {
            icon: <ImCross size={12} />,
            name: "Exam & Grading Modules"
          },
          {
            icon: <ImCross size={12} />,
            name: "Biometric Integration"
          },
          {
            icon: <ImCross size={12} />,
            name: "Transport, Library & Hostel Modules"
          }
        ]
      }
    ],
    "btnName": "Starting Price: ₹5,000/year"
  },
  {
    "title": "Advanced Plan",
    "decs": "Recommended for Medium to Large Schools (Upto 300 Students)",
    "items": [
      {
        "subtitle": "Included:",
        "content": [
          {
            icon: <FcOk />,
            name: "All Essential Plan Features",
          },
          {
            icon: <FcOk />,
            name: "Fee Management System with Online Payment Gateway Integration",
          },
          {
            icon: <FcOk />,
            name: "Exam Management & Auto Grading",
          },
          {
            icon: <FcOk />,
            name: "Parent-Teacher Communication Portal",
          },
          {
            icon: <FcOk />,
            name: "Mobile App (Android) – Branded Access",
          },
          {
            icon: <FcOk />,
            name: "Library Management System",
          },
          {
            icon: <FcOk />,
            name: "Inventory & Asset Tracking",
          },
          {
            icon: <FcOk />,
            name: "Notification Scheduler",
          },
          {
            icon: <FcOk />,
            name: "Certificate Generation (TC, Bonafide, etc.)"
          }
        ]
      },
      {
        "subtitle": "Not Included:",
        "content": [
          {
            icon: <ImCross size={12} />,
            name: "Transport with GPS",
          },
          {
            icon: <ImCross size={12} />,
            name: "Biometric & RFID Integration",
          },
          {
            icon: <ImCross size={12} />,
            name: "Multi-Branch / Campus Management",
          },
          {
            icon: <ImCross size={12} />,
            name: "Hostel & Meal Plans",
          },
          {
            icon: <ImCross size={12} />,
            name: "API Integrations / Custom Features"
          }
        ]
      }
    ],
    "btnName": "Starting Price: ₹7,500/year"
  }
]

const { offer, TeachersPanel, ParentsPanel, AdminPanel, tabFeatures, benefits, faqDataOne, faqDataTwo, roles } = PageData;

const tabs = [
  {
    "icon": <HiAcademicCap size={30} className="" />,
    "title": "Academics Management"
  },
  {
    "icon": <PiStudentFill size={30} className="" />,
    "title": "Student Management"
  },
  {
    "icon": <MdOutlineEmojiTransportation size={30} className="" />,
    "title": "Transportation/Library /Hostel"
  },
  {
    "icon": <BiSolidReport size={30} className="" />,
    "title": "Exam Management"
  },
  {
    "icon": <BsCashCoin size={30} className="" />,
    "title": "Payroll & Finance Management"
  },
  {
    "icon": <IoPeopleCircleOutline size={30} className="" />,
    "title": "Employee/HRM Management"
  }
]

const homepage = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title> Best Mobile App & Web Development Company - Vigorous IT  </title>
        <meta name="description" content="Using the latest web frameworks, Vigorous IT offers web app development services that turn ideas into profitable business solutions." />
        <link rel="canonical" href="https://www.vigorousit.com/" />

        <meta property="og:url" content="https://www.vigorousit.com/" />
        <meta property="og:title" content="Best Mobile App & Web Development Company - Vigorous IT" />
        <meta property="og:site_name" content="Vigorous IT" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Using the latest web frameworks, Vigorous IT offers web app development services that turn ideas into profitable business solutions." />
        <meta property="og:image" content="https://www.vigorousit.com/logo/vigo-camp-logo.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vigorousit.com" />
        <meta name="twitter:site" content="“@vigorousit" />
        <meta property="twitter:url" content="https://www.vigorousit.com/" />
        <meta name="twitter:title" content="Best Mobile App & Web Development Company - Vigorous IT" />
        <meta name="twitter:description" content="Using the latest web frameworks, Vigorous IT offers web app development services that turn ideas into profitable business solutions." />
        <meta name="twitter:image" content="https://www.vigorousit.com/logo/vigo-camp-logo.webp" />

      </Head>

      <section className="overflow-hidden">
        <div className="max-width w-full bg-cover bg-slate-300 no-repeat md:pt-0 pt-32">
          <div className="relative">
            <Header />
            <div className="w-11/12 2xl:w-4/5 xl:w-[90%] flex lg:flex-row flex-col md:items-center mx-auto xl:pt-32 sm:pt-28 justify-between md:space-y-0 space-y-10 max-w-7xl  ">
              <div className="lg:w-1/2 w-full">
                <HeroSection
                  title="School Management Software"
                  titleOne=""
                  para="Vigo School is a feature-packed, modern, and cloud-based school management software that manages academic workload through streamlining operations and enhanced efficiency."
                  buttonCount={1}
                  buttonNames={[""]}
                  callToActionLine="" />
              </div>

              <div className="xl:w-1/2 lg:w-1/2  ">
                <Image
                  src="/images/expertise/travel-app/hero-img.webp"
                  alt="Travel App Development Company"
                  title="Travel App Development"
                  width={600}
                  height={700} />
              </div>
            </div>
          </div>
        </div>

        <About
          title={"Welcome To Vigo School: All-In-One School ERP Software"}
          paraOne="We take charge of enhancing the school’s efficiency and letting them manage all school operations with an all-in-one powerful platform. Vigo school software is specifically helpful in offering a digitally connected school ecosystem, which makes it a perfect software that has the power to fulfil the needs of modern-day educational institutions. It makes the communication process easier with integrations like WhatsApp/SMS APIs, while further integrations play an important role in offering a paperless and centralized administrative system."
          paraTwo=""
          paraThree="" btnName={undefined}
          img="/images/expertise/travel-app/about-img.webp"
          imgTitle={""}
        />

        <Panels
          title="Vigo School Management Software Panel Features"
          decs="Vigo School makes it easy for every stakeholder, including admins, students/parents, and teachers, to contribute to the institute."
          PanelOne={TeachersPanel}
          PanelTwo={ParentsPanel}
          AdminPanel={AdminPanel}
          AdminTech="Admin Panel"
          PanelOneTech="Teachers Panel"
          PanelTwoTech="Student/Parents Panel"
          AdminImage="/images/expertise/travel-app/panels/admin-panel.webp"
          PanelOneImage="/images/expertise/travel-app/panels/user-panel.webp"
          PanelTwoImage="/images/expertise/travel-app/panels/agent-panel.webp"
          PanelIconsOne={undefined} PanelIconsTwo={undefined} PanelIconsThree={undefined} types={"white-image"}
        />


        <Benefits
          title="Benefits Of School ERP Software"
          desc="Vigo School is a leading school ERP software that brings ease to the lives of all school stakeholders, including admins, teachers, students, and parents."
          benefits={benefits} />

        <div className="bg-purple-100 py-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Select Your Role To Setup Your School
          </h2>
          <p className="text-gray-600 mt-1">( In 2 Steps Only )</p>

          <div className="flex justify-center flex-wrap xl:gap-6 gap-1 mt-10">
            {roles.map((role) => (
              <div
                key={role.label}
                onClick={() => setSelectedRole(role.label)}
                className={`sm:w-52 w-32 sm:h-40 h-32  bg-white rounded-lg shadow-md flex flex-col items-center justify-center border-2 cursor-pointer transition-all duration-300 ${selectedRole === role.label
                  ? "border-blue-500 ring-2 ring-blue-400"
                  : "border-transparent"
                  }`}
              >
                <Image src={role.image} alt={role.label} width={50} height={10} className="sm:w-16 sm:h-16 mb-2" />
                <p className="font-semibold text-sm">{role.label}</p>
              </div>
            ))}
          </div>

          <button
            className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
            disabled={!selectedRole} 
          >
            <Link href="/roles" target="blank">
            Next</Link>
          </button>
        </div>


        <Plans
          title="Vigo School ERP Pricing – Plans That Bring Growth"
          desc="Vigo offers flexible pricing tailored to your needs that allows school of all scales to enjoy their innovative services to reduce their workload."
          Plans={plans} />


        <Offer
          title={"What Do We Offer? Get Exact What Makes Your School Competitive"}
          desc={"Vigo School is one of India's most appreciated school management software from different kinds of reputed resources."}
          Offer={offer} />

        <Features title={"Vigo Offers Effortless Operations Handling With Its Advanced Features"} desc={"With a clean and intuitive UX/UI, Vigo School is a user-friendly and powerful software with a variety of add-ons. "} tabFeatures={tabFeatures} tabs={tabs} />

        <FaqSection faqDataOne={faqDataOne} faqDataTwo={faqDataTwo} />

        <ClientTestimonial />

      </section>
    </>
  );
};


export default homepage;