import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Skills from "./components/Skills";
import DarkModeToggle from "./components/DarkModeToggle";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div >
       <Toaster position="top-right" />

      <DarkModeToggle />
      <Hero />
      <About />
    
      
      <Skills />

      <Contact />
      <Feedback />
    </div>
  );
}

export default App;