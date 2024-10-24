import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Transactions from "./pages/Transactions";
import Messages from "./pages/Messages"; // Assuming this is the product detail page
import ProductDetails from "./pages/ProductDetails";
import CustomerDetails from "./pages/CustomerDetails";


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Product />} />
            {/* Dynamic route for product details */}
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="/customer/:id" element={<CustomerDetails />} />
            {/* Dynamic route for product details */}
            <Route path="messages" element={<Messages />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}
