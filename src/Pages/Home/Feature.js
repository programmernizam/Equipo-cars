import React from "react";
import feature_1 from "../../assets/home_feature/feature_1.jpeg";
import feature_2 from "../../assets/home_feature/feature_2.jpeg";
import feature_3 from "../../assets/home_feature/feature_3.jpeg";
const Feature = () => {
  return (
    <section className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <img src={feature_1} alt="" />
        <img src={feature_2} alt="" />
        <img src={feature_3} alt="" />
      </div>
    </section>
  );
};

export default Feature;
