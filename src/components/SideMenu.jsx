import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const SideMenu = ({ onClose, isOpen }) => {
  // Close the menu when clicking outside of it
  useEffect(() => {
    console.log(isOpen);
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".side-menu")) {
        onClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose, isOpen]);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow p-6 side-menu transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-1000 ease-in-out md:hidden`}
    >
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        className="logo w-[100%] my-10"
      >
        <img
          src={"/atd-logo.svg"}
          width={400}
          alt="ATD logistics Logo"
          height={400}
        />
      </div>

      <ul className="space-y-4 text-mc-primary1">
        <li className="border-b p-2 ">
          <Link to="/about">
            <div className="flex gap-2 items-center justify-between">
              <span>About Us</span>
              <FaArrowRightLong className="font-thin animate-pulse" />
            </div>
          </Link>
        </li>
        <li className="border-b p-2">
          <Link to="/services">
            {" "}
            <div className="flex gap-2 items-center justify-between">
              <span>Our Services</span>
              <FaArrowRightLong className="font-thin animate-pulse" />
            </div>
          </Link>
        </li>
        <li className="border-b p-2">
          <Link to="/guides">
            {" "}
            <div className="flex gap-2 items-center justify-between">
              <span> Guides</span>
              <FaArrowRightLong className="font-thin animate-pulse" />
            </div>
          </Link>
        </li>
        <li className="border-b p-2">
          <Link to="/contact">
            {" "}
            <div className="flex gap-2 items-center justify-between">
              <span>Contact</span>
              <FaArrowRightLong className="font-thin animate-pulse" />
            </div>
          </Link>
        </li>
        <li className="border-b p-2 bg-mc-primary1 hover:bg-blue-500 flex items-center justify-center text-white">
          <Link to="/quotes">Get Quote</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
