import React from "react";

const MissonCard = ({ text, title }) => {
  return (
    <div
      className="shadow-lg bg-white p-5 md:mx-[5rem] rounded-[1rem] my-[3rem]"
      data-aos="fade-left"
      data-aos-duration="950"
      data-aos-easing="ease-in-out"
    >
      <div className="flex flex-col justify-center items-center md:p-[3rem] gap-5">
        <h3 className="text-center font-[600] text-[32px] leading-[39.01px]">
          {title}
        </h3>
        <p className="text-center font-[300] text-[20px] leading-[40px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default MissonCard;
