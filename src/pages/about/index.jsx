import { useEffect } from "react";
import Hero from "./component/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="w-full h-full overflow-x-hidden">
      <Hero />
    </main>
  );
};

export default About;
