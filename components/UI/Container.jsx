import React from "react";

const Container = ({className, children }) => {
  return (
    <div className={`${className} container px-1 lg:px-0  mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
