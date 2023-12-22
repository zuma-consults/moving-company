function Reasons() {
  return (
    <div className="flex items-center justify-center flex-col w-full p-1 md:px-20">
      <h1 className="font-normal md:text-[54px] text-[30px] mt-10">
        Why Choose Us
      </h1>
      <div className="grid md:grid-cols-3 gap-5 md:gap-10 p-2 mt-5 w-full">
        <div
          className="bg-white shadow flex-col p-10 flex items-center gap-2 justify-center"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div className="w-[50px] h-[50px] rounded-full p-3 bg-blue-100 flex items-center justify-center">
            <img src="/award.svg" width={50} height={50} alt="excellence" />{" "}
          </div>
          <div className="text-center">Commitment to Excellence</div>
        </div>
        <div className="bg-white flex-col shadow p-10 flex items-center justify-center gap-2">
          <div className="w-[50px] h-[50px] rounded-full p-3 bg-blue-100 flex items-center justify-center">
            <img src="/smooth.svg" width={50} height={500} alt="excellence" />
          </div>

          <div className="text-center">Smooth Transitions</div>
        </div>
        <div
          className="bg-white shadow flex-col p-10 flex items-center justify-center gap-2"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div className="w-[50px] h-[50px] rounded-full p-3 bg-blue-100 flex items-center justify-center">
            {" "}
            <img src="/bezier.svg" width={50} height={50} alt="excellence" />
          </div>

          <div className="text-center">Comprehensive Solutions</div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
