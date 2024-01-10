// import { FaArrowRightLong } from "react-icons/fa6";

function Reviews() {
  return (
    <div className="flex items-center justify-center flex-col my-10 md:px-20 p-3 md:p-0">
      <h1 className="font-normal md:text-[54px] text-[30px] mb-10">
        Client Review
      </h1>
      <div className="w-full grid md:grid-cols-3 gap-5 my-10 ">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="col-span-1 bg-white shadow-lg p-5 flex items-center justify-center flex-col gap-2"
        >
          <div
            className="flex items-center justify-center w-full h-400px"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <img
              src={"/person1.svg"}
              alt="ATD logistics hero image"
              style={{
                width: "70",
                height: "70",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="flex items-center justify-center p-5 leading-10 text-gray-500 text-center h-full">
            &quot;ADT Logistics can simplify and facilitate every relocation
            hassle and detail, Highly recommended&quot;
          </div>
          <div className="w-full pr-5 flex items-center justify-end">
            <span className="bg-mc-primary2 p-[.5px] w-[40px] mr-2"></span>
            <span>Mark Lawson</span>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="col-span-1 bg-white shadow-lg p-5 flex items-center justify-center flex-col gap-2"
        >
          <div
            className="flex items-center justify-center w-full h-400px"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <img
              src={"/person2.svg"}
              alt="ATD logistics hero image"
              style={{
                width: "70",
                height: "70",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="flex items-center justify-center p-5 leading-10 text-gray-500 text-center h-full">
            {} &quot;ADT Logistics can simplify and facilitate every relocation
            hassle and detail, Highly recommended&quot;
          </div>
          <div className="w-full pr-5 flex items-center justify-end">
            <span className="bg-mc-primary2 p-[.5px] w-[40px] mr-2"></span>
            <span>Suzy Johnson</span>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="col-span-1 bg-white shadow-lg p-5 flex items-center justify-center flex-col gap-2"
        >
          <div
            className="flex items-center justify-center w-full h-400px"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <img
              src={"/person3.svg"}
              alt="ATD logistics hero image"
              style={{
                width: "70",
                height: "70",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="flex items-center justify-center p-5 leading-10 text-gray-500 text-center h-full">
            &quot;ADT Logistics can simplify and facilitate every relocation
            hassle and detail, Highly recommended&quot;
          </div>
          <div className="w-full pr-5 flex items-center justify-end">
            <span className="bg-mc-primary2 p-[.5px] w-[40px] mr-2"></span>
            <span>Alan Parker</span>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex gap-2 items-center justify-end cursor-pointer text-mc-primary1">
        <span>View more</span>
        <FaArrowRightLong className="font-thin" />
      </div> */}
    </div>
  );
}

export default Reviews;
