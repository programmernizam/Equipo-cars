import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Feature from "./Feature";
import FeaturedProduct from "./FeaturedProduct";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  return (
    <section className="bg-accent">
      <Banner />
      <Feature />
      <FeaturedProduct />
      <Services />
      <BusinessSummary />
      <Reviews />
      <Footer />
    </section>
  );
};

export default Home;
