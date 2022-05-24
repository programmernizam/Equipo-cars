import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
  const handelDelete = (id) => {
    const proceed = window.confirm("Are You sure?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
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
      <div className="overflow-x-auto">
        <table className="table w-full text-center">
          <thead>
            <tr>
              <th>Image</th>
              <th>Order Name</th>
              <th>Order Quantity</th>
              <th>Customer name</th>
              <th>Email</th>
              <th>Remove Orders</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="hover">
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-xl">
                      <img src={order.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-bold">{order.name}</p>
                </td>
                <td>
                  <p className="font-bold">{order.quantity}</p>
                </td>
                <td>
                  <p className="font-bold">{order.fullName}</p>
                </td>
                <td>
                  <p className="font-bold">{order.email}</p>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handelDelete(order._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
