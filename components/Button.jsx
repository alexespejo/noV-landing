import React from "react";

const Button = ({ children, route = "/" }) => {
  return (
    <>
      <a
        href={route}
        className="btn rounded-4xl text-md py-4 px-16 transition duration-150 ease-out hover:ease-in text-white text-center w-fit hover:bg-violet-700 hover:shadow-lg "
      >
        {children}
      </a>
    </>
  );
};

export default Button;
