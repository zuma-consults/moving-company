import DownArrow from "../../components/DownArrow";
import ServiceCard from "../../components/ServiceCard";
import img1 from "/service1.jpg";
import img2 from "/service2.jpg";
import img3 from "/service3.jpg";
import img4 from "/service4.jpg";
import img5 from "/service5.jpg";
import img6 from "/service6.jpg";
import img7 from "/service7.jpg";
import img8 from "/service8.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    AOS.init();
  }, []);
  let array = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <main className="w-full h-full ">
      {/* banner section */}
      <div className="md:px-20 h-[600px] w-full relative mb-10">
        <div
          className="bg-cover bg-center h-full  md:mt-[120px] mt-[100px] relative flex flex-col items-center justify-end"
          style={{
            backgroundImage: 'url("/serviceBg.jpg")',
            backgroundColor: "#377477",
          }}
        >
          <div className="flex items-center justify-center text-white text-5xl font-extrabold h-full uppercase">
            our services
          </div>

          <DownArrow />
        </div>
      </div>
      {/* comprehensive services */}
      <div className="md:px-20 my-10 bg-whitesmoke">
        <h1 className="font-normal lg:text-[42px] md:text-[32px] text-[30px] text-center md:mx-28 mx-5">
          We offer a comprehensive suite of services tailored to simplify your
          moving experience.
        </h1>
      </div>
      {/* service cards */}
      <div className="mx-3 md:mx-36">
        <ServiceCard
          number="01"
          image={array[0]}
          alt="International Relocation"
          title="International Relocation"
          description="ATD specializes in effortless international relocations for individuals, families, and businesses moving from Norway. Our seasoned team handles packing, documentation, customs procedures, and transportation logistics, ensuring a smooth transition to your new international destination. Trust ATD for a seamless and stress-free relocation experience tailored to your needs."
        />
        <ServiceCard
          reverse={true}
          numberPosition={true}
          number="02"
          image={array[1]}
          alt="Transportation"
          title="Transportation & Storage"
          description="Our international transportation services guarantee the safe and timely delivery of your belongings to any corner of the globe. With a focus on reliability and security, we offer comprehensive door-to-door shipping solutions. Additionally, our secure storage options cater to your short or long-term needs, ensuring the safety of your possessions during the relocation process."
        />
        <ServiceCard
          number="03"
          image={array[2]}
          alt="Cleaning Services"
          title="Cleaning Services"
          description="ATD's professional cleaning services ensure that your previous or new international space meets the highest standards of cleanliness. Our meticulous cleaning process prepares your space, ensuring a welcoming and fresh environment upon arrival at your new destination."
        />
        <ServiceCard
          reverse={true}
          numberPosition={true}
          number="04"
          image={array[3]}
          alt="Air flight Services"
          title="Air flight Services"
          description="For urgent or long-distance international moves, 
          our air travel services offer expedited and secure transportation of your belongings. We prioritize efficiency and reliability in arranging air freight, ensuring your possessions reach their destination promptly."
        />
        <ServiceCard
          number="05"
          image={array[4]}
          alt="Transportation by Sea, Air or Road"
          title="Transportation by Sea, Air or Road"
          description="ATD excels in transporting your belongings seamlessly from Norway—be it by sea, air, or road. Trust us for reliable and secure solutions tailored to your needs. Your worry-free journey begins with ATD."
        />
        <ServiceCard
          reverse={true}
          numberPosition={true}
          number="06"
          image={array[5]}
          alt="Door to Door"
          title="Door to Door"
          description="Our door-to-door transportation services ensure the safe and efficient movement of your possessions worldwide. Whether by sea, air, or road, we offer comprehensive shipping solutions tailored to your international relocation needs. From your current doorstep to your new location, trust us to handle every step of the journey seamlessly."
        />
        <ServiceCard
          number="07"
          image={array[6]}
          alt="Agent & Network"
          title="Agent & Network"
          description="In Norway, our door-to-door transportation services guarantee the safe and efficient movement of your possessions worldwide. Trust us to seamlessly handle every step of the journey, ensuring a smooth transition from your current doorstep to your new location."
        />
        <ServiceCard
          reverse={true}
          numberPosition={true}
          number="08"
          image={array[7]}
          alt="Survey & Quotation"
          title="Survey & Quotation"
          description="ATD conducts thorough surveys and provides transparent quotations specifically tailored for international relocations. Our meticulous assessments and detailed cost breakdowns empower you with comprehensive information, allowing you to make informed decisions about your international move, considering all aspects and expenses involved."
        />
      </div>
      {/* ready section  */}
      <div className="md:px-20 my-10 bg-whitesmoke">
        <h1 className="font-normal md:text-[42px] text-[30px] text-center md:mx-28 mx-5">
          Ready to get started?
        </h1>
        <div
          className="flex items-center justify-center"
          // data-aos="slide-right"
          // data-aos-duration="200"
          // data-aos-easing="ease-in-out"
        >
          <Link to="/contact">
            <button className="bg-mc-#1c58d8 text-white md:px-10 p-5 mt-5 shadow-md">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Services;
