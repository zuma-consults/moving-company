import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "@formspree/react";
import { countries } from "./data";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";

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
    Transportation: transportation,
    Cleaning: cleaning,
    Flight: flight,
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

  // console.log(additionalService.Transportation);

  useEffect(() => {
    AOS.init();
  }, []);

  let [active, setActive] = useState(1);

  const clear = () => {
    setMovingFromCountry("");
    setMovingFromCity("");
    setMovingToCountry("");
    setMovingToCity("");
    setMovingDate("");
    setMovingItems("");
    setSalutation("");
    setFirstName("");
    setLastName("");
    setEmailAddress("");
    setAlternateEmailAddress("");
    setTransportation(false);
    setCleaning(false);
    setFlight(false);
    setTerms(false);
    setActive(1);
    toast("Message Successfully sent! we will speak with you soon");
  };

  const [state, handleSubmit] = useForm("xleqryka", {
    data: {
      subject: "New Quote Request",
      Country_From: movingFromCountry.toUpperCase(),
      City_From: movingFromCity.toUpperCase(),
      Country_To: movingToCountry.toUpperCase(),
      City_To: movingToCity.toUpperCase(),
      Date: movingDate,
      Items: movingItems.toUpperCase(),
      Transportation: additionalService.Transportation,
      Cleaning: additionalService.Cleaning,
      Flight: additionalService.Flight,
    },
  });

  // const handleFormSubmit = () => {
  //   // Assuming some form of validation is successful before submitting
  //   handleSubmit();

  //   if (state.succeeded) { 
  //     clear();
  //     console.log("Message sent successfully...");
  //     // Call clear function when the form is successfully submitted     
  //   }
  // };

  if (state.succeeded) {
    toast("Message Successfully sent! we will speak with you soon");
  }

  if (state.submitting) {
    return <Loader />;
  }

  if (state.errors) {
    // console.log(state.errors.formErrors[0].message);
    toast(`Error: ${state.errors.formErrors[0].message}`);
  }

  return (
    <main className="w-full">
      {/* navbar section */}
      <form onSubmit={handleSubmit}>
        {/*1st Get a Quote */}
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
                  name="Country Moving From"
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
                  name="City Moving From"
                />
              </div>

              <div className="flex flex-col md:gap-5 gap-5">
                <label className="text-xl">Moving to</label>
                <select
                  className="border rounded-[1rem] p-5"
                  onChange={handleToCountryChange}
                  value={movingToCountry}
                  name="Country Moving To"
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
                  name="City Moving To"
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
                name="Moving Date"
              />
              <input
                className="p-5 border rounded-[1rem] "
                type="text"
                placeholder="What are you moving?"
                onChange={(e) => setMovingItems(e.target.value)}
                value={movingItems}
                name="Moving Items"
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
        ) : null}

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
                  name="Title"
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
                  name="First Name"
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
                  name="Last Name"
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
                name="Email Address"
              />
              <input
                className="p-5 border rounded-[1rem]"
                value={alternateEmailAddress}
                onChange={(e) => setAlternateEmailAddress(e.target.value)}
                type="email"
                placeholder="Alternate Email Address"
                name="Alternate Email Address"
              />
            </div>
            <div className="flex items-center justify-center md:gap-10 gap-10 pb-10 md:px-20 px-5 mx-10 mt-5">
              <input
                className="p-5 w-10 h-5"
                type="checkbox"
                id="terms"
                onChange={(e) => setTerms(e.target.checked)}
                name="Agree Terms"
              />
              <label className="text-xl" for="terms">
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
                // onClick={handleFormSubmit}
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
        ) : (
          <div></div>
        )}
      </form>
    </main>
  );
}

export default Quotes;
