import DownArrow from "../../components/DownArrow";
import Contact from "../../components/Contact";

function About() {
  return (
    <main className="w-full h-full">
      <div className="md:px-20 h-[600px] w-full relative mb-20">
        <div
          className="bg-cover bg-center h-full  md:mt-[120px] mt-[100px] relative flex flex-col items-center justify-end"
          style={{ backgroundImage: 'url("/serviceBg.svg")' }}
        >
          <div className="flex items-center justify-center text-white text-5xl font-extrabold h-full uppercase">
            Contact Us
          </div>
          <DownArrow />
        </div>
      </div>
      <Contact />
    </main>
  );
}

export default About;
