import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OTPAuth from "@/pages/OTPAuth";
import UserDashboard from "@/pages/UserDashboard";
import VendorDashboard from "@/pages/VendorDashboard";
import VendorRegister from "@/pages/VendorRegister";
import VendorServices from "@/pages/VendorServices";
import AdminDashboard from "@/pages/AdminDashboard";
import PaymentSuccess from "@/pages/PaymentSuccess";
import ClothRentals from "@/pages/ClothRentals";
import ShoppingOrders from "@/pages/ShoppingOrders";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Toaster position="top-center" richColors />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:id" element={<ServiceDetail />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="auth" element={<OTPAuth />} />
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="vendor/dashboard" element={<VendorDashboard />} />
              <Route path="vendor/register" element={<VendorRegister />} />
              <Route path="vendor/services" element={<VendorServices />} />
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="payment-success" element={<PaymentSuccess />} />
              <Route path="cloth-rentals" element={<ClothRentals />} />
              <Route path="shopping-orders" element={<ShoppingOrders />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
