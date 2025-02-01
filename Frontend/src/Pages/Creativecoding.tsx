import React from "react";
import CreativeCodingCard from "../Components/CreativeCodingCard";
import ElementaryImage from "../Assets/Elementary cellular automata.png";
function Creativecoding() {
  return (
    <div className="bg-darkblack w-full h-screen flex flex-col">
      <div className="bg-darkblack w-full h-20 flex justify-center">
        <h1 className="text-glitchgreen text-7xl -ml-12 font-vt323 text-center">
          Creative Coding
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ml-20 mr-20">
        <CreativeCodingCard
          title="Elementary Cellular automata"
          imageSrc={ElementaryImage}
        />
        <CreativeCodingCard
          title="Elementary Cellular automata"
          imageSrc={ElementaryImage}
        />
        <CreativeCodingCard
          title="Elementary Cellular automata"
          imageSrc={ElementaryImage}
        />
      </div>
    </div>
  );
}

export default Creativecoding;
