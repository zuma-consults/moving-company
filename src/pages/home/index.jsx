import { useEffect } from "react";
import Hero from "../../components/Hero";
import Reasons from "../../components/Reasons";
import Services from "../../components/Services";
import Guide from "../../components/Guide";
import Contact from "../../components/Contact";
import Reviews from "../../components/Reviews";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="w-full h-full overflow-x-hidden">
      <Hero />
      <Reasons />
      <Guide />
      <Services />
      <Reviews />
      <Contact contactImg={"/contact.svg"} showBottom={false} showTop={false} />
    </main>
  );
}
