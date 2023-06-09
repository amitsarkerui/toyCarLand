import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);
  return (
    <div>
      <div className="container mx-auto mb-20">
        <h2 className="text-3xl text-center mt-20 mb-10">Gallery</h2>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
          <img
            className="object-cover h-[350px] rounded-xl"
            src="https://i.ibb.co/Wff7p8z/colorful-car-toys-min.jpg"
            alt=""
            data-aos="fade-right"
          />
          <img
            className="object-cover h-[350px] rounded-xl"
            src="https://i.ibb.co/9qjW45K/red-toy-car-with-christmas-tree-it-bunch-gifts-christmas-tree-background-min.jpg"
            alt=""
            data-aos="fade-up"
          />
          <img
            className="object-cover h-[350px] rounded-xl"
            src="https://i.ibb.co/kqThtCL/still-life-colorful-gummy-bears-1-min.jpg"
            alt=""
            data-aos="fade-up"
          />
          <img
            className="object-cover h-[350px] rounded-xl"
            src="https://i.ibb.co/t3P8wJ5/still-life-colorful-gummy-bears-min.jpg"
            alt=""
            data-aos="fade-left"
          />
          <img
            className="object-cover h-[350px] rounded-xl"
            src="https://i.ibb.co/jWLmRPL/toy-red-car-with-pinecone-top-min.jpg"
            alt=""
            data-aos="fade-right"
          />
          <img
            className="object-cover h-[350px] rounded-xl"
            src="https://i.ibb.co/t2QPfSv/closeup-shot-small-toy-car-wooden-train-track-min.jpg"
            alt=""
            data-aos="fade-up"
          />
          <img
            className="object-cover h-[350px] rounded-xl"
            src="https://i.ibb.co/MnGpBJQ/closeup-shot-toy-red-wooden-train-wooden-table-min.jpg"
            alt=""
            data-aos="fade-up"
          />
          <img
            className="object-cover h-[350px] rounded-xl"
            src="https://i.ibb.co/Th7Dqyz/closeup-small-toy-cars-table-with-small-christmas-trees-background-min.jpg"
            alt=""
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
