import { BrowserRouter, Route, Routes } from "react-router";

import ScrollTop from "./ui/ScrollTop";
import ProtectRoutes from "./ui/ProtectRoutes";

import MainLayout from "./layouts/MainLayout";
import DashLayout from "./layouts/DashLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import UsersDash from "./pages/UsersDash";
import OrdersDash from "./pages/OrdersDash";
import EditProduct from "./pages/EditProduct";
import ProductsDash from "./pages/ProductsDash";
import SettingsDash from "./pages/SettingsDash";
import CreateProduct from "./pages/CreateProduct";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
        </Route>

        <Route
          path="dashboard"
          element={
            <ProtectRoutes>
              <DashLayout />
            </ProtectRoutes>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductsDash />} />
          <Route path="products/new" element={<CreateProduct />} />
          <Route path="products/:id/edit" element={<EditProduct />} />
          <Route path="orders" element={<OrdersDash />} />
          <Route path="users" element={<UsersDash />} />
          <Route path="settings" element={<SettingsDash />} />
        </Route>

        <Route path="login" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
