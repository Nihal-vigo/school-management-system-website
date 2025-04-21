import { useState } from 'react';
import { BiSolidBank } from "react-icons/bi";
import { FaShoppingCart } from 'react-icons/fa';
import { FaDumbbell, FaHeartCirclePlus, FaTruck } from 'react-icons/fa6';
import { GiDramaMasks } from 'react-icons/gi';
import { IoIosPeople, IoLogoGameControllerB } from 'react-icons/io';
import { IoFastFoodSharp, IoSchool } from 'react-icons/io5';
import { MdSportsVolleyball, MdTravelExplore } from 'react-icons/md';

const SwipeCardsIndustries = () => {
  const data = [
    { title: "Banking", icon: <BiSolidBank size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Banking" },
    { title: "Healthcare", icon: <FaHeartCirclePlus size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Healthcare" },
    { title: "Lifestyle", icon: <FaDumbbell size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Lifestyle" },
    { title: "Sports", icon: <MdSportsVolleyball size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Sports" },
    { title: "Food & Restaurants", icon: <IoFastFoodSharp size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Food & Restaurants" },
    { title: "Travel", icon: <MdTravelExplore size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Travel" },
    { title: "Social", icon: <IoIosPeople size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Social" },
    { title: "Education", icon: <IoSchool size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Education" },
    { title: "eCommerce", icon: <FaShoppingCart size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "eCommerce" },
    { title: "Entertainment", icon: <GiDramaMasks size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Entertainment" },
    { title: "Game", icon: <IoLogoGameControllerB size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Game" },
    { title: "Transportation", icon: <FaTruck size={60} className='bg-primary text-white rounded-full px-4 py-3 ' />, industryName: "Transportation" },
  ];

  const [currentIndex, setCurrentIndex] = useState(data.length - 1); // Start with the last card
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [message, setMessage] = useState(''); // To store messages

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      if (currentIndex < data.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setMessage('');
      } else {
        setMessage('No more content. Swipe right to see more.');
      }
    } else if (direction === 'right') {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
        setMessage('');
      } else {
        setMessage('No more content. Swipe left to see more.');
      }
    }
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    const diff = touchX - startX;

    if (diff > 100) {
      handleSwipe('left');
      setStartX(touchX);
    } else if (diff < -100) {
      handleSwipe('right');
      setStartX(touchX);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const diff = e.clientX - startX;

    if (diff > 100) {
      handleSwipe('left');
      setIsDragging(false);
    } else if (diff < -100) {
      handleSwipe('right');
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div
        className="relative w-[400px] h-[210px] overflow-hidden flex justify-center items-center mx-auto "
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
        style={{ touchAction: 'none' }}
      >
        {data.map((card, index) => (
          <div
            key={index}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            className={`absolute w-52 h-52 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center text-xl transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? 'transform scale-100 translate-x-0 z-50 opacity-100' // Center card
                : index === currentIndex + 1
                ? 'transform scale-75 translate-x-[-120px] z-30 opacity-60 ease-in-out' // Card to the right
                : index === currentIndex - 1
                ? 'transform scale-75 translate-x-[120px] z-30 opacity-60' // Card to the left
                : index > currentIndex + 1
                ? 'transform scale-75 translate-x-[-180px] z-10 opacity-0' // Hidden far right
                : 'transform scale-75 translate-x-[180px] z-10 opacity-0' // Hidden far left
            }`}
          >
            {card.icon}
            <p className="mt-4 text-lg font-semibold">{card.title}</p>
          </div>
        ))}
      </div>

      {message && (
        <p className="mt-4 text-center text-white/80 animate-pulse text-sm">
          {message}
        </p>
      )}
    </>
  );
};

export default SwipeCardsIndustries;
