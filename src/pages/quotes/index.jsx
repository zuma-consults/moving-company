import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "@formspree/react";
import { countries } from "./data";
import Loader from "../../components/Loader";

function Quotes() {
  const [movingFromCountry, setMovingFromCountry] = useState("");
  const [movingFromCity, setMovingFromCity] = useState("");
  const [movingToCountry, setMovingToCountry] = useState("");
  const [movingToCity, setMovingToCity] = useState("");
  const [movingDate, setMovingDate] = useState("");
  const [movingItems, setMovingItems] = useState("");
  const [transportation, setTransportation] = useState(false);
  const [cleaning, setCleaning] = useState(false);
  const [flight, setFlight] = useState(false);
  const [salutation, setSalutation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [alternateEmailAddress, setAlternateEmailAddress] = useState("");
  const [terms, setTerms] = useState(false);

  const handleFromCountryChange = (event) => {
    event.preventDefault();
    const selectedValue = event.target.value;
    setMovingFromCountry(selectedValue);
  };

  const handleToCountryChange = (event) => {
    event.preventDefault();
    const selectedValue = event.target.value;
    setMovingToCountry(selectedValue);
  };

  const additionalService = {
    "Transportation ": transportation,
    "Cleaning ": cleaning,
    "Flight ": flight,
  };

  const data = {
    movingFromCountry,
    movingFromCity,
    movingToCountry,
    movingToCity,
    movingDate,
    movingItems,
    salutation,
    firstName,
    lastName,
    emailAddress,
    alternateEmailAddress,
    terms,
    additionalService,
  };

  useEffect(() => {
    AOS.init();
  }, []);
  let [active, setActive] = useState(1);

  const [state, handleSubmit] = useForm("mnqeakwv");

  if (state.succeeded) {
    toast.error("Message Successfully sent! we will speak with you soon");
  }

  if (state.submitting) {
    return <Loader />;
  }

  if (state.errors) {
    console.log(state.errors.formErrors[0].message);
    toast(`Error: ${state.errors.formErrors[0].message}`);
  }

  return (
    <main className="w-full">
      {/* navbar section */}
      {/*1st Get a Quote */}
      <form onSubmit={handleSubmit}>
        {active === 1 ? (
          <div
            className="bg-whitesmoke mt-[100px]"
            data-aos="slide-up"
            data-aos-duration="1500"
            data-aos-easing="ease-out"
          >
            {/* header section */}
            <div className="md:px-20 md:my-10 px-5">
              <h1 className="font-normal md:text-[42px] text-[30px]">
                Get a Quote
              </h1>
              <p className="md:text-[24px] text-[14px] text-#27272B">
                Please fill the enquiry form, it only takes a couple of minutes.
              </p>
            </div>
            {/* form section*/}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10 pb-5 md:px-20 px-5 mx-10 mt-5">
              <div className="flex flex-col md:gap-5 gap-2">
                <label className="text-xl">Moving from</label>
                <select
                  className="border rounded-[1rem] p-5"
                  onChange={handleFromCountryChange}
                  value={movingFromCountry}
                  name="movingFromCountry"
                >
                  <option>Select a country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <input
                  className="p-5 border  rounded-[1rem]"
                  type="text"
                  placeholder="Enter a city..."
                  onChange={(e) => setMovingFromCity(e.target.value)}
                  value={movingFromCity}
                  name="movingFromCity"
                />
              </div>

              <div className="flex flex-col md:gap-5 gap-5">
                <label className="text-xl">Moving to</label>
                <select
                  className="border rounded-[1rem] p-5"
                  onChange={handleToCountryChange}
                  value={movingToCountry}
                  name="movingToCountry"
                >
                  <option>Select a country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <input
                  className="p-5 border  rounded-[1rem] "
                  type="text"
                  placeholder="Enter a city..."
                  onChange={(e) => setMovingToCity(e.target.value)}
                  value={movingToCity}
                  name="movingToCity"
                />
              </div>

              <label className="text-xl md:-mt-10">Moving date</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10 pb-10 md:px-20 px-5 mx-10 -mt-5">
              <input
                type="date"
                value={movingDate}
                onChange={(e) => setMovingDate(e.target.value)}
                className="p-5 border rounded-[1rem] "
                name="movingDate"
              />
              <input
                className="p-5 border rounded-[1rem] "
                type="text"
                placeholder="What are you moving?"
                onChange={(e) => setMovingItems(e.target.value)}
                value={movingItems}
                name="movingItems"
              />
            </div>
            {/* button section */}
            <div
              className="flex items-center justify-end"
              onClick={() => setActive(2)}
            >
              <p
                className="w-fit flex items-center md:text-#66676A p-5 rounded md:mx-28 mb-10 cursor-pointer
             hover:text-white hover:bg-black bg-mc-#1c58d8 md:bg-inherit md:text-black text-white mx-14"
              >
                Next
                <span className="ms-3">
                  <FaArrowRight className="font-[100]" />
                </span>
              </p>
            </div>
            {/* active number section */}
            <div className="flex items-center justify-center gap-10 mb-10">
              <p className="text-mc-#27272B text-[28px] cursor-pointer"> 01 </p>
              <p className="text-mc-#898989 text-[28px] cursor-pointer"> 02 </p>
              <p className="text-mc-#898989 text-[28px] cursor-pointer"> 03 </p>
            </div>
          </div>
        ) : null}

        {/*2nd Get a Quote */}
        {active === 2 ? (
          <div className="bg-whitesmoke mt-[100px]">
            {/* header section */}
            <div className="md:px-20 md:my-10 px-5">
              <h1 className="font-normal md:text-[42px] text-[30px]">
                Select additional services
              </h1>
              <p className="md:text-[24px] text-[14px] text-#27272B">
                Please fill the enquiry form, it only takes a couple of minutes
              </p>
            </div>
            {/* form section*/}
            <div className="flex md:gap-20 gap-10 pb-10 md:px-14 px-5 mx-10 mt-5">
              <input
                className="md:p-5 w-10 h-5 md:ms-2"
                type="checkbox"
                id="Transportation"
                onChange={(e) => setTransportation(e.target.checked)}
                name="Transportation"
              />
              <label className="-ms-3" htmlFor="Transportation">
                <h3 className="text-mc-#1C58D7 md:text-[36px] md:mb-3 text-[20px] -mt-3">
                  Transportation & Storage
                </h3>
                <p className="md:text-[23px] text-[16px]">
                  We promise secure global delivery and storage solutions for
                  your belongings, ensuring reliability and safety at every
                  step.
                </p>
              </label>
            </div>

            <div className="flex md:gap-20 gap-10 pb-10 md:px-[4rem] px-5 mx-10 mt-5">
              <input
                className="md:p-5 w-10 h-5"
                type="checkbox"
                id="Cleaning"
                onChange={(e) => setCleaning(e.target.checked)}
                name="Cleaning"
              />
              <label htmlFor="Cleaning">
                <h3 className="text-mc-#1C58D7 md:text-[36px] md:mb-3 text-[20px]  -mt-3">
                  Cleaning Service
                </h3>
                <p className="md:text-[23px] text-[16px]">
                  Our professional cleaning ensures top-notch cleanliness for
                  your international space, guaranteeing a fresh, welcoming
                  environment at your destination.
                </p>
              </label>
            </div>

            <div className="flex  md:gap-20 gap-10 pb-10 md:px-[4rem] px-5 mx-10 mt-5">
              <input
                className="p-5 w-10 h-5"
                type="checkbox"
                id="flight"
                name="flight"
                onChange={(e) => setFlight(e.target.checked)}
              />
              <label htmlFor="flight">
                <h3 className="text-mc-#1C58D7 md:text-[36px] md:mb-3 text-[20px] -mt-3">
                  Air flight Services
                </h3>
                <p className="md:text-[23px] text-[16px]">
                  Our air travel services prioritize efficiency and reliability,
                  ensuring prompt and secure transportation for urgent or
                  long-distance international moves.
                </p>
              </label>
            </div>
            {/* button section */}
            <div className="flex items-center justify-between">
              <p
                className="w-fit flex items-center text-#66676A p-5 rounded md:mx-28 mb-10
                            cursor-pointer hover:text-white hover:bg-black bg-mc-#1c58d8 md:bg-inherit md:text-black text-white mx-14"
                onClick={() => setActive(1)}
              >
                <span className="me-3">
                  <FaArrowLeft className="font-[100]" />
                </span>
                Back
              </p>
              <p
                className="w-fit flex items-center text-#66676A p-5 rounded md:mx-28 mb-10 
              cursor-pointer hover:text-white hover:bg-black bg-mc-#1c58d8 md:bg-inherit md:text-black text-white mx-14"
                onClick={() => setActive(3)}
              >
                Next
                <span className="ms-3">
                  <FaArrowRight className="font-[100]" />
                </span>
              </p>
            </div>
            {/* active number section */}
            <div className="flex items-center justify-center gap-10 mb-10">
              <p className="text-mc-#898989 text-[28px] cursor-pointer"> 01 </p>
              <p className="text-mc-#27272B text-[28px] cursor-pointer"> 02 </p>
              <p className="text-mc-#898989 text-[28px] cursor-pointer"> 03 </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {/*3rd Get a Quote */}
        {active === 3 ? (
          <div className="bg-whitesmoke mt-[100px]">
            {/* header section */}
            <div className="md:px-20 md:my-10 px-5">
              <h1 className="font-normal md:text-[42px] text-[30px]">
                Provide your details
              </h1>
              <p className="md:text-[24px] text-[14px] text-#27272B">
                Let’s get in touch with you
              </p>
            </div>
            {/* form section*/}
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-10 pb-10 md:px-20 px-5 mx-10 mt-5">
              <div className="flex flex-col md:gap-8 gap-5">
                <label className="text-xl" htmlFor="title">
                  Title
                </label>
                <select
                  className="p-5 border rounded-[1rem]"
                  onChange={(e) => setSalutation(e.target.value)}
                  value={salutation}
                  name="salutation"
                >
                  <option>Your Title</option>
                  <option>Mr</option>
                  <option>Mrs</option>
                  <option>Miss</option>
                  <option>Mal</option>
                  <option>Master</option>
                  <option>Dr</option>
                  <option>Prof</option>
                </select>
              </div>

              <div className="flex flex-col md:gap-8 gap-5">
                <label className="text-xl" htmlFor="firstName">
                  First Name
                </label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="p-5 border rounded-[1rem]"
                  type="text"
                  placeholder="Your First Name"
                  name="firstName"
                />
              </div>

              <div className="flex flex-col md:gap-8 gap-5">
                <label className="text-xl" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="p-5 border rounded-[1rem]"
                  type="text"
                  placeholder="Your Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  name="lastName"
                />
              </div>
              <label className="text-xl md:-mt-10">Email</label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10 pb-10 md:px-20 px-5 mx-10 -mt-5">
              <input
                className="p-5 border rounded-[1rem]"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                type="email"
                placeholder="Your Email Address"
                name="emailAddress"
              />
              <input
                className="p-5 border rounded-[1rem]"
                value={alternateEmailAddress}
                onChange={(e) => setAlternateEmailAddress(e.target.value)}
                type="email"
                placeholder="Alternate Email Address"
                name="alternateEmailAddress"
              />
            </div>
            <div className="flex items-center justify-center md:gap-10 gap-10 pb-10 md:px-20 px-5 mx-10 mt-5">
              <input
                className="p-5 w-10 h-5"
                type="checkbox"
                id="terms"
                onChange={(e) => setTerms(e.target.checked)}
                name="terms"
              />
              <label className="text-xl" htmlFor="terms">
                By submitting this form, I consent to receive further
                communication regarding the estimate I have requested and I
                agree to the storing and processing of my personal details by
                ATD as described in the privacy statement
              </label>
            </div>
            {/* button section */}
            <div className="flex items-center justify-between">
              <p
                className="w-fit flex items-center text-#66676A p-5 rounded md:mx-28
               mb-10 cursor-pointer hover:text-white hover:bg-black bg-mc-#1c58d8 
               md:bg-inherit md:text-black text-white mx-14"
                onClick={() => setActive(2)}
              >
                <span className="me-3">
                  <FaArrowLeft className="font-[100]" />
                </span>
                Back
              </p>
              <button
                type="submit"
                className={`w-fit flex items-center text-#66676A p-5 rounded md:mx-28 mb-10 
             ${!terms ? "cursor-not-allowed" : "cursor-pointer"}
             hover:text-white hover:bg-black 
             ${
               !terms ? "bg-gray-300 text-gray-500" : "bg-mc-#1c58d8 text-white"
             }
             md:bg-white md:text-black text-white mx-14`}
                disabled={!terms}
              
              >
                Submit
                <span className="ms-3">
                  <FaArrowRight className="font-[100]" />
                </span>
              </button>
            </div>
            {/* active number section */}
            <div className="flex items-center justify-center gap-10 mb-10">
              <p className="text-mc-#898989 text-[28px] cursor-pointer"> 01 </p>
              <p className="text-mc-#898989 text-[28px] cursor-pointer"> 02 </p>
              <p className="text-mc-#27272B text-[28px] cursor-pointer"> 03 </p>
            </div>
          </div>
        ) : null}
      </form>
    </main>
  );
}

export default Quotes;
