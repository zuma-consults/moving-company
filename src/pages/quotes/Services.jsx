import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="flex items-center justify-center flex-col my-10 md:px-20 p-3">
      <h1 className="font-normal text-[54px]">Our Services</h1>
      <div className="flex items-center w-[90%] md:w-[70%] justify-center text-center leading-8 text-[20px] my-5 text-gray-500">
        ATD - Alex Transport and Distribution offers a comprehensive suite of
        services tailored to simplify your moving experience. From local to
        international relocations, transportation, storage, and expert
        consultation, we prioritize excellence and personalization in every
        step. Trust us for seamless transitions and tailored solutions that
        exceed expectations.
      </div>
      <div className="w-full grid md:grid-cols-3 gap-3 my-5 h-[500px] md:h-[300px]">
        <div
          className="relative col-span-1 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/relocation.jpg")',
            position: "relative",
            backgroundColor: "#000",
          }}
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-40"></div>
          <div className="flex items-center justify-center text-white h-full">
            Moving & Relocation
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="relative col-span-1 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/transportation.jpg")',
            position: "relative",
            backgroundColor: "#000",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-40"></div>
          <div className="flex items-center justify-center text-white h-full">
            Transportation and storage
          </div>
        </div>
        <div
          className="relative col-span-1 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/cleaning.jpg")',
            position: "relative",
            backgroundColor: "#000",
          }}
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-40"></div>
          <div className="flex items-center justify-center text-white h-full">
            Cleaning Services
          </div>
        </div>
      </div>

      <Link
        href="/services"
        className=" w-full flex gap-2 items-center justify-end text-mc-primary1 cursor-pointer"
      >
        <Link to="/services">vices</Link>
        <FaArrowRightLong className="font-thin" />
      </Link>
    </div>
  );
}

export default Services;
