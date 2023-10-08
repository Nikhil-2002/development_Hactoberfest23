import React, { useState } from "react";

// Components import
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Growth from "./components/Growth/Growth";
import Questions from "./components/Questions/Questions";
import Programs from "./components/Programs/Programs";
import Footer from "./components/Footer/Footer";

// Import data
import { programs_shopper } from "./constants/programs_shopper";

const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Hero />
      <Features />
      <Growth />
      <Questions />
      <Programs programs={programs_shopper} />
      <Footer />
    </div>
  );
};

export default App;
