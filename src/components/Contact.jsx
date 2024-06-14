import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact({ contactImg, showTop, showBottom }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const formRef = useRef();

  const [checkboxes, setCheckboxes] = useState({
    moving: false,
    relocation: false,
    transportation: false,
    cleaningService: false,
    agentSupport: false,
    others: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const services = Object.keys(checkboxes)
      .filter((key) => checkboxes[key])
      .map((key) => key.charAt(0).toUpperCase() + key.slice(1));

    const emailData = {
      ...formData,
      services: services.join(", "),
      to_email: "admin@atdlogisticsintl.com", // Adding the recipient email address
    };

    emailjs
      .send(
        "service_2cq9w0o", // Your EmailJS service ID
        "template_a6focrn", // Your EmailJS template ID
        emailData,
        "lqjgQ8sq97WjNqJS2" // Your EmailJS user ID
      )
      .then(
        (result) => {
          toast("Message Successfully sent! We will speak with you soon");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setCheckboxes({
            moving: false,
            relocation: false,
            transportation: false,
            cleaningService: false,
            agentSupport: false,
            others: false,
          });
          setLoading(false);
        },
        (error) => {
          toast.error(`Error: ${error.text}`);
          setLoading(false);
        }
      );
  };

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      className="w-full flex items-center justify-center flex-col my-10 md:px-20 p-3"
    >
      <div className="w-full bg-white">
        <div className="w-full grid md:grid-cols-2">
          <div className="md:p-5 md:px-20 p-5 shadow-lg h-full flex items-center justify-center flex-col gap-3">
            <div className="flex items-center justify-center gap-10">
              <span className="bg-gray-600 p-[.5px] w-[40px]"></span>
              <div>
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
              ref={formRef}
              className="w-full grid gap-3 text-gray-600"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Input your Name"
                name="name"
                required
                className="bg-[#F5F5F5] w-full p-2"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                placeholder="Email"
                required
                id="email"
                name="email"
                className="bg-[#F5F5F5] w-full p-2"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                required
                placeholder="Phone Number"
                name="phone"
                className="bg-[#F5F5F5] w-full p-2"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <span>Services:</span>
              <div className="flex items-center gap-4 flex-wrap">
                <label>
                  <input
                    type="checkbox"
                    name="moving"
                    checked={checkboxes.moving}
                    onChange={() => handleCheckboxChange("moving")}
                    className="me-1"
                  />
                  Moving
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="relocation"
                    checked={checkboxes.relocation}
                    onChange={() => handleCheckboxChange("relocation")}
                    className="me-1"
                  />
                  Relocation
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="trasportation"
                    checked={checkboxes.transportation}
                    onChange={() => handleCheckboxChange("transportation")}
                    className="me-1"
                  />
                  Transportation
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={checkboxes.cleaningService}
                    name="cleaningService"
                    onChange={() => handleCheckboxChange("cleaningService")}
                    className="me-1"
                  />
                  Cleaning Service
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={checkboxes.agentSupport}
                    name="agentSupport"
                    onChange={() => handleCheckboxChange("agentSupport")}
                    className="me-1"
                  />
                  Agent Support
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={checkboxes.others}
                    name="others"
                    onChange={() => handleCheckboxChange("others")}
                    className="me-1"
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
                value={formData.message}
                onChange={handleInputChange}
              />
              <input
                type="submit"
                placeholder="Send"
                disabled={loading}
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
                backgroundColor: "#c8b096",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
