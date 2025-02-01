import React from "react";
import { Link } from "react-router-dom";
import Clogo from "../Assets/C logo.svg";

function Navbar() {
  return (
    <div>
      <nav className="bg-neutral-900 w-full flex-row h-14">
        <ul className="flex  items-center  gap-21 w-full">
          <li>
            <a href="#home" className="text-glitchgreen font-vt323 text-4xl">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-glitchgreen font-vt323 text-4xl">
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-glitchgreen font-vt323 text-4xl"
            >
              Projects
            </a>
          </li>
          <li>
            <img src={Clogo} className="size-15 align-top "></img>
          </li>
          <li>
            <a
              href="#creative-coding"
              className="text-glitchgreen font-vt323 text-4xl"
            >
              Creative Coding
            </a>
          </li>
          <li>
            <a href="#blog" className="text-glitchgreen font-vt323 text-4xl">
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" className="text-glitchgreen font-vt323 text-4xl">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="w-full h-6 bg-darkgreen"></div>
    </div>
  );
}

export default Navbar;
