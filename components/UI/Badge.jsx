import React from "react";

const Badge = ({ children, color }) => {
  return (
    <div
      className={`py-1 px-3 shadow-md font-medium text-sm  ${
        color === "green" && "bg-green-500"
      } ${
        color === "blue" && "bg-blue"
      } ${
        color === "white" && "bg-white"
      }  transition-colors text-white rounded-md`}
      
    >
      {children}
    </div>
  );
};

export default Badge;
