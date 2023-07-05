import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Welcome from "../pages/welcom/Welcome";
import Footer from "../components/footer/Footer";
import Home from "../Home/Home";
import Dishes from "../pages/dishes/Dishes";
import Booking from "../pages/booking/Booking";
import About from "../pages/about/About";
import Notfound from "../pages/notfound/Notfound";

function LayoutRoutes() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/services" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Notfound/>} />
          
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default LayoutRoutes;
