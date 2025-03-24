import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Signup from "./Signup";
import Homepage from "./Homepage";
import Cart from './Cart.jsx';
import { CartProvider } from "./CartContext";  // ✅ Ensure this path is correct

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>  {/* ✅ Wrap Router with CartProvider */}
      <Router>  
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>  
    </CartProvider>
  </StrictMode> 
);


