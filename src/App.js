import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddReviews from "./Pages/Dashboard/AddReviews";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<MyOrder />}></Route>
            <Route path="/profile" element={<MyProfile />}></Route>
            <Route path="/reviews" element={<AddReviews />}></Route>
          </Route>
        </Routes>
      </Header>
    </div>
  );
}

export default App;
