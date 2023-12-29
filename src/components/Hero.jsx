import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="md:px-20 relative">
      <div className="relative w-full md:h-[650px] h-[500px] md:mt-[120px] mt-[100px] overflow-hidden">
        {/* Main image */}
        <img
          src={"/heroImage.svg"}
          alt="ATD logistics hero image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            backgroundColor: "#4f4d4b",
          }}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-gray"></div>

        {/* Content */}
        <div
          className="absolute left-5 bottom-20 md:left-20 md:bottom-20"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div className="font-bold md:text-[64px] text-[40px] text-white">
            <div>
              Expert <span className="text-mc-primary2">Moves</span>,
            </div>
            <div>Exceptional</div>
            <div className="text-mc-primary2">Experiences</div>
          </div>
          <div className="text-white text-lg mb-3">Let’s get you moving...</div>
          <Link
            href="/quotes"
            className="text-white text-2xl font-thin gap-2 flex p-5 items-center justify-center bg-mc-primary1 w-[220px] cursor-pointer hover:bg-blue-600"
          >
            <span>Get a Quote</span>
            <FaArrowRightLong className="font-[100] bounce-on-hover" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
