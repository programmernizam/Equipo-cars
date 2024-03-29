import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://equipo-cars-server.onrender.com/all-order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handelDelete = (id) => {
    const proceed = window.confirm("Are You sure?");
    if (proceed) {
      const url = `https://equipo-cars-server.onrender.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Item successfully deleted");
          const remaining = orders.filter((item) => item._id !== id);
          setOrders(remaining);
          //   window.location.reload();
        });
      setOrders([]);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {orders.map((order) => (
          <div
            key={order._id}
            className="card card-compact bg-secondary shadow-xl"
          >
            <figure>
              <img className="w-96" src={order.img} alt="Shoes" />
            </figure>
            <div className="card-body text-white text-center">
              <h2 className="card-title  justify-center">{order.name}</h2>
              <p>Customer: {order.fullName}</p>
              <p>Email: {order.email}</p>
              <div className="card-actions justify-center">
                <h3 className="text-md font-bold bg-slate-700 p-1">
                  Order Quantity:{" "}
                  <span className="text-primary">{order.quantity}</span>
                </h3>
                <h3 className="text-md font-bold bg-slate-700 p-1">
                  Total Price:{" "}
                  <span className="text-primary">
                    ${order.total.toFixed(2)}
                  </span>
                </h3>
              </div>
              <div className="card-actions justify-center">
                <button
                  onClick={() => handelDelete(order._id)}
                  className="btn btn-primary rounded-none"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrder;
