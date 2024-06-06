import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
// import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";
// import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaRegIdCard } from "react-icons/fa6";

function Footer() {
  const location = useLocation();
  const isLinkActive = (path) => {
    // Check if the current location pathname contains the specified path
    return location.pathname.includes(path);
  };
  return (
    <div className="w-full h-full flex items-center justify-center  flex-col">
      <div className="w-full flex-col md:flex-row flex items-start justify-between gap-5 flex-wrap h-[90%]  bg-mc-primary1 p-10">
        <div className="text-white flex flex-col gap-2">
          <span className="w-full my-2">
            <img
              src={"/atdwhiteLogo.svg"}
              width={100}
              alt="ATD logistics Logo"
              // height={200}
              className="md:w-[150px] lg:w-[200px]"
            />
          </span>
          <div className="text-white flex items-center gap-2">
            <FaPhoneAlt /> <span>±47 48669292</span>
          </div>
          <div className="text-white items-center flex gap-2">
            <FaRegIdCard /> <span>933 191 435</span>
          </div>
          <div className="text-white items-center flex gap-2">
            <FaLocationDot /> <span>Karl staaffs vei 82, 0665 Oslo</span>
          </div>
          <div className="text-white items-center flex gap-2">
            <IoMdMail /> <span>info@atdlogisticsintl.com</span>
          </div>
        </div>
        <div className="text-white flex flex-col gap-2">
          <Link to="">Home</Link>
          <Link
            to="about"
            className={`${isLinkActive("about") && "text-mc-primary2"}`}
          >
            About us
          </Link>
          <Link
            to="services"
            className={`${isLinkActive("services") && "text-mc-primary2"}`}
          >
            Our services
          </Link>
          <Link
            to="guides"
            className={`${isLinkActive("guides") && "text-mc-primary2"}`}
          >
            Guides
          </Link>
          <Link
            to="contact"
            className={`${isLinkActive("contact") && "text-mc-primary2"}`}
          >
            Contact
          </Link>
          <Link
            to="quotes"
            className={`${isLinkActive("quotes") && "text-mc-primary2"}`}
          >
            Get quotes
          </Link>
        </div>
        <div className="text-white flex flex-col gap-2">
          <Link
            to="#"
            // className={`${isLinkActive("about") && "text-mc-primary2"}`}
          >
            About us
          </Link>
          <Link
            to="#"
            // className={`${isLinkActive("about") && "text-mc-primary2"}`}
          >
            Our mission
          </Link>
          <Link
            to="#"
            // className={`${isLinkActive("services") && "text-mc-primary2"}`}
          >
            What sets us apart
          </Link>
        </div>
        <div className="text-white flex flex-col gap-2">
          <Link
            to="services"
            className={`${isLinkActive("services") && "text-mc-primary2"}`}
          >
            Services
          </Link>
          <span>Moving</span>
          <span>Relocation</span>
          <span>Storage</span>
        </div>
        <div className="text-white flex flex-col gap-2">
          {/* <span>Useful resources</span> */}
          <Link
            to="guides"
            className={`${isLinkActive("guide") && "text-mc-primary2"}`}
          >
            Guide
          </Link>
          <span>Privacy statement</span>
        </div>
        <div className="text-white flex flex-col gap-2">
          <span>Stay Connected</span>
          <div className="flex items-center gap-3">
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <SlSocialFacebook />
            </a> */}
            <a
              href="https://www.instagram.com/atdlogistics_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram />
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a> */}
            <a
              href="https://www.linkedin.com/company/atdlogistics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#D9D9D9] flex gap-3 p-2 text-[14px] w-full items-center justify-center text-gray-500">
        <span>All Right Reserved</span>
        <span>©</span>
        <span>ATD logistics</span>
      </div>
    </div>
  );
}

export default Footer;
