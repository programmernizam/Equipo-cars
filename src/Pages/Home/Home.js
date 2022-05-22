import React from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import FeaturedProduct from "./FeaturedProduct";

const Home = () => {
  return (
    <section className="bg-accent">
      <Banner />
      <Feature />
      <FeaturedProduct />
    </section>
  );
};

export default Home;
