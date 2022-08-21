import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReviews = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    const url = `http://localhost:5000/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Review successfully added");
        event.target.reset();
      });
  };
  return (
    <div className="w-3/4 mx-auto">
      <h2 className="text-2xl font-bold">Add Reviews</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered border-primary w-full max-w-xl my-5 form-control"
          {...register("name")}
          required
        />
        <textarea
          type="text"
          placeholder="Description"
          className="input input-bordered border-primary w-full max-w-xl my-5 h-40 form-control"
          {...register("text")}
          required
        ></textarea>
        <input
          type="text"
          placeholder="City"
          className="input input-bordered border-primary w-full max-w-xl my-5 form-control"
          {...register("city")}
          required
        />
        <input
          type="text"
          placeholder="Your Image URL"
          className="input input-bordered border-primary w-full max-w-xl my-5 form-control"
          {...register("img")}
          required
        />
        <input
          type="submit"
          className="input btn btn-primary block"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddReviews;
