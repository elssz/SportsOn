"use client";
import React, { useState } from "react";
import OrderSubmitted from "../../components/order-status/order-submitted";
import OrderConfirmed from "../../components/order-status/order-confirmed";

const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  return (
    <main className="bg-gray-200 min-h-[80vh] flex">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-10">Order Status</h1>
        {
          isConfirmed ? <OrderConfirmed/> : <OrderSubmitted/>
        }
      </div>
    </main>
  );
};

export default OrderStatus;
