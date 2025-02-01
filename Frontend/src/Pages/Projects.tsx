import React from "react";
import CodePortfolioImage from "../Assets/code portfolio image.png";
import ProductStoreImage from "../Assets/Product store image.png";
import EvasionEscapeImage from "../Assets/Evasion Escape Image.png";
import CSharpLogo from "../Assets/c-sharp-svgrepo-com.svg";
import GodotLogo from "../Assets/godot-svgrepo-com.svg";
import GradientButton from "../Components/GradientButton";
import ReactLogo from "../Assets/icons8-react-native.svg";
import TypescriptLogo from "../Assets/icons8-typescript.svg";
import NodejsLogo from "../Assets/nodejs-1-logo-svgrepo-com (1).svg";
import MongodbLogo from "../Assets/icons8-mongo-db.svg";
import MiniProjects from "../Components/MiniProjects";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  return (
    <div className="bg-darkblack w-full h-300vh flex flex-col ">
      <div className="bg-darkblack w-full h-20 flex justify-center">
        <h1 className="text-glitchgreen text-7xl -ml-12 font-vt323">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
        <ProjectCard
          title="Code Portfolio"
          imageSrc={CodePortfolioImage}
          description="This website itself has been quite a complex project. I decided to
            build it with a glitchy green and black asthetic using tailwind CSS
            to reflect my personal style. Building this portfolio has helped me
            refine my front-end development skills and experiment with new web
            technologies."
          technologies={[
            { src: TypescriptLogo, alt: "TypeScript Logo" },
            { src: ReactLogo, alt: "React Logo" },
          ]}
        />
        <ProjectCard
          title="Product Store"
          imageSrc={ProductStoreImage}
          description=" I Built a product store to learn the MERN stack, setting up a
            database, a REST API backend, and a React frontend with Chakra UI.
            Used Mongoose for database management and Postman for API testing,
            improving my full-stack development and API integration skills"
          technologies={[
            { src: ReactLogo, alt: "React Logo" },
            { src: NodejsLogo, alt: "Nodejs Logo" },
            { src: TypescriptLogo, alt: "Typescript Logo" },
            { src: MongodbLogo, alt: "Mongod Logo" },
          ]}
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-5">
          <ProjectCard
            title="Evasion Escape"
            imageSrc={EvasionEscapeImage}
            description="  Evasion Escape is a 2D physics-based game inspired by games such as
              vampire survivors. The goal of the game is to Evade enemies using 9
              unique characters, each with their own abilities, and to pass every
              level. This project was for my Computer Science NEA, where i got
              graded an A*."
            technologies={[
              { src: GodotLogo, alt: "Godot Logo" },
              { src: CSharpLogo, alt: "Csharp Logo" },
            ]}
          />
        </div>
      </div>

      <div className="bg-darkblack w-full h-20 flex mt-10 justify-center">
        <h1 className="text-glitchgreen text-7xl -ml-12 font-vt323">
          Mini Projects
        </h1>
      </div>
      <div className="w-full h-full whitespace-nowrap">
        <MiniProjects></MiniProjects>
      </div>
    </div>
  );
}

export default Projects;
