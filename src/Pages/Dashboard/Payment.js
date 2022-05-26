import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const Payment = () => {
  const { orderId } = useParams();
  const url = `http://localhost:5000/orders/${orderId}`;
  const { data: orders, isLoading } = useQuery(["orders", orderId], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-lg text-sky-500 font-bold">
            Hello,{orders.fullName}
          </p>
          <h2 className="card-title">{orders.name}</h2>
          <p>
            Your email: <span className="text-primary">{orders.email}</span>
          </p>
          <p>
            Total Items:{" "}
            <span className="text-primary">{orders.quantity} Pic</span>
          </p>
          <h3>
            Price:{" "}
            <span className="text-primary font-bold">
              ${orders.total.toFixed(2)}
            </span>
          </h3>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
