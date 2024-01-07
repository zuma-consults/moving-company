import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceCard(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex justify-center flex-col my-10 shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white p-10 ">
        <div
          className={`w-full relative flex items-center md:flex-${
            props.reverse ? "row-reverse" : "row"
          } md:order-${props.reverse ? "2" : "1"}`}
        >
          <div
            className={`w-[70px] h-[70px] bg-mc-primary2 z-10 shadow-lg
           absolute rounded-full items-center justify-center text-3xl text-white flex md:-me-8 -ms-8 animate-bounce`}
          >
            {props.number}
          </div>
          <img
            src={props.image}
            alt={props.alt}
            width={500}
            height={500}
            className="pt-2"
            style={{backgroundColor:"#303d50"}}
          />
        </div>

        <div>
          <h2
            className="font-bold md:text-[32px] text-[24px] text-center mb-5"
            // data-aos="slide-left"
            // data-aos-duration="500"
            // data-aos-easing="ease-in-out"
          >
            {props.title}
          </h2>
          <p className="md:text-[20px] text-[16px] text-[#66676A] leading-10 font-normal">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
