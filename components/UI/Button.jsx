import React from "react";


const Button = ({ children , color , link,...rest }) => {
   if(link){
    return (
      <span
      {...rest}
        className={`cursor-pointer py-2 px-4 min-w-min ${color == "green" ? "bg-green-500 hover:bg-green-600" : "" } ${color == "yellow" ? "bg-yellow-500 hover:bg-yellow-600" : "" }  font-medium    transition-colors text-white rounded-lg`}
       
      >
        {children}
      </span>
    );
   } else {
    return (
      <button
      {...rest}
        className={` py-2 px-4 min-w-min ${color == "green" ? "bg-green-500 hover:bg-green-600" : "" } ${color == "yellow" ? "bg-yellow-500 hover:bg-yellow-600" : "" }  font-medium    transition-colors text-white rounded-lg`}
       
      >
        {children}
      </button>
    );
   }
};

export default Button;
