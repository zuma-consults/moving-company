import { useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import { useParams } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const { id } = useParams();
  const [showMenu, setShowMenu] = useState(false);

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
            <li>
              <Link to="#">
                <div className="flex items-center gap-2">
                  <img
                    src={"/norway.svg"}
                    width={50}
                    height={50}
                    alt="norway"
                  />
                  <FaAngleDown className="font-thin" />
                </div>
              </Link>
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
