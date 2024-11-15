import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col w-full gap-4 items-center p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
        Star Wars
      </h1>
      <p className="text-base md:text-lg text-center text-white">
        A long time ago in a galaxy far, far away...
      </p>
      <p className="text-base md:text-lg text-center text-white">
        There are some planets to take a look at...
      </p>
    </div>
  );
};

export default Hero;