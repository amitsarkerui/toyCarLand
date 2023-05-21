import React from "react";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Category from "./Category";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const allToys = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Category allToys={allToys}></Category>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
