interface ButtonProps {
  label: string;
  variant: "back" | "next" | "purple";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant, onClick }) => {
  const baseClasses = "px-4 py-2 rounded-md font-semibold";
  const variantClasses =
    variant === "back"
      ? "border border-orange-500 text-orange-500 bg-white hover:bg-orange-500 hover:text-white"
      : variant === "purple"
      ? "bg-purple-900 text-white hover:bg-purple-600"
      : "bg-orange-500 text-white hover:bg-orange-600";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
