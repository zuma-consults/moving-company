import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SideMenu from "./SideMenu";
import { useParams } from "react-router-dom";
// import { FaAngleDown } from "react-icons/fa";
import Cookies from "js-cookie";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const { id } = useParams();
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState("");
  const location = useLocation();
  const languages = [
    { label: "English", value: "/auto/en" },
    { label: `Русский`, value: "/auto/ru" },
    { label: "Polski", value: "/auto/pl" },
  ];
  const handleMenuToggle = () => {
    // console.log("handleMenuToggle");
    setShowMenu(!showMenu);
  };

  const isLinkActive = (path) => {
    if (id) {
      return id == path;
    }
  };

  const handleMenuClose = () => {
    // console.log("handleMenuClose");
    setShowMenu(false);
  };

  const googleTranslateElementInit = () => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          includedLanguages: "en,ms,ta,zh-CN",
          layout: 0,
        },
        "google_translate_element"
      );
    } else {
      console.error("Google Translate API is not available.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.googleTranslateElementInit) {
        googleTranslateElementInit();
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [location]);

  useEffect(() => {
    if (Cookies.get("googtrans")) {
      setSelected(Cookies.get("googtrans"));
    } else {
      setSelected("/auto/en");
    }
  }, [Cookies]);

  const langChange = (e, m, evt) => {
    evt.preventDefault();
    console.log(Cookies.get("googtrans"));
    if (e && Cookies.get("googtrans") != undefined) {
      Cookies.set("googtrans", decodeURI(e));
      setSelected(e);

      // Use setInterval to check if google.translate.element is defined
      const intervalId = setInterval(() => {
        if (
          window.google &&
          window.google.translate &&
          window.google.translate.element
        ) {
          clearInterval(intervalId); // Clear the interval once defined
          const translateElement = window.google.translate.element;

          // Call the translate method to update the content
          translateElement.translate("en", decodeURI(e));
        }
      }, 100);
    } else {
      Cookies.set("googtrans", e);
      setSelected(e);
    }
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
              // width={100}
              alt="ATD logistics Logo"
              height={200}
              className="md:w-[150px] lg:w-[200px]"
            />
          </Link>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="w-[50%] lg:text-base md:text-sm"
        >
          <ul className="flex items-center justify-end  lg:gap-10 md:gap-8">
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
            <li className="flex">
              <div
                id="google_translate_element"
                style={{
                  width: "0px",
                  height: "0px",
                  position: "absolute",
                  left: "50%",
                  zIndex: -99999,
                }}
              ></div>
              <select
                value={selected}
                onChange={(e) => langChange(e.target.value, null, e)}
                className="notranslate"
                placeholder="Select Language"
              >
                <option key="select a Language" value="Select Language" />
                {languages.map((language) => (
                  <option key={language.value} value={language.value}>
                    {language.label}
                  </option>
                ))}
              </select>

              {/* <Link to="#">
                <div className="flex items-center gap-2">
                  <img
                    src={"/norway.svg"}
                    width={50}
                    height={50}
                    alt="norway"
                  />
                  <FaAngleDown className="font-thin" />
                </div>
              </Link> */}
            </li>

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
