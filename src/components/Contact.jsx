function Contact() {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      className=" w-full flex items-center justify-center flex-col my-10 md:px-20 p-3"
    >
      <div className="w-full grid md:grid-cols-2 bg-white">
        <div className="md:p-5 md:px-20 p-5 shadow-lg h-full flex items-center justify-center flex-col gap-3">
          <div className="flex items-center justify-center gap-10">
            <span className="bg-gray-600 p-[.5px] w-[40px]"></span>
            <h1 className="font-normal h-full md:text-[30px] text-[30px]">
              Contact Us
            </h1>
            <span className="bg-gray-600 p-[.5px] w-[40px]"></span>
          </div>
          <p className="text-center text-[14px] text-gray-500 mb-2">
            Feel free to fill in the contact form below if it might be relevant
            to use any of our services, or if you have any questions. We do our
            best to give you an answer as soon as possible.
          </p>

          <form className="w-full grid gap-3">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#F5F5F5] w-full p-2"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-[#F5F5F5] w-full p-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-[#F5F5F5] w-full p-2"
            />
            <div></div>
            <textarea
              type="text"
              rows={5}
              placeholder="Send Message"
              className="bg-[#F5F5F5] w-full p-2"
            />
            <input
              type="submit"
              placeholder="Send"
              className="bg-mc-primary1 text-white font-semibold w-full p-2"
            />
          </form>
        </div>
        <div
          className="flex items-center justify-center w-full h-400px"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <img
            src={"/contact.svg"}
            alt="ATD logistics hero image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
