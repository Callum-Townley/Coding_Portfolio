import React from "react";
import Navbar from "../Components/Navbar";
import Clogo from "../Assets/C logo.svg";
import GradientButton from "../Components/GradientButton";
import GradientButtonCircle from "../Components/GradientButtonCircle";
import GithubLogo from "../Assets/github-142-svgrepo-com.svg";
import LinkedinLogo from "../Assets/icons8-linkedin.svg";
function Homepage() {
  return (
    <div className="bg-darkblack w-full h-screen flex">
      <div className=" w-full ml-5">
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
          <GradientButton text="Download Resume"></GradientButton>
          <GradientButtonCircle Logosrc={GithubLogo} />
          <GradientButtonCircle Logosrc={LinkedinLogo} />
        </div>
        <p className="text-white text-2xl">{"}"}</p>
      </div>
    </div>
  );
}

export default Homepage;
