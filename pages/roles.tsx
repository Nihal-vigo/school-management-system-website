import React, { useEffect, useRef } from 'react'

const whyToChoose = [
  { icon: "📝", text: "Pre-Admission Enquiries and Admission Management" },
  { icon: "📚", text: "Manage Academics Including Syllabus, Time Table etc." },
  { icon: "👨‍🎓", text: "Students & Employee Data Management" },
  { icon: "👨‍👩‍👧‍👦", text: "Parent-Teacher Communication" },
  { icon: "💰", text: "Fee & Payroll Management" },
  { icon: "🧪", text: "Examinations & Assessments Online & Offline" },
  { icon: "🚍", text: "Library, Inventory & Transport Management" },
  { icon: "📄", text: "Results Generation & Report Cards" },
];
const Roles = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 10; // Adjust speed here
    const scrollDelay = 20; // Lower is faster

    const interval = setInterval(() => {
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        scrollAmount = 0;
        container.scrollLeft = 0; // Reset to start
      } else {
        scrollAmount += scrollStep;
        container.scrollLeft = scrollAmount;
      }
    }, scrollDelay);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center md:p-4 p-1">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-10 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-50 md:p-6">
          <img src="/logo/vigo-camp-logo.svg" alt="Vigo Logo" className="mb-4 h-10" />
          <h2 className="text-lg font-semibold mb-4 lg:text-left text-center">
            Why To Choose Vigo Camp - School ERP Software
          </h2>
          <ul
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide lg:block lg:space-x-0 lg:space-y-4"
          >
            {whyToChoose.map((item, index) => (
              <li
                key={index}
                className="flex-shrink-0 flex items-center space-x-3 min-w-max lg:bg-tranparent bg-white border p-1"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>

        </div>

        <div className="flex flex-col justify-center items-center px-6 py-12">
          <div className="w-full max-w-sm bg-white">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Enter Your Mobile Number
            </h3>
            <div className="flex border border-gray-300 rounded overflow-hidden mb-4">
              <span className="bg-gray-100 px-3 flex items-center">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                placeholder="Enter Mobile No."
                className="flex-1 px-3 py-2 focus:outline-none"
              />
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              SUBMIT
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Your phone number is kept confidential and not shared with others.
            </p>
          </div>
          <img
            src="/images/edu_f_bg.webp"
            alt="School"
            className="mt-8 max-w-xs "
          />
        </div>
      </div>
    </div>
  )
}

export default Roles