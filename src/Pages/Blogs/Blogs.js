import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <section className="bg-accent">
      <h2 className="text-4xl text-white font-bold text-center py-5">Blogs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Blogs;
