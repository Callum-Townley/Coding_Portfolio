import React from "react";
import MiniProjectCard from "./MiniProjectCard";

function MiniProjects() {
  return (
    <div className="w-full overflow-x-scroll overflow-y-hidden scroll-smooth">
      <ul className="flex flex-nowrap gap-4 pb-5 overflow-x-auto ">
        <MiniProjectCard
          title="Calculator"
          description="A calculator i made complete with advanced mathematical functions and a shift feature"
        />
        <MiniProjectCard
          title="Calculator"
          description="A calculator i made complete with advanced mathematical functions and a shift feature"
        />
        <MiniProjectCard
          title="Calculator"
          description="A calculator i made complete with advanced mathematical functions and a shift feature"
        />
        <MiniProjectCard
          title="Calculator"
          description="A calculator i made complete with advanced mathematical functions and a shift feature"
        />
        <MiniProjectCard
          title="Calculator"
          description="A calculator i made complete with advanced mathematical functions and a shift feature"
        />
      </ul>
    </div>
  );
}

export default MiniProjects;
