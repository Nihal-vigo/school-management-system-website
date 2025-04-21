import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import countryCodeData from "../pages/country_code.json";

const MobileBannerForm = () => {
  const [formdata, setFormData] = useState({
    from: "VigorousIT",
    fname: "",
    email: "",
    lname: "",
    contact: "",
    country: "",
    message: "",
    service: "",
    budget: "",
    companyName: "",
  });

  const [validate, setValidate] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedOption, setSelectedOption] = useState("");
  const [Selectedbudget, setSelectedbudget] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'country') {
      setSelectedCountry(value);
    }

    if (name === 'service') {
      setSelectedOption(value);
    }
    if (name === "budget") {
      setSelectedbudget(value);
    }

    if (name === "email") {
      if (!value) {
        setEmailError("Email is required.");
      }
      else if (!value.includes("@")) {
        setEmailError("Email should contain an '@' symbol.");
      }
      else if (value.indexOf("@") === 0) {
        setEmailError("Email should have characters before '@'.");
      }
      else if (!value.includes(".", value.indexOf("@"))) {
        setEmailError("Email should contain a domain (e.g., gmail.com).");
      }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setEmailError("Email should have a valid format (e.g., user@example.com).");
      }
      else {
        setEmailError("");
      }
    }
    setFormData({ ...formdata, [name]: value });
  };


  const submitHandle = async (e) => {
    e.preventDefault();

    if (formdata.fname && formdata.contact && formdata.email) {
      setValidate(true);
      setLoading(true);

      const name = (formdata.fname + " " + formdata.lname).trim();
      const user = { ...formdata, name, };
      const { fname, lname, ...finalData } = user;
      const req = await axios.post("https://vigorousit-email.vercel.app/enquiry", finalData);
      const res = req.data.success;
      if (res) {
        setLoading(false);
        router.push("/thankyoupage");
      }
    } else {
      setValidate(false);
    }
  };


  const selectTypes = [
    { value: "", label: "What are You Looking For?" },
    // { value: "Sports betting/Fantasy app", label: "Sports betting/Fantasy app" },
    { value: "Game development", label: "Game development" },
    { value: "Game/Sports API", label: "Game/Sports API" },
    { value: "Others", label: "Others" },
  ];

  const selectBudget = [
    { value: "", label: "Select Your Budget" },
    { value: "$10k - $25k", label: "$10k - $25k" },
    { value: "$25k - $50k", label: "$25k - $50k" },
    { value: "$50k - $100k", label: "$50k - $100k" },
    { value: "More than $100k", label: "More than $100k" },
  ];


  return (
    <section>
      <form
        className="space-y-4 text-left rounded-lg w-[16.65rem] mx-auto pt-[8px] px-[15px] bg-white font-nunito"
        onSubmit={submitHandle} >
        <div className="relative z-0 group">
          <input
            type="text"
            name="fname"
            id="fname"
            className="block py-2.5 px-0 w-full text-[11.5px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder="Full Name*"
            onChange={handleChange}
            required
          />
          {!validate && !formdata.fname && (
            <span className="text-red-500 text-[10px]">Full Name is required</span>
          )}
        </div>
        <div className="relative z-0 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-[11.5px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder="Email*"
            onChange={handleChange}
            required
          />
          {emailError && (
            <div className="invalid-feedback text-red-500 text-xs font-light px-1">
              {emailError}
            </div>
          )}
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full">
            <select
              name="country"
              aria-label="country"
              className={`block py-2.5 px-0 w-full text-[11.5px] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer ${(selectedCountry && selectedCountry !== "") ? "text-black" : "text-gray-500"}`}
              required
              value={selectedCountry}
              onChange={handleChange}
            >
              <option value="">Select Your Country*</option>
              {countryCodeData.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="relative z-0 w-full group">
            <input
              type="number"
              name="contact"
              disabled={!selectedCountry}
              id="number"
              className="block py-2.5 px-0 w-full text-[11.5px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder="Phone Number*"
              onChange={handleChange}
              required
            />
            {!validate && !formdata.contact && (
              <span className="text-red-500 text-[10px]">Phone Number is required</span>
            )}
          </div>
        </div>


        <div className="relative z-0 group">
          <input
            type="text"
            name="companyName"
            id="companyName"
            className="block py-2.5 px-0 w-full text-[11.5px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder="Company Name"
            onChange={handleChange}
          />
        </div>

        <div className="relative z-0 group">
          <div className="sm:flex gap-4">
            <div className="w-full">
              <select
                aria-label="choice"
                name="service"
                id="choiceForm-two"
                className={`block py-2.5 px-0 w-full text-[11.5px]  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer ${(selectedOption && selectedOption !== "") ? "text-black" : "text-gray-500"}`}
                onChange={handleChange}
              >
                {selectTypes.map((option, index) => (
                  <option key={index} value={option.value} className="block py-2.5 px-0 w-full text-[11.5px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <select
                name="budget"
                onChange={handleChange}
                aria-label="Select Your Budget"
                className={`block py-2.5 px-0 w-full text-[11.5px]  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer ${(Selectedbudget && Selectedbudget !== "disabled selected") ? "text-black" : "text-gray-500"}`}
              >
                {selectBudget.map((option, index) => (
                  <option key={index} value={option.value} className="block py-2.5 px-0 w-full text-[11.5px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" >
                    {option.label}
                  </option>))}
              </select>
            </div>
          </div>
        </div>

        <div className="relative z-0 group">
          <input
            type="text"
            name="message"
            id="message"
            className="block py-2.5 px-0 w-full text-[11.5px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder="Your Message"
            onChange={handleChange}
          />
        </div>

        <div className="w-full flex justify-end">
          <button
            id="submit"
            aria-label="submit"
            type="submit"
            onSubmit={submitHandle}
            className="text-white bg-secondary hover:text-secondary hover:bg-white focus:ring-4 focus:ring-blue-300 rounded-lg text-[12px]  w-full sm:w-auto px-5 py-2.5 text-center border border-transparent hover:border-secondary"
          >
            {loading ? (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-2 text-primary animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08157 50.5908C9.08157 74.3807 26.2101 91.5092 50 91.5092C73.7899 91.5092 90.9184 74.3807 90.9184 50.5908C90.9184 26.8009 73.7899 9.67236 50 9.67236C26.2101 9.67236 9.08157 26.8009 9.08157 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5538C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8462 15.1192 80.8826 10.7236 75.2124 7.41289C69.5422 4.10217 63.2754 1.94025 56.7221 1.05182C51.7661 0.367404 46.7343 0.446843 41.823 1.27873C39.3193 1.69328 37.8479 4.19778 38.485 6.62326C39.1221 9.04874 41.6053 10.4717 44.1201 10.1071C47.924 9.51908 51.8293 9.51457 55.6493 10.0962C60.8782 10.9001 65.8922 12.7935 70.3034 15.6492C74.7146 18.5048 78.4293 22.2521 81.2139 26.639C83.4892 30.1023 85.2136 33.9036 86.324 37.9164C87.0836 40.2742 89.5423 41.6781 91.9676 41.0409Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default MobileBannerForm;
