import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/rFkM551/heroimage.png')] bg-cover bg-center py-52 rounded-2xl">
      <h1 className="text-4xl leading-normal font-bold text-center">
        Rev Up Your Imagination <br />
        <span className="text-[#ECCC70]">Discover</span> a World of Car Toys!
      </h1>
      <p className="text-center max-w-[550px] mx-auto my-5 font-normal text-gray-600">
        Ignite imagination with our car toys! From racers to off-roaders, our
        collection offers endless excitement. Zoom, conquer, and explore with
        joy-inducing toys. Get ready for non-stop fun!
      </p>
      <div className="flex justify-center">
        <button className="btn bg-[#ECCC68] border-none">Explore</button>
      </div>
    </div>
  );
};

export default Hero;
