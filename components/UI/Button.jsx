import React from "react";

const Button = ({ children , color,...rest }) => {
  if(color === "green") {
    return (
      <button
      {...rest}
        className={`py-2 px-4 min-w-min  font-medium bg-green-500 hover:bg-green-600   transition-colors text-white rounded-lg`}
       
      >
        {children}
      </button>
    );
  }else if(color === "yellow"){
    return (
      <button
        {...rest}
        className={`py-2 px-4  min-w-min font-medium bg-yellow-500 hover:bg-yellow-600   transition-colors text-white rounded-lg`}
      >
        {children}
      </button>
    );
  }
};

export default Button;
