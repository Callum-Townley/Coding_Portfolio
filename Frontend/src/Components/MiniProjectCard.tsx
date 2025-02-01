import React from "react";

interface MiniProjectCardProps {
  title: string;
  description: string;
}

const MiniProjectCard: React.FC<MiniProjectCardProps> = ({
  title,
  description,
}) => {
  return (
    <li className=" w-500 flex flex-col bg-greyish h-80 rounded-2xl">
      <div className="flex w-100 flex-col">
        <p className="text-white text-4xl text-center">{title}</p>
        <p className="text-white text-xl text-wrap text-center mt-5">
          {description}
        </p>
      </div>
    </li>
  );
};

export default MiniProjectCard;
