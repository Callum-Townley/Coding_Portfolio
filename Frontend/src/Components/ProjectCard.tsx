import React from "react";
import GradientButton from "./GradientButton";
import GradientButtonCircle from "./GradientButtonCircle";
import GithubLogo from "../Assets/github-142-svgrepo-com.svg";

interface ProjectProps {
  title: string;
  imageSrc: string;
  description: string;
  technologies: { src: string; alt: string }[];
}
const ProjectCard: React.FC<ProjectProps> = ({
  title,
  imageSrc,
  description,
  technologies,
}) => {
  return (
    <div className="bg-greyish h-200 w-full rounded-2xl flex flex-col items-center p-5">
      <p className="text-glitchgreen text-5xl -ml-12 font-vt323 text-center">
        {title}
      </p>
      <img
        src={imageSrc}
        alt={title}
        className=" w-full rounded-2xl h-90"
      ></img>
      <p className="text-white text-xl mt-4 text-center m-2">{description}</p>
      <div className="flex flex-row self-baseline w-full mt-auto mb-5">
        <GradientButton text="Case Study" />
        <div>
          <GradientButtonCircle Logosrc={GithubLogo} />
        </div>
        <div className="flex flex-row w-full mt-auto">
          {technologies.map((tech, index) => (
            <img
              key={index}
              src={tech.src}
              className={`size-16 ${index === 0 ? "ml-auto" : "ml-2"}`}
              alt={tech.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
