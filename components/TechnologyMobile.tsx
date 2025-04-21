import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { BsDatabaseFillGear } from "react-icons/bs";
import { BiLogoGoLang, BiLogoGoogleCloud } from "react-icons/bi";
import { SiApachecassandra, SiApachehive, SiFlutter, SiMysql, SiRubyonrails, SiSwift } from "react-icons/si";
import { DiMeteorfull, DiDotnet, DiRuby } from "react-icons/di";
import { FaJava, FaPhp } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { TbBrandReactNative, TbBrandKotlin, TbBrandDjango, TbBrandNextjs, TbBrandJavascript, TbBrandPython } from "react-icons/tb";

const MobileStack = [
  { icon: <BsDatabaseFillGear size={60} />, alt: 'Azure SQL', teamName: "Azure SQL", },
  { alt: 'Google Cloud', teamName: "Google Cloud", icon: <BiLogoGoogleCloud size={60} /> },
  { img: "/images/expertise/technology/hbase.svg", alt: 'HBase', teamName: "HBase", },
  { alt: 'Apache Cassandra', teamName: "Apache Cassandra", icon: <SiApachecassandra size={60} /> },
  { alt: 'Apache Hive', teamName: "Apache Hive", icon: <SiApachehive size={60} /> },
  { img: "/images/expertise/technology/nifi.svg", alt: 'Apache NiFi', teamName: "Apache NiFi", },
  { alt: 'MySQL', teamName: "MySQL", icon: <SiMysql size={60} /> },
];
const FrontendStack = [
  { icon: <TbBrandReactNative size={60} />, alt: 'React Native', teamName: "React Native", },
  { icon: <SiFlutter size={60} />, alt: 'Flutter', teamName: "Flutter", },
  { icon: <SiSwift size={60} />, alt: 'Swift', teamName: "Swift", },
  { icon: <TbBrandKotlin size={60} />, alt: 'Kotlin', teamName: "Kotlin", },
  { icon: <TbBrandDjango size={60} />, alt: 'Vue', teamName: "Vue", },
  { icon: <TbBrandNextjs size={60} />, alt: 'Next.js', teamName: "Next.js", },
  { icon: <DiMeteorfull size={60} />, alt: 'Meteor', teamName: "Meteor", },
  { icon: <TbBrandJavascript size={60} />, alt: 'JavaScript', teamName: "JavaScript", },
];
const BackendStack = [
  { icon: <DiDotnet size={60} />, alt: '.NET', teamName: ".NET", },
  { icon: <FaJava size={60} />, teamName: "Java", alt: "Java" },
  { icon: <FaPhp size={60} />, alt: 'PHP', teamName: "PHP", },
  { icon: <BiLogoGoLang size={60} />, alt: 'Go', teamName: "Go", },
  { icon: <LiaNode size={60} />, teamName: "Node.js", alt: "Node.js" },
  { icon: <TbBrandPython size={60} />, teamName: "Python", alt: "Python" },
  { icon: <DiRuby size={60} />, alt: 'Ruby', teamName: "Ruby", },
  { icon: <SiRubyonrails size={60} />, alt: 'Rails', teamName: "Rails", },
];
const TechnologyMobile = () => {
  const [tech1, setTech1] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const mobileRef = useRef(null);
  const frontEndRef = useRef(null);
  const backEndRef = useRef(null);

  useEffect(() => {
    if (isMounted) {
      if (tech1 === 0 && mobileRef.current) {
        mobileRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else if (tech1 === 1 && frontEndRef.current) {
        frontEndRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else if (tech1 === 2 && backEndRef.current) {
        backEndRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    } else {
      setIsMounted(true);
    }
  }, [tech1]);
  return (
    <section className="bg-black xl:hidden block">
      <div className=" py-5 lg:py-10 space-y-2 text-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 max-w-7xl">
        <h2 className="py-4 text-white lg:text-3xl text-2xl  font-bold capitalize">Our Technology Stack Domination</h2>
        <div className="items-center w-full space-y-12">
          <div className="flex flex-row items-center justify-start mx-auto md:w-1/2 w-full text-center space-x-4 pt-2  overflow-y-auto slidenone whitespace-nowrap">
            <span
              ref={mobileRef}
              onClick={() => setTech1(tech1 === 0 ? 0 : 0)}
              className={
                tech1 === 0
                  ? "text-secondary border-b-2 border-b-white md:text-2xl text-xl font-bold capitalize cursor-pointer w-full"
                  : "bg-transparent  text-white md:text-2xl text-xl font-bold capitalize cursor-pointer w-full"
              }
            >
              <span data-aos="fade-right" data-aos-duration="15000" className="text-md">Mobile</span>
            </span>
            <span
              ref={frontEndRef}
              onClick={() => setTech1(tech1 === 1 ? 0 : 1)}
              className={
                tech1 === 1
                  ? "text-secondary border-b-2 border-b-white md:text-2xl text-xl font-bold capitalize cursor-pointer w-full"
                  : "bg-transparent  text-white md:text-2xl text-xl font-bold capitalize cursor-pointer w-full"
              }
            >
              <span data-aos="fade-right" data-aos-duration="15000" className="text-md">Front-End</span>
            </span>
            <span
              ref={backEndRef}
              onClick={() => setTech1(tech1 === 2 ? 0 : 2)}
              className={
                tech1 === 2
                  ? "text-secondary border-b-2 border-b-white  md:text-2xl text-xl font-bold capitalize cursor-pointer w-full"
                  : "bg-transparent  text-white md:text-2xl text-xl font-bold capitalize cursor-pointer w-full"
              }
            >
              <span data-aos="fade-right" data-aos-duration="15000" className="text-md">Back-End</span>
            </span>
          </div>
          <div className="text-center overflow-x-auto flex justify-start items-start divide-x-1 slidenone1 px-2 gap-16 relative capitalize w-full">
            {tech1 === 0 ? (
              <>
                {MobileStack.map((elem: any, index) => {
                  const { img, icon,alt } = elem;
                  return (
                    <div key={index} className="flex flex-col items-center justify-center pb-10 space-y-2 text-center" data-aos="fade-top" data-aos-duration="1000">
                      <div className="flex items-center justify-center w-16 h-16 text-white">
                        {icon && icon}
                        {img && <Image src={img} alt={alt} title={alt} width={50} height={50} className="transition-all duration-200 transform group-hover:scale-105" loader={uploadcareLoader} unoptimized={true} />}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}

            {tech1 === 1 ? (
              <>
                {FrontendStack.map((elem: any, index) => {
                  const { img, alt, icon } = elem;
                  return (
                    <div key={index} className="flex flex-col items-center justify-center pb-10 space-y-2 text-center" data-aos="fade-top" data-aos-duration="1000">
                      <div className="flex items-center justify-center w-16 h-16 text-white">
                        {icon && icon}
                        {img && <Image src={img} alt={alt} title={alt} width={50} height={50} className="transition-all duration-200 transform group-hover:scale-105" loader={uploadcareLoader} unoptimized={true} />}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}
            {tech1 === 2 ? (
              <>
                {BackendStack.map((elem: any, index) => {
                  const { img, alt, icon } = elem;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center pb-10 space-y-2 text-center" data-aos="fade-top" data-aos-duration="1000">
                      <div className="flex items-center justify-center w-16 h-16 text-white">
                        {icon && icon}
                        {img && <Image src={img} title={alt} alt={alt} width={50} height={50} className="transition-all duration-200 transform group-hover:scale-105" loader={uploadcareLoader} unoptimized={true} />}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TechnologyMobile;


