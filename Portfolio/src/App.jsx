import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Porfolio from "./components/Porfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import toast,{ Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Porfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <Toaster/>
    </>
  );
}

export default App;
