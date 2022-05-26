import React from "react";
const Website = ({ website }) => {
  const { img, name, text, link, technology } = website;
  return (
    <div className="card lg:card-side shadow-xl rounded-none">
      <figure>
        <img className="w-full lg:w-96" src={img} alt="Album" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">
          Website Name: <span className="text-primary">{name}</span>
        </h2>
        <p>{text}</p>
        <h3>
          <span className="text-primary text-xl">Technology Use: </span>
          {technology}
        </h3>
        <div className="card-actions justify-start">
          <a href={link} target="_blank">
            <button className="btn btn-primary">Live Link</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Website;
