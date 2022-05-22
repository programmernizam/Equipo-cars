import React from "react";

const ServiceCard = ({img, serviceBg, title, text}) => {
  return (
    <div className={`card card-side shadow-xl py-4 ${serviceBg}`}>
      <figure>
        {img}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
