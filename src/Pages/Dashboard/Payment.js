import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3dloIVvYdDMgfbVD06ehHbOnJCIpU9wVn1UrfA7Wd8oVkMKbJMxNKU6dqY16Po4zidd2uygl4umfqJNCtcvpZl00POpD5Wzs"
);
const Payment = () => {
  const { orderId } = useParams();
  const url = `https://equipo-cars-server.onrender.com/orders/${orderId}`;
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
          <h4>
            Your email: <span className="text-primary">{orders.email}</span>
          </h4>
          <h4>
            Total Items:{" "}
            <span className="text-primary">{orders.quantity} Pic</span>
          </h4>
          <h3>
            Price:{" "}
            <span className="text-primary font-bold">
              ${orders.total.toFixed(2)}
            </span>
          </h3>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl my-2">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm orders={orders} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
