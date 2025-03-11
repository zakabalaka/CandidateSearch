import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "primary" }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: type === "primary" ? "#007bff" : "#6c757d",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        margin: "5px",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
