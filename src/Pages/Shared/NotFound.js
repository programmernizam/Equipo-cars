import React from "react";

const NotFound = () => {
  return (
    <div
      className="text-center flex justify-center items-center"
      style={{ height: "60vh" }}
    >
      <div>
        <h2 className="text-red-600 text-8xl font-bold">!404</h2>
        <h2 className="text-6xl font-bold">Not Found</h2>
      </div>
    </div>
  );
};

export default NotFound;