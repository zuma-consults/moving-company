import React from "react";
import { FaArrowDown } from "react-icons/fa6";

function DownArrow() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="w-[70px] h-[70px] bg-mc-primary2 z-10 shadow-lg cursor-pointer
        absolute -mb-8 rounded-full items-center justify-center text-3xl text-white md:flex hidden"
      onClick={scrollToBottom}
    >
      <FaArrowDown className="font-[100]  animate-bounce" />
    </div>
  );
}

export default DownArrow;
