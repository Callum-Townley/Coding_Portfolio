import React from "react";
import CodePortfolioImage from "../Assets/code portfolio image.png";
import ProductStoreImage from "../Assets/Product store image.png";
import EvasionEscapeImage from "../Assets/Evasion Escape Image.png";
import CSharpLogo from "../Assets/c-sharp-svgrepo-com.svg";
import GodotLogo from "../Assets/godot-svgrepo-com.svg";

function Projects() {
  return (
    <div className="bg-darkblack w-screen h-300vh flex flex-col ">
      <div className="bg-darkblack w-screen h-20 flex justify-center">
        <h1 className="text-glitchgreen text-7xl -ml-12 font-vt323">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
        <div className="bg-greyish h-200 w-full rounded-2xl flex flex-col items-center">
          <p className="text-glitchgreen text-5xl -ml-12 font-vt323 text-center">
            This website
          </p>
          <img src={CodePortfolioImage} className=" w-150"></img>
        </div>
        <div className="bg-greyish h-200 w-full rounded-2xl flex flex-col items-center">
          <p className="text-glitchgreen text-5xl -ml-12 font-vt323 text-center">
            Product Store
          </p>
          <img src={ProductStoreImage} className="h-93 w-150"></img>
        </div>
      </div>
      <div className="bg-greyish h-200 w-175 rounded-2xl flex flex-col self-center items-center">
        <p className="text-glitchgreen text-5xl -ml-12 font-vt323 text-center">
          Evasion Escape
        </p>
        <img src={EvasionEscapeImage} className=" w-150"></img>
        <p className="text-white text-xl mt-4 text-center m-2">
          Evasion Escape is a 2D physics-based game inspired by games such as
          vampire survivors. The goal of the game is to Evade enemies using 9
          unique characters, each with their own abilities, and to pass every
          level. This project was for my Computer Science NEA, where i got
          graded an A*.
        </p>
        <div className="flex flex-row self-baseline mt-30">
          <button className="bg-gradient-glitchgreen text-white font-bold py-4 px-10 rounded mt-4 ml-10">
            Case Study
          </button>
          <div className="flex-grow"></div>
          <img src={GodotLogo} className="size-16 self-end"></img>
          <img src={CSharpLogo} className="size-16 self-end"></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
