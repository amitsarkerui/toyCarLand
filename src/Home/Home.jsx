import React, { useEffect } from "react";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Category from "./Category";
import { useLoaderData } from "react-router-dom";
import Newsletter from "./Newsletter";
import Video from "./video";
import PageTitle from "../PageTitle";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const allToys = useLoaderData();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <Hero></Hero>
      <Category allToys={allToys}></Category>
      <Gallery></Gallery>
      <Video></Video>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
