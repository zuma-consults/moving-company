import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SideMenu from "./SideMenu";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [showMenu, setShowMenu] = useState(false);
  const [showTranslateDropdown, setShowTranslateDropdown] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    // console.log("handleMenuToggle");
    setShowMenu(!showMenu);
  };

  const isLinkActive = (path) => {
    return location.pathname.includes(path);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
    window.googleTranslateElementInit = googleTranslateElementInit;

    script.onload = () => {
      // Now that the script is loaded, initialize the translation element
      if (window.googleTranslateElementInit) {
        window.googleTranslateElementInit();
      }
    };

    // Cleanup the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, [location]);

  const handleTranslateDropdownToggle = () => {
    setShowTranslateDropdown(!showTranslateDropdown);
  };

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );

    // Apply custom styles to the Google Translate dropdown
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `
      .goog-te-combo {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        padding: 6px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
      }
    `;
    document.head.appendChild(style);
    handleTranslateDropdownToggle();
  };

  return (
    <div className="w-full h-[100px] flex items-center shadow justify-center z-50 fixed top-0 right-0 left-0 bg-white md:px-20 px-5">
      <div className="flex items-center justify-between w-full">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="logo w-fit"
        >
          <Link to="/">
            <img
              src={"/atd-logo.svg"}
              width={200}
              alt="ATD logistics Logo"
              height={200}
            />
          </Link>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="w-[80%]"
        >
          <ul className="flex items-center justify-end  gap-10">
            <li
              className={`hidden md:flex ${
                isLinkActive("about") && "text-mc-primary2"
              }`}
            >
              <Link to="/about">About Us</Link>
            </li>
            <li
              className={`hidden md:flex ${
                isLinkActive("services") && "text-mc-primary2"
              }`}
            >
              <Link to="/services">Our Services</Link>
            </li>
            <li
              className={`hidden md:flex ${
                isLinkActive("guides") && "text-mc-primary2"
              }`}
            >
              <Link to="/guides">Guides</Link>
            </li>
            <li
              className={`hidden md:flex ${
                isLinkActive("contact") && "text-mc-primary2"
              }`}
            >
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hidden md:flex bg-mc-primary1 p-2 text-white hover:bg-blue-500">
              <Link to="/quotes">Get Quote</Link>
            </li>
            {showTranslateDropdown && (
              <li className="flex items-center justify-center">
                <div id="google_translate_element"></div>
              </li>
            )}

            <li className="flex md:hidden">
              {showMenu ? (
                <IoMdClose className="text-2xl" onClick={handleMenuClose} />
              ) : (
                <IoMenu className="text-2xl" onClick={handleMenuToggle} />
              )}
            </li>
          </ul>
        </div>
        {showMenu && (
          <SideMenu
            onClose={() => {
              handleMenuClose;
            }}
            isOpen={showMenu}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
