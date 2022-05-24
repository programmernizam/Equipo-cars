import { toast } from "react-toastify";
import useOrders from "../../Hooks/useOrders";

const ManageAllOrder = () => {
  const [orders, setOrders] = useOrders();
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
        <table className="table-content text-center">
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
                    <div className="w-10 rounded-xl">
                      <img src={order.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-bold text-xs">{order.name}</p>
                </td>
                <td>
                  <p className="font-bold text-xs">{order.quantity}</p>
                </td>
                <td>
                  <p className="font-bold text-xs">{order.fullName}</p>
                </td>
                <td>
                  <p className="font-bold text-xs">{order.email}</p>
                </td>
                <td>
                  <button
                    className="btn btn-primary rounded-none btn-xs"
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

export default ManageAllOrder;
