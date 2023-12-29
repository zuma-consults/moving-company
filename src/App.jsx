import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import ContactPage from "./pages/contact";
import Services from "./pages/services";
import Guide from "./pages/guides";
import GuideIdPage from "./pages/guides/guideId";
import Quotes from "./pages/quotes";
import Applayout from "./layouts/Applayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Applayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/guides" element={<Guide />} />
        <Route path="/guides/:id" element={<GuideIdPage />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
