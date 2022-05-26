import React from "react";

const Blog = ({ blog }) => {
  const { name, img, text } = blog;
  return (
    <div className="card card-compact bg-secondary shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{name}</h2>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export default Blog;
