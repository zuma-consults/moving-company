import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import GoToTop from "../components/Top";
function Applayout() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Navbar />
      <div className="w-full h-full overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Applayout;
