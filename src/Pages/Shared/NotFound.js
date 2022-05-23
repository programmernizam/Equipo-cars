import React from "react";
import notFound from "../../assets/not_found.jpg";
const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img className="max-w-full max-h-screen" src={notFound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
