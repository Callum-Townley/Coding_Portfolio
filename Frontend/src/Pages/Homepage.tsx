import React from "react";
import Navbar from "../Components/Navbar";
import Clogo from "../Assets/C logo.svg";
function Homepage() {
  return (
    <div className="bg-darkblack w-screen h-screen flex ">
      <div>
        <p className="text-white text-2xl mt-16">{"function intro(){"}</p>
        <div className="flex flex-row items-center">
          <p className="text-white text-3xl mt-29 overflow-hidden">
            Hello! I'm
          </p>
          <img src={Clogo} className="size-65 -ml-10"></img>
          <h1 className="text-glitchgreen text-7xl mt-25 -ml-12 font-vt323">
            allum Townley
          </h1>
        </div>
        <p className="text-white text-3xl -mt-5 overflow-hidden">
          FULL STACK DEVELOPER AND DESIGNER
        </p>
        <div className="flex flex-row">
          <button className="bg-gradient-glitchgreen text-white font-bold py-4 px-10 rounded mt-4 ml-10">
            Download Resume
          </button>
          <button className="bg-gradient-glitchgreen text-white font-bold py-4 rounded-full mt-4 ml-10 w-16 h-16"></button>
          <button className="bg-gradient-glitchgreen text-white font-bold py-4 rounded-full mt-4 ml-5 w-16 h-16"></button>
        </div>
        <p className="text-white text-2xl">{"}"}</p>
      </div>
    </div>
  );
}

export default Homepage;
