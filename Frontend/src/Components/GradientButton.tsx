import React from "react";

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <button
      className={`bg-gradient-glitchgreen text-white text-xl px-5 rounded mt-4 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GradientButton;
