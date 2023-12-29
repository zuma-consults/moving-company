import { Link } from "react-router-dom";

function Guide() {
  return (
    <div className="flex items-center justify-center flex-col my-10 md:px-20">
      <h1 className="font-normal md:text-[54px] text-[30px] mb-10">
        How to get started
      </h1>
      <div className="grid p-5 m-2 md:p-0 bg-white md:bg-opacity-0 shadow md:shadow-none md:grid-cols-2 gap-5 w-full">
        <div
          className="flex items-center justify-center w-full h-400px"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <img
            src={"/loading.svg"}
            alt="ATD logistics hero image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              backgroundColor:"#4f4d4b"
            }}
          />
        </div>

        <div className="grid gap-10 mr-10 w-[80%] h-[400px] text-gray m-auto">
          <div
            className="flex items-center relative"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="w-[70px] h-[70px] bg-mc-primary2 z-10 shadow-lg absolute left-0 flex rounded-full items-center justify-center text-3xl text-white">
              01
            </div>
            <div className="bg-white h-[80px] flex items-center  shadow-lg absolute left-[35px] justify-center w-full">
              Fill out our simple inquiry form
            </div>
          </div>
          <div
            className="flex items-center relative"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="w-[70px] h-[70px] bg-mc-primary2 z-10 shadow-lg absolute left-0 flex rounded-full items-center justify-center text-3xl text-white">
              02
            </div>
            <div className="bg-white h-[80px] flex items-center  shadow-lg absolute left-[35px] justify-center w-full">
              Complete virtual survey
            </div>
          </div>
          <div
            className="flex items-center relative"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <div className="w-[70px] h-[70px] bg-mc-primary2 z-10 shadow-lg absolute left-0 flex rounded-full items-center justify-center text-3xl text-white">
              03
            </div>
            <div className="bg-white h-[80px] flex items-center shadow-lg absolute left-[35px] justify-center pl-5 w-full">
              Accept your estimate and we would do the rest
            </div>
          </div>

          <Link
            href="/contact"
            className="flex items-center justify-center bg-mc-primary1 hover:bg-blue-600 w-[80%] h-[70%] text-white  text-xl font-normal"
          >
            Fill the form
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Guide;
