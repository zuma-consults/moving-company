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
            backgroundImage: 'url("/about.svg")',
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
            At ATD, we understand that moving is more than just relocating
            belongings; it&rsquo;s about transitions, change, and new
            beginnings. With a steadfast commitment to excellence and a wealth
            of experience in the moving and relocation industry, ATD - Alex
            Transport and Distribution offers comprehensive solutions tailored
            to meet your unique needs.
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
            Whether it&rsquo;s your first move or you&rsquo;re a seasoned mover,
            partner with ATD for a stress-free and tailored relocation
            experience. Join us on this journey, and let&rsquo;s make your move
            a smooth transition to new possibilities.
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
