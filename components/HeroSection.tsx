import React from 'react';
import Button from "./Button";
import Popup from "./Popup";

const HeroSection = ({ title, titleOne, para, buttonCount, buttonNames, callToActionLine,para1 = "" }) => {
  return (
    <div className="space-y-3 text-left  w-full py-5 text-white">
      <h1 className="md:text-[42px] text-3xl font-bold md:leading-[3.5rem] capitalize font-inter text-white ">
        {title}
      </h1>
      <p><span className="text-lg"> {titleOne}</span></p>
      <p className="lg:text-md text-base font-medium  font-nunito lg:pr-16">
        {para}
      </p>
       <p className="lg:text-md text-base font-medium  font-nunito lg:pr-16">
        {para1}
      </p>
      {callToActionLine &&
        <p className=' text-base font-semibold'>{callToActionLine}</p>}
      <div className="sm:pt-10 pt-5 grid sm:grid-cols-2 w-1/2 xl:gap-24 sm:gap-36 gap-5  ">
        {buttonCount >= 1 && (
          <div className="w-1/2">
            <Popup
              url={"tel:8209514612"}
              name={buttonNames[0]}
              clipShapeBgColor={"secondary"} bgColor={'bg-secondary'} iconColor={'text-white'}
            />
          </div>
        )}
        {buttonCount === 2 && (
          <div className="w-1/2">
            <Button
              url={"tel:8209514612"}
              btnName={buttonNames[1]}
              onClickFunc={undefined}
              clipShapeBgColor={"secondary"} bgColor={'bg-secondary'}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
