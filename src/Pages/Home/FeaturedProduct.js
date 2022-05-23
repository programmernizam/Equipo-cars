// import React, { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProducts";
import HomeProduct from "./HomeProduct";

const FeaturedProduct = () => {
  const [products] = useProducts();
  return (
    <section className="p-5">
      <h2 className="text-3xl text-white font-bold">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-5">
        {products.map((product) => (
          <HomeProduct key={product._id} product={product}></HomeProduct>
        )).slice(0,6)}
      </div>
    </section>
  );
};

export default FeaturedProduct;
