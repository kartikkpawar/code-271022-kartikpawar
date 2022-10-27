import React, { useEffect } from "react";
import Home from "pages/Home/Home";
import Explore from "pages/Explore/Explore";
import Navbar from "components/Navbar/Navbar";
import About from "pages/About/About";
import Footer from "components/Footer/Footer";
import About2 from "pages/About/About2";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Explore />
      <About />
      <About2 />
      <Footer />
    </div>
  );
};

export default App;
