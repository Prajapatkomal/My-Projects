import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./index.css";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./pages/PageNotFound";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Order from "./pages/Admin/Order";
import Products from "./pages/Admin/Products";
import CreateProduct from "./pages/Admin/CreateProduct";
import CreateCategory from "./pages/Admin/CreateCategory";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import SearchProduct from "./pages/SearchProduct/SearchProduct";
import CartPage from "./pages/CartPage/CartPage";
import { UserDashBoard } from "./pages/Profile/UserDashBoard";
import UserOrders from "./pages/Profile/UserOrders";
import { ProductPage } from "./pages/ProductPage/ProductPage";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashBoard />} />
        <Route path="/user-orders" element={<UserOrders />} />
        <Route path="/:category" element={<ProductPage />} />
        <Route path="/search-product/:keyword" element={<SearchProduct />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/admin/createProduct" element={<CreateProduct />} />
        <Route path="/admin/updateProduct/:id" element={<UpdateProduct />} />
        <Route path="/admin/createCategory" element={<CreateCategory />} />
        <Route path="/admin/orders" element={<Order />} />
        <Route path="/admin/products" element={<Products />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />

    
    </>
  );
}

export default App;
