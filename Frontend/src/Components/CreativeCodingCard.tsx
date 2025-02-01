import React from "react";
import GradientButtonCircle from "./GradientButtonCircle";
import GithubLogo from "../Assets/github-142-svgrepo-com.svg";
interface CreativeCodingCardProps {
  title: string;
  imageSrc: string;
}

const CreativeCodingCard: React.FC<CreativeCodingCardProps> = ({
  title,
  imageSrc,
}) => {
  return (
    <div className="w-full  bg-greyish h-130 rounded-2xl flex flex-col p-6">
      <div className="w-full  bg-greyish h-80 rounded-2xl flex flex-col">
        <img className="w-full h-full rounded-2xl" src={imageSrc}></img>
        <p className="text-white text-2xl w-full text-center">{title}</p>
      </div>
      <div className="mt-auto">
        <GradientButtonCircle Logosrc={GithubLogo} />
      </div>
    </div>
  );
};

export default CreativeCodingCard;
