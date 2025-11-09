import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
