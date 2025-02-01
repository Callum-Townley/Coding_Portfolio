import "./Styling.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About_me from "./Pages/About_me";
import Projects from "./Pages/Projects";
import Creativecoding from "./Pages/Creativecoding";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div>
      <link href="./Styling.css" rel="stylesheet" />
      <Navbar />
      <div id="home" className="overflow-x-visible ">
        <Homepage />
      </div>
      <div id="about" className="overflow-x-visible ">
        <About_me />
      </div>
      <div id="projects" className="overflow-x-visible ">
        <Projects />
      </div>
      <div id="creative-coding" className="overflow-x-visible ">
        <Creativecoding />
      </div>
      <div id="contact" className="overflow-x-visible ">
        <Contact />
      </div>
    </div>
  );
}

export default App;
