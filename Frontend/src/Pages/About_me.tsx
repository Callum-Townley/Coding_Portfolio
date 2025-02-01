import React from "react";
import CSharpLogo from "../Assets/icons8-c-sharp-logo.svg";
import JavascriptLogo from "../Assets/icons8-javascript (1).svg";
import PythonLogo from "../Assets/icons8-python.svg";
import ReactLogo from "../Assets/icons8-react-native.svg";
import NodejsLogo from "../Assets/nodejs-1-logo-svgrepo-com (1).svg";
import Clogo from "../Assets/C logo.svg";
function About_me() {
  return (
    <div>
      <div className="bg-darkblack w-full h-200vh flex flex-col ">
        <div className="bg-darkblack w-full h-20 flex justify-center">
          <h1 className="text-glitchgreen text-7xl -ml-12 font-vt323">
            About me
          </h1>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <p className="text-white text-xl text-center">
              Hi! I’m Callum Townley, a full-stack developer and designer based
              in England.
            </p>
            <p className="text-white text-xl text-center mt-5">
              I love creating engaging digital experiences, whether it’s
              crafting immersive websites, illustrating eye-catching art, or
              developing interactive games. My work blends technical expertise
              with creativity, reflecting my passion for both code and art.
            </p>
            <p className="text-white text-xl text-center mt-5">
              When im not coding, i can be found in the wild playing my
              favourite games, running and playing with my pet snake medusa.
            </p>
          </div>
          <img src={Clogo} className="h-100 w-full "></img>
        </div>
      </div>
      <div className="bg-darkblack w-full h-screen flex flex-col">
        <div className="bg-darkblack w-full h-screen flex justify-center">
          <h1 className="text-glitchgreen text-7xl -ml-12 font-vt323">
            Skills
          </h1>
        </div>
        <div className="h-100 bg-darkblack -mt-110 w-full flex flex-row items-center">
          <ul className="flex flex-row ">
            <li>
              <div className=" bg-greyish h-60 w-60 m-3.5 rounded-2xl">
                <img src={JavascriptLogo}></img>
              </div>
            </li>
            <li>
              <div className=" bg-greyish h-60 w-60 m-3.5 rounded-2xl">
                <img src={ReactLogo}></img>
              </div>
            </li>
            <li>
              <div className=" bg-greyish h-60 w-60 m-3.5 rounded-2xl">
                <img src={NodejsLogo}></img>
              </div>
            </li>
            <li>
              <div className=" bg-greyish h-60 w-60 m-3.5 rounded-2xl">
                <img src={PythonLogo}></img>
              </div>
            </li>
            <li>
              <div className=" bg-greyish h-60 w-60 m-3.5 rounded-2xl">
                <img src={CSharpLogo}></img>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About_me;
