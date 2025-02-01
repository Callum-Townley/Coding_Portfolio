interface GradientButtonCircleProps {
  Logosrc: string;
  onClick?: () => void;
  className?: string;
}

const GradientButtonCircle: React.FC<GradientButtonCircleProps> = ({
  Logosrc,
  onClick,
  className,
}) => {
  return (
    <button
      className={`bg-gradient-glitchgreen text-white font-bold  rounded-full mt-4 ml-3 w-16 h-16 flex items-center justify-center p-2 ${className}`}
      onClick={onClick}
    >
      <img src={Logosrc} />
    </button>
  );
};

export default GradientButtonCircle;
