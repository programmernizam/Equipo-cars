import React from "react";
import { useNavigate } from "react-router-dom";

const HomeProduct = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, img, text, price, minimumQuantity, quantity } = product;
  const navigateItems = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <section>
      <div className="card card-compact bg-secondary shadow-xl">
        <figure>
          <img className="w-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-white">
          <div className="card-actions justify-start">
            <h3 className="text-md font-bold bg-slate-700 p-1">
              Per product: <span className="text-primary">${price}</span>
            </h3>
            <h3 className="text-md font-bold bg-slate-700 p-1">
              In Stocks: <span className="text-primary">{quantity}</span>
            </h3>
          </div>
          <div className="card-actions justify-start">
            <h3 className="text-md font-bold bg-slate-700 p-1">
              Minimum Order:{" "}
              <span className="text-primary">{minimumQuantity}</span>
            </h3>
          </div>
          <h2 className="card-title">{name}</h2>
          <p title={text}>{text.slice(0, 87)}</p>
          <div className="card-actions justify-start">
            <button
              className="btn btn-primary rounded-none"
              onClick={() => navigateItems(_id)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
