import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div className="w-full h-full flex items-center justify-center  flex-col">
      <div className="w-full flex-col md:flex-row flex items-start justify-between gap-5 flex-wrap h-[90%]  bg-mc-primary1 p-10">
        <div className="text-white flex flex-col gap-2">
          <span>logo</span>
          <div className="text-white flex gap-2">
            <FaPhoneAlt /> <span>+47 947 21 965</span>
          </div>
          <div className="text-white flex gap-2">
            <FaLocationDot /> <span>Karl staaffs vei 82, 0665 Oslo</span>
          </div>
          <div className="text-white flex gap-2">
            <IoMdMail /> <span>Atdoslo@yahoo.com</span>
          </div>
        </div>
        <div className="text-white flex flex-col gap-2">
          <span>Home</span>
          <span>About us</span>
          <span>Our services</span>
          <span>Guides</span>
          <span>Contact</span>
          <span>Get quotes</span>
        </div>
        <div className="text-white flex flex-col gap-2">
          <span>About us</span>
          <span>Our mission</span>
          <span>What sets us apart</span>
        </div>
        <div className="text-white flex flex-col gap-2">
          <span>Services</span>
          <span>Moving</span>
          <span>Relocation</span>
          <span>Storage</span>
        </div>
        <div className="text-white flex flex-col gap-2">
          <span>Useful resources</span>
          <span>Guide</span>
          <span>Privacy statement</span>
        </div>
        <div className="text-white flex flex-col gap-2">
          <span>Stay Connected</span>
          <div className="flex items-center gap-3">
            <SlSocialFacebook />
            <IoLogoInstagram />
            <FaXTwitter />
            <FiLinkedin />
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
