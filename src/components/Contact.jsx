import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "@formspree/react";
import Loader from "./Loader";

// eslint-disable-next-line react/prop-types, no-unused-vars
function Contact({ contactImg, showTop, showBottom }) {
  const [checkboxes, setCheckboxes] = useState({
    moving: false,
    relocation: false,
    transportation: false,
    cleaningService: false,
    agentSupport: false,
    others: false,
  });
  const [state, handleSubmit] = useForm("mpzvaekrc");

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

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      className=" w-full flex items-center justify-center flex-col my-10 md:px-20 p-3"
    >
      <div className="w-full bg-white">
        <div className="w-full grid md:grid-cols-2">
          {" "}
          <div className="md:p-5 md:px-20 p-5 shadow-lg h-full flex items-center justify-center flex-col gap-3">
            <div className="flex items-center justify-center gap-10">
              <span className="bg-gray-600 p-[.5px] w-[40px]"></span>
              <div>
                {" "}
                <h1 className="font-normal h-full md:text-[30px] text-[30px]">
                  Contact Us
                </h1>
                {showTop && <p className="text-gray-600">How can we help?</p>}
              </div>

              <span className="bg-gray-600 p-[.5px] w-[40px]"></span>
            </div>
            <p className="text-center text-[14px] text-gray-500 mb-2">
              Feel free to fill in the contact form below if it might be
              relevant to use any of our services, or if you have any questions.
              We do our best to give you an answer as soon as possible.
            </p>

            <form
              className="w-full grid gap-3 text-gray-600"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Input your Name"
                name="name"
                required
                className="bg-[#F5F5F5] w-full p-2"
              />
              <input
                type="email"
                placeholder="Email"
                required
                id="email"
                name="email"
                className="bg-[#F5F5F5] w-full p-2"
              />
              <input
                type="text"
                required
                placeholder="Phone Number"
                name="phone"
                className="bg-[#F5F5F5] w-full p-2"
              />
              <span>services:</span>
              <div className="flex items-center gap-4 flex-wrap">
                <label>
                  <input
                    type="checkbox"
                    name="moving"
                    checked={checkboxes.moving}
                    onChange={() => handleCheckboxChange("moving")}
                  />
                  Moving
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="relocation"
                    checked={checkboxes.relocation}
                    onChange={() => handleCheckboxChange("relocation")}
                  />
                  Relocation
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="trasportation"
                    checked={checkboxes.transportation}
                    onChange={() => handleCheckboxChange("transportation")}
                  />
                  Transportation
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={checkboxes.cleaningService}
                    name="cleaningService"
                    onChange={() => handleCheckboxChange("cleaningService")}
                  />
                  Cleaning Service
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={checkboxes.agentSupport}
                    name="agentSupport"
                    onChange={() => handleCheckboxChange("agentSupport")}
                  />
                  Agent Support
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={checkboxes.others}
                    name="others"
                    onChange={() => handleCheckboxChange("others")}
                  />
                  Others
                </label>
              </div>
              <textarea
                type="text"
                rows={5}
                id="message"
                name="message"
                required
                placeholder="Send Message"
                className="bg-[#F5F5F5] w-full p-2"
              />
              <input
                type="submit"
                placeholder="Send"
                disabled={state.submitting}
                className="bg-mc-primary1 text-white font-semibold w-full p-2"
              />
            </form>
            {showBottom && (
              <div>
                If you would like to get a moving quote,{" "}
                <Link to="/quotes" className="text-mc-primary1">
                  click here.
                </Link>
              </div>
            )}
          </div>
          <div
            className="hidden md:flex items-center justify-center w-full h-400px"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <img
              src={contactImg}
              alt="ATD logistics hero image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
