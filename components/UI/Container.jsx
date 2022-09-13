import React from "react";

const Container = ({ children }) => {
  return (
    <div className={` container px-2 mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
