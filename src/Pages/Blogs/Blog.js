import React from "react";

const Blog = ({ blog }) => {
  const { name, img, text } = blog;
  return (
    <div class="card card-compact bg-secondary shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{name}</h2>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export default Blog;
