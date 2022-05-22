import React from "react";


const SummaryCard = ({ icon, title, text }) => {
  return (
    <div className="card card-compact border-primary border-2 py-8">
      <figure>
        <span>{icon}</span>
      </figure>
      <div className="card-body text-center">
        <h2 className="text-white text-4xl font-bold">
          {title}+
        </h2>
        <h3 className="text-2xl text-primary font-bold">{text}</h3>
      </div>
    </div>
  );
};

export default SummaryCard;
