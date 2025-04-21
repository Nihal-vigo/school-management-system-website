import React, { useState } from "react";
import Image from "next/image";
import PartnersLogo from "./PartnersLogo";
import TechnologyMobile from "./TechnologyMobile";
import { BiLogoGoLang, BiLogoGoogleCloud } from "react-icons/bi";
import { SiApachecassandra, SiApachehive, SiFlutter, SiMysql, SiRubyonrails, SiSwift } from "react-icons/si";
import { TbBrandReactNative, TbBrandKotlin, TbBrandDjango, TbBrandJavascript, TbBrandNextjs, TbBrandPython } from "react-icons/tb";
import { DiDotnet, DiMeteorfull, DiRuby } from "react-icons/di";
import { FaJava, FaPhp } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { BsDatabaseFillGear } from "react-icons/bs";

const DatabasesOne = [
  { icon: <BsDatabaseFillGear size={40} />, teamName: "Azure SQL", },
  { img: null, teamName: "Google Cloud", icon: <BiLogoGoogleCloud size={40} /> },
  { img: "/images/expertise/technology/hbase.svg", teamName: "HBase" },
  { teamName: "Apache Cassandra", icon: <SiApachecassandra size={40} /> },
];

const DatabasesTwo = [
  { teamName: "Apache Hive", icon: <SiApachehive size={40} /> },
  { img: "/images/expertise/technology/nifi.svg", teamName: "Apache NiFi", },
  { teamName: "MySQL", icon: <SiMysql size={40} /> },
];

const FrontendStackOne = [
  { icon: <TbBrandReactNative size={40} />, teamName: "React Native" },
  { icon: <SiFlutter size={40} />, teamName: "Flutter" },
  { icon: <SiSwift size={40} />, teamName: "Swift" },
  { icon: <TbBrandKotlin size={40} />, teamName: "Kotlin" },
  { icon: <TbBrandDjango size={40} />, teamName: "Vue" },
];

const FrontendStackTwo = [
  { icon: <TbBrandNextjs size={55} />, teamName: "Next.js" },
  { icon: <DiMeteorfull size={60} />, teamName: "Meteor" },
  { icon: <TbBrandJavascript size={60} />, teamName: "JavaScript" },
];

const BackendOne = [
  { icon: <DiDotnet size={40} />, teamName: ".NET" },
  { icon: <FaJava size={40} />, teamName: "Java", },
  { icon: <FaPhp size={40} />, teamName: "PHP" },
  { icon: <BiLogoGoLang size={40} />, teamName: "Go", },
  { icon: <LiaNode size={40} />, teamName: "Node.js" },
];

const BackendTwo = [
  { icon: <TbBrandPython size={40} />, teamName: "Python" },
  { icon: <DiRuby size={40} />, teamName: "Ruby" },
  { icon: <SiRubyonrails size={40} />, teamName: "Rails" },
];


const Techstack = () => {
  const [tech1, setTech1] = useState(0);
  return (
    <>
      <section className="bg-black xl:block hidden" id="technology">
        <div className=" py-3 lg:py-10 space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl  text-[#ffffff] text-center ">
          <h2 className="py-2 lg:text-3xl text-2xl font-semibold  capitalize font-inter">Innovative Technologies That We Used</h2>
          <p className="lg:text-md text-base font-nunito">We use modern technologies to provide you with the latest and well-performing app.
          </p>
          <div className="items-start w-full pt-5 space-y-8  divide-y">
            <div className="flex flex-row xl:items-start items-center justify-start mx-auto w-full text-center" >
              <span
                onClick={() => setTech1(tech1 === 0 ? 0 : 0)}
                className={
                  tech1 === 0
                    ? "h-8 text-secondary lg:px-6 py-2 md:text-2xl text-xl font-bold capitalize cursor-pointer w-full"
                    : "bg-transparent text-white lg:px-6  py-2 md:text-2xl text-xl font-bold capitalize cursor-pointer w-full"
                }
              >
                <span data-aos="fade-right" data-aos-duration="15000">Mobile</span>
              </span>
              <span
                onClick={() => setTech1(tech1 === 1 ? 0 : 1)}
                className={
                  tech1 === 1
                    ? "h-8 text-secondary lg:px-6 py-2 md:text-2xl text-xl font-bold capitalize cursor-pointer w-full"
                    : "bg-transparent text-white lg:px-6 py-2 md:text-2xl text-xl font-bold capitalize cursor-pointer w-full"
                }
              >
                <span data-aos="fade-right" data-aos-duration="15000">Back-End</span>
              </span>
              <span
                onClick={() => setTech1(tech1 === 2 ? 0 : 2)}
                className={
                  tech1 === 2
                    ? "h-8 text-secondary lg:px-6 py-2 md:text-2xl text-xl font-bold capitalize cursor-pointer w-full"
                    : "bg-transparent text-white lg:px-6  py-2 md:text-2xl text-xl font-bold capitalize cursor-pointer w-full"
                }
              >
                <span data-aos="fade-right" data-aos-duration="15000">Front-End</span>
              </span> 
            </div>

            {tech1 === 0 ? (
              <>
                <div className="mx-auto w-11/12 text-center space-y-8">
                  <div className="flex justify-center items-center py-5">
                    <div className='xl:mx-auto 2xl:w-11/12 w-full space-y-20'>

                      <div className={`w-full grid xl:grid-cols-4 text-white lg:grid-cols-4 grid-cols-2 xl:gap-8 gap-12 justify-items-center pt-2`}>
                        {DatabasesOne.map((elem, index) => {
                          const { teamName, img, icon } = elem;
                          return (
                            <div key={index}>
                              <div className={`flex justify-center gap-8 items-center`}>
                                {icon && icon}
                                {img && <Image src={img} alt={teamName} title={teamName} width={65} height={60} />}
                              </div>
                              {teamName && <h3 className="font-bold mt-2 font-nunito text-base">{teamName}</h3>}
                            </div>
                          );
                        })}
                      </div>

                      <div className="xl:w-5/6 w-full mx-auto text-white">
                        <div className={`w-full grid lg:grid-cols-3 grid-cols-2 xl:gap-8 gap-12 justify-items-center`}>
                          {DatabasesTwo.map((elem, index) => {
                            const { teamName, img, icon } = elem;
                            return (
                              <div key={index}>
                                <div className={`flex justify-center items-center`}>
                                  {icon && icon}
                                  {img &&
                                    <Image src={img} alt={teamName} title={teamName} width={25} height={200} />}
                                </div>
                                {teamName && <h3 className="font-bold mt-2 text-center font-nunito text-base">{teamName}</h3>}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </>
            ) : null}

            {tech1 === 1 ? (
              <>
                <PartnersLogo type={0} title={undefined} titleOne={undefined} para={undefined} partnersOne={BackendOne} partnersTwo={BackendTwo} />

              </>
            ) : null}
            {tech1 === 2 ? (
              <>
                <PartnersLogo type={0} title={undefined} titleOne={undefined} para={undefined} partnersOne={FrontendStackOne} partnersTwo={FrontendStackTwo} />

              </>
            ) : null}
          </div>
        </div>

      </section>

      <TechnologyMobile />
    </>
  );
};
export default Techstack;