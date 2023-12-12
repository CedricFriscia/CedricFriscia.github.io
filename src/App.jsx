import React from "react";

// IMPORT COMPONENTS
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Project from "./Pages/Project";

import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

// IMPORT CSS
import "./css/reset.css";
import "./css/app.scss";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Landing />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
