import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap flex-start">
      {Array.from({ length: 20 }).map(( _,index) => (
        <div
          key={index}
          className="w-[200px] h-[400px] m-8 bg-gray-300"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
