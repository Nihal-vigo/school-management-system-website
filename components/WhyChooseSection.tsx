import React from "react";

const features = [
  {
    title: "Expert Instructors",
    description:
      "Learn from top industry professionals with real-world experience to help you master essential tools and techniques.",
    icon: "👨‍🏫",
  },
  {
    title: "Career-Boost Certify",
    description:
      "Get certified and open doors to new job opportunities with recognized credentials in the tech industry.",
    icon: "🎓",
  },
  {
    title: "Flexible Learning Schedules",
    description:
      "Learn at your own pace with on-demand courses that fit your busy schedule. Whether you're working or studying, you can access expert.io content anytime, anywhere.",
    icon: "📅",
    highlight: true, // Will span 2 rows on large screens
  },
  {
    title: "100+ High Impact Courses",
    description:
      "Access over 100 carefully curated courses covering development, data science, cybersecurity, and more — taught by professionals, with hands-on projects to boost your skills immediately.",
    icon: "📚",
  },
];

const WhyChooseSection = ({ featureMobileTitle, featureMobiledesc, title }) => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto font-nunito space-y-10">
      <h2 className="text-3xl font-bold text-primary">
        {title}
      </h2>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {features.map((feature, index) => {
          const isHighlight = feature.highlight;
          const isLast = feature.title === "100+ High Impact Courses";

          return (
            <div
              key={index}
              className={`bg-white border-2  rounded-xl p-6 shadow-sm text-gray-800  rounded-t-3xl rounded-b-3xl rounded-tr-none rounded-bl-none hover:rounded-t-3xl hover:rounded-b-3xl hover:rounded-br-none hover:rounded-tl-none  transition-all duration-500 ease-in-out hover:border-primary  ${isHighlight ? "lg:row-span-2" : ""
                } ${isLast
                  ? "lg:col-span-2 lg:block hidden" // visible only on lg
                  : ""
                }`}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-base">{feature.description}</p>
            </div>
          );
        })}

        {/* Mobile-only version of the last card */}

        <div className="bg-white border rounded-xl p-6 shadow-sm text-gray-800 lg:hidden  rounded-t-3xl rounded-b-3xl rounded-tr-none rounded-bl-none hover:rounded-t-3xl hover:rounded-b-3xl  hover:rounded-br-none hover:rounded-tl-none hover:border-primary  transition-all duration-500 ease-in-out ">
          <div className="text-3xl mb-4">📚</div>
          <h3 className="text-xl font-semibold mb-2">{featureMobileTitle}</h3>
          <p className="text-sm">
            {featureMobiledesc}

          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
