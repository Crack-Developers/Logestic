import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Events from "./Pages/Events";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Packeging from "./Pages/Packeging";
import GetAQuote from "./Pages/GetAQuote";
import Career from "./Pages/Career";

const App = () => {
  return (
    <div>
      <Navbar />
        <div className="mt-[90px]"><Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookonline" element={<Events />} />
          <Route path="/packaging" element={<Packeging />} />
          <Route path="/get-a-quote" element={<GetAQuote />} />
          <Route path="/career" element={<Career />} />
        </Routes></div>
      <Footer />
    </div>
  );
};

export default App;
