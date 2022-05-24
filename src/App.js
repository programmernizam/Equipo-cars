import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddReviews from "./Pages/Dashboard/AddReviews";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProducts from "./Pages/Dashboard/AddProducts";
import NotFound from "./Pages/Shared/NotFound";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import PurchaseItem from "./Pages/Products/PurchaseItem";
import Blogs from "./Pages/Blogs/Blogs";
import AdminRoute from "./Components/Routes/AdminRoute";
import ManageAllOrder from "./Pages/Dashboard/ManageAllOrder";
import ManageProducts from "./Pages/Dashboard/ManageProducts";

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route element={<RequireAuth />}>
            <Route path="/item/:itemId" element={<PurchaseItem />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<MyOrder />} />
              <Route path="my_profile" element={<MyProfile />} />
              <Route path="add_review" element={<AddReviews />} />
              <Route element={<AdminRoute />}>
                <Route path="add_product" element={<AddProducts />} />
                <Route path="manage_order" element={<ManageAllOrder />} />
                <Route path="manage_product" element={<ManageProducts />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Header>
      <ToastContainer />
    </div>
  );
}

export default App;
