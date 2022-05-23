import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useProductDetails from "../../Hooks/useProductDetails";
import Footer from "../Shared/Footer";

const PurchaseItem = () => {
  const { itemId } = useParams();
  const [item] = useProductDetails(itemId);
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section>
      <div className="card lg:card-side bg-accent shadow-xl flex p-5 rounded-none">
        <figure>
          <img className="flex-1" src={item.img} alt="Album" />
        </figure>
        <div className="card-body text-white flex-1">
          <h2 className="card-title text-primary">{item.name}</h2>
          <p>{item.text}</p>
          <div className="card-actions justify-start">
            <h3 className="text-md font-bold bg-slate-700 p-1">
              Per product: <span className="text-primary">${item.price}</span>
            </h3>
            <h3 className="text-md font-bold bg-slate-700 p-1">
              In Stocks: <span className="text-primary">{item.quantity}</span>
            </h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="input w-full max-w-xs rounded-none text-secondary font-bold"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                placeholder="Full Name"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-primary font-bold">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <input
                className="input w-full max-w-xs rounded-none text-secondary font-bold"
                type="email"
                {...register("emailAddress", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
                placeholder="Email Address"
              />
              <label className="label">
                {errors.emailAddress?.type === "required" && (
                  <span className="label-text-alt text-primary font-bold">
                    {errors.emailAddress.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-primary font-bold">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <input
                className="input w-full max-w-xs rounded-none text-secondary font-bold"
                type="text"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is required",
                  },
                })}
                placeholder="Address"
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-primary font-bold">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <input
                className="input w-full max-w-xs rounded-none text-secondary font-bold"
                type="tel"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                })}
                placeholder="Phone Number"
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-primary font-bold">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <input
                className="input w-full max-w-xs rounded-none text-secondary font-bold"
                type="number"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is required",
                  },
                  min: {
                    value: 100,
                    message: "Minimum quantity required upper 100",
                  },
                  max: {
                    value: 150,
                    message: "Maximum quantity required lower 150",
                  },
                })}
                placeholder="Quantity"
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-primary font-bold">
                    {errors.quantity.message}
                  </span>
                )}
                {errors.quantity?.type === "min" && (
                  <span className="label-text-alt text-primary font-bold">
                    {errors.quantity.message}
                  </span>
                )}
                {errors.quantity?.type === "max" && (
                  <span className="label-text-alt text-primary font-bold">
                    {errors.quantity.message}
                  </span>
                )}
              </label>
            </div>
            <input
              className="btn btn-primary rounded-none"
              type="submit"
              value="Buy Now"
            />
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PurchaseItem;
