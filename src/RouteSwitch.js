import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import OrderConfirmation from "./OrderConfirmation";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="orderconfirmation" element={<OrderConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
