import { Link } from "react-router-dom";
import DownArrow from "../../../components/DownArrow";
import MissonCard from "./misson-card";
import { missionData, setsApartData, servicesData } from "./data";

function Hero() {
  return (
    <>
      <div className="md:px-20 h-[600px] w-full relative mb-20">
        <div
          className="bg-cover bg-center h-full  md:mt-[120px] mt-[100px] relative flex flex-col items-center justify-end"
          style={{
            backgroundImage: 'url("/about.jpg")',
            backgroundColor: "#a8b5cd",
          }}
        >
          <div className="flex items-center justify-center text-white text-5xl font-extrabold h-full uppercase">
            ABOUT US
          </div>
          <DownArrow />
        </div>
      </div>
      <section className="flex justify-center my-[5rem] p-3 flex-col items-center">
        <div className="md:w-[69%] w-[full] h-[full] mb-[5rem]">
          <p
            className="font-[300] text-center leading-10 text-[20px] px-[.5rem]"
            data-aos="fade-up"
            data-aos-duration="950"
            data-aos-easing="ease-in-out"
          >
        We are ATD Logistics – your dedicated ally in simplifying the complexities of relocation in Norway. From local to international moves, our expert team offers tailored solutions that prioritize excellence and personalization. With secure storage options and a commitment to seamless transitions, we redefine moving experiences for Norwegians. Trust us – We are your partner in making your journey smooth, efficient, and stress-free
          </p>
        </div>
        <div className="w-full">
          <MissonCard title={missionData.title} text={missionData.text} />
          <MissonCard title={setsApartData.title} text={setsApartData.text} />
          <MissonCard title={servicesData.title} text={servicesData.text} />
        </div>
        <div className="md:w-[69%] w-[full]  h-[full] mb-[5rem]">
          <p
            className="font-[300] text-center leading-[40px] text-[20px] px-[.5rem]"
            data-aos="fade-up"
            data-aos-duration="950"
            data-aos-easing="ease-in-out"
          >
          Whether it's your first move or you're a seasoned mover, partner with ATD for a stress-free and tailored relocation experience. Join us on this journey, and let's make your move a smooth transition to new possibilities.
          </p>
        </div>
        <button className="bg-blue-700 hover:bg-blue-90 rounded-[1rem] p-[1rem] text-white">
          <Link to="/contact">Partner with us</Link>
        </button>
      </section>
    </>
  );
}

export default Hero;
