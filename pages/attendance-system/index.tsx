import Head from 'next/head'
import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import Image from 'next/image'
import About from '../../components/About'
import PageData from "./data.json"
import Estimation from '../../components/Estimation'
import GridSection from '../../components/GridSection'
import WhyNeed from '../../components/WhyNeed'
import FaqSection from '../../components/FaqSection '

const { estimation, usedFor, needFor,faqDataOne,faqDataTwo } = PageData;
const attendanceSystem = () => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="language" content="en" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                <title> Best School App & Web Development Company - Vigorous IT  </title>
                <meta name="description" content="Using the latest web frameworks, Vigorous IT offers web app development services that turn ideas into profitable business solutions." />
                <link rel="canonical" href="https://" />

                <meta property="og:url" content="https://" />
                <meta property="og:title" content="Best School App & Web Development Company - Vigorous IT" />
                <meta property="og:site_name" content="Vigorous IT" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Using the latest web frameworks, Vigorous IT offers web app development services that turn ideas into profitable business solutions." />
                <meta property="og:image" content="https:/" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="vigorousit.com" />
                <meta name="twitter:site" content="“@vigorousit" />
                <meta property="twitter:url" content="https://" />
                <meta name="twitter:title" content="Best School App & Web Development Company - Vigorous IT" />
                <meta name="twitter:description" content="Using the latest web frameworks, Vigorous IT offers web app development services that turn ideas into profitable business solutions." />
                <meta name="twitter:image" content="https:/" />

            </Head>

            <section className="overflow-hidden">
                <div className="max-width w-full bg-primary">
                    <Header />
                    <div className=" lg:flex justify-between items-center space-x-5  w-11/12  mx-auto 2xl:pt-[8rem] 2xl:pb-[8rem] pt-[10rem] pb-[3rem] md:space-y-0 space-y-10 max-w-7xl">

                        <div className="lg:w-1/2 w-full">
                            <HeroSection
                                title="RFID Attendance Management System For Educational Institutions"
                                titleOne=""
                                para="Minimize absenteeism & enhance punctuality of your students and staff by tracking & maintaining accurate attendance records!"
                                callToActionLine=""
                                buttonCount={1}
                                buttonNames={["Request Demo"]}
                            />
                        </div>
                        <div className=" lg:w-1/2 w-full lg:flex lg:justify-center  ">
                            <Image src={'/images/RFID-banner.png'} alt='' width={500} height={200} />
                        </div>
                    </div>
                </div>

                <About
                    title="RFID Student Attendance Management System"
                    paraOne="The majority of educational institutions including schools, colleges, and universities that rely on traditional paper-based attendance systems have to face a lot of hassles every day. Be it the employees, faculty, and staff attendance or daily attendance of students, on an average 20-30 minutes gets wasted, which otherwise could be reserved for fruitful teaching-learning or other academics-related activities. Also, data entry errors are common when attendance is marked, generating attendance reports manually is difficult, and student data safety remains a point of concern."
                    paraTwo="To ensure error-free, accurate, faster, convenient, and paperless attendance management, educational institutions can switch to Biometric & RFID based online attendance management systems."
                    paraThree={undefined}
                    btnName="Request Demo"
                    img="/images/Student-Attendance-System.webp" type={1} />


                <Estimation title="Features Of RFID-Attendance System" desc="The RFID attendance comes with advanced features which helps in capturing, monitoring, and managing accurate attendance of students, faculty, and non-teaching staff, thus simplifying the overall attendance process." Estimation={estimation} />


                <div className=" mx-auto  w-11/12 max-w-7xl font-nunito">
                    <GridSection
                        values={usedFor}
                        title="What Are Learning Management Systems Used For?"
                        para="Learning Management Systems are your institution's digital command centre, in other words, making learning and administrative tasks easier as well as more effective. They are dynamic platforms whose designs are meant to revamp educational and training experiences while bringing a simplification of administrative workflows."
                        type={1} types={undefined} />

                </div>

                <div className='bg-primary my-10'>
                    <div className=" mx-auto  w-11/12 max-w-7xl font-nunito">
                        <WhyNeed
                            values={needFor}
                            title="Why Does Your Institution Need LMS Software?"
                            para="Let's face it - conformity to traditional methods won't work anymore. Here's why your institution needs LMS software:"
                        />
                    </div>
                </div>

                <FaqSection faqDataOne={faqDataOne} faqDataTwo={faqDataTwo}/>

            </section>
        </>
    )
}

export default attendanceSystem