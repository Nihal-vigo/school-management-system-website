import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CallToActionNav = () => {
  const contactDetails = [
    {
      href: 'skype:live:.cid.422031ca71b9b254?chat',
      src: '/images/app-contact-img/skype.svg',
      alt: 'Skype',
      title: 'Skype',
      label: 'Skype ID',
      info: 'vigorousIt',
      width: 50,
      height: 100,
    },
    {
      href: 'mailto:contact@vigorousit.com',
      src: '/images/app-contact-img/mail.webp',
      alt: 'Mail',
      title: 'Mail',
      label: 'Email Us',
      info: 'contact@vigorousit.com',
      width: 50,
      height: 100,
    },
    {
      href: 'tel:+918209514612',
      src: '/images/app-contact-img/phone.svg',
      alt: 'Phone',
      title: 'Phone',
      label: 'India',
      info: '+91 8209514612',
      width: 48,
      height: 100,
    },
    {
      href: 'https://api.whatsapp.com/send?phone=918209514612',
      src: '/images/app-contact-img/whatsapp.svg',
      alt: 'WhatsApp',
      title: 'WhatsApp',
      label: 'WhatsApp',
      info: '+91 (958) 677 7575',
      width: 50,
      height: 100,
      target: '_blank',
    },
  ];

  return (
    <div className="bg-purple-100/50 rounded-xl flex items-center font-nunito xl:p-5 p-3 w-[97%] mx-auto">
      <div className="space-y-2 w-2/5">
        <h3 className="xl:text-2xl text-lg font-inter">Be Ready To Elevate Your Business!</h3>
        <p className="xl:text-base text-sm whitespace-normal">
          Try Premium Services Of Our Experts At Competitive Prices To Elevate Your Business!
        </p>
      </div>
      <div className="grid grid-cols-4 justify-items-center m-auto text-center xl:text-base text-sm w-3/5">
        {contactDetails.map(({ href, src, alt, title, label, info, width, height, target }, index) => (
          <Link key={index} href={href} target={target || '_self'} className="space-y-2" aria-label={label}>
            <Image width={width} height={height} className="m-auto" alt={alt} title={title} src={src} />
            <p>{label}</p>
            <span>{info}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CallToActionNav;
