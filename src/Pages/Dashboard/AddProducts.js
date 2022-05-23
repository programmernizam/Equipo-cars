import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    const url = `http://localhost:5000/parts`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Item successfully added");
        event.target.reset();
      });
  };
  return (
    <div className="w-3/4 mx-auto">
      <h2 className="text-2xl font-bold">Add A Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Product Name"
          class="input input-bordered border-primary w-full max-w-lg my-5"
          {...register("name")}
          required
        />
        <textarea
          type="text"
          placeholder="Description"
          class="input input-bordered border-primary w-full max-w-lg my-5 h-40"
          {...register("text")}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Price"
          class="input input-bordered border-primary w-full max-w-lg my-5"
          {...register("price")}
          required
        />
        <input
          type="number"
          placeholder="Minimum Quantity"
          class="input input-bordered border-primary w-full max-w-lg my-5"
          {...register("minimumQuantity")}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          class="input input-bordered border-primary w-full max-w-lg my-5"
          {...register("quantity")}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          class="input input-bordered border-primary w-full max-w-lg my-5"
          {...register("img")}
          required
        />
        <input
          type="submit"
          className="input btn btn-primary block"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProducts;
