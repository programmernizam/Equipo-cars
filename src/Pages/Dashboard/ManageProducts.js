import React from "react";
import { toast } from "react-toastify";
import useProducts from "../../Hooks/useProducts";

const ManageProducts = () => {
  const [products, setProducts] = useProducts();
  const handelDelete = (id) => {
    const proceed = window.confirm("Are You sure?");
    if (proceed) {
      const url = `https://calm-oasis-76291.herokuapp.com/parts/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Item successfully deleted");
          const remaining = products.filter((item) => item._id !== id);
          setProducts(remaining);
          //   window.location.reload();
        });
      setProducts([]);
    }
  };
  return (
    <section className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <div
            key={product._id}
            className="card card-compact bg-secondary shadow-xl"
          >
            <figure>
              <img className="w-full" src={product.img} alt="Shoes" />
            </figure>
            <div className="card-body text-white">
              <div className="card-actions justify-start">
                <h3 className="text-md font-bold bg-slate-700 p-1">
                  Per product:{" "}
                  <span className="text-primary">${product.price}</span>
                </h3>
                <h3 className="text-md font-bold bg-slate-700 p-1">
                  In Stocks:{" "}
                  <span className="text-primary">{product.quantity}</span>
                </h3>
              </div>
              <h2 className="card-title">{product.name}</h2>
              <div className="card-actions justify-start">
                <button
                  className="btn btn-primary btn-sm rounded-none"
                  onClick={() => handelDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManageProducts;
