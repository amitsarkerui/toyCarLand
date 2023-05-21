import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-[url('https://i.ibb.co/rFkM551/heroimage.png')] bg-cover bg-center py-52 rounded-2xl">
      <h1
        className="text-4xl leading-normal font-bold text-center"
        data-aos="fade-up"
      >
        Rev Up Your Imagination <br />
        <span className="text-[#ECCC70]">Discover</span> a World of Car Toys!
      </h1>
      <p
        className="text-center max-w-[550px] mx-auto my-5 font-normal text-gray-600"
        data-aos="fade-up"
      >
        Ignite imagination with our car toys! From racers to off-roaders, our
        collection offers endless excitement. Zoom, conquer, and explore with
        joy-inducing toys. Get ready for non-stop fun!
      </p>
      <div className="flex justify-center" data-aos="fade-up">
        <button className="btn bg-[#ECCC68] border-none">Explore</button>
      </div>
    </div>
  );
};

export default Hero;
