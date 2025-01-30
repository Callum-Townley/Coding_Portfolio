import "./Styling.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About_me from "./Pages/About_me";
import Projects from "./Pages/Projects";
import Creativecoding from "./Pages/Creativecoding";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div>
      <link href="./Styling.css" rel="stylesheet" />
      <Navbar />
      <div id="home">
        <Homepage />
      </div>
      <div id="about">
        <About_me />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="creative-coding">
        <Creativecoding />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
