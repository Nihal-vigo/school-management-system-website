import React, { useEffect } from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
export default function error() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title>404 Error - Page Not Found | Vigorous IT </title>
        <meta name="description" content="Oops! The page you are looking for cannot be found. Explore our site to learn more about Vigorous's innovative software solutions and services. Visit our homepage for more information." />
        <link rel="canonical" href="https://www.vigorousit.com/404" />
        <meta name="robots" content="noindex"/>
        <meta property="og:url" content="https://www.vigorousit.com/404" />
        <meta property="og:title" content="404 Error - Page Not Found | Vigorous It " />
        <meta property="og:site_name" content="Vigorous IT" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Oops! The page you are looking for cannot be found. Explore our site to learn more about Vigorous's innovative software solutions and services. Visit our homepage for more information." />
        <meta property="og:image" content="https://www.vigorousit.com/logo/vigorousit_logo.webp" />
       
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:domain" content="vigorousit.com" />
        <meta name="twitter:site" content="“@vigorousit" />
        <meta property="twitter:url" content="https://www.vigorousit.com/404" />
        <meta property="twitter:title" content="404 Error - Page Not Found | Vigorous IT" />
        <meta property="twitter:description" content="Oops! The page you are looking for cannot be found. Explore our site to learn more about Vigorous's innovative software solutions and services. Visit our homepage for more information." />
        <meta name="twitter:image" content="https://www.vigorousit.com/logo/vigorousit_logo.webp" />
      </Head>
      <Header />
      <section className="overflow-hidden global bg-gradient-to-tr bg-primary">
          <div className="w-11/12 max-w-7xl mx-auto 2xl:w-9/12 xl:w-5/6 pt-40 pb-20 ">
            <div className='w-full'>
              <div className='flex justify-center'>
                <Image alt="Data Not Found" title="Data Not Found" src="/images/banner-error.webp" width={632} height={395} loader={uploadcareLoader}
                  unoptimized={true} priority={false} loading="lazy" className='opacity-50' />
              </div>
            
                <div className='md:w-1/2 w-full space-y-5 text-center mx-auto '>
                  <h2 className="md:text-4xl text-2xl font-semibold text-white/90">
                    Something's Missing.
                  </h2>
                  <h3 className="lg:text-2xl text-lg font-bold text-white/90">
                    The Page you looking for is Not Found.
                  </h3>
                  <p className="lg:text-2xl text-lg font-bold text-white/90">
                    Go to the <Link passHref={true} href="/" className='text-secondary hover:underline'>Home Page.</Link>
                  </p>
               
              </div>
            </div>
          </div>
      </section>
    </>
  )
}
