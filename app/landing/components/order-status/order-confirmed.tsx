"use client";
import React from "react";
import Image from "next/image";

const OrderConfirmed = () => {
  return (
    <div className="bg-white w-[641px] h-[392px] p-15 flex flex-col justify-center items-center">
      <Image
        src="/icons/icon-order-confirmed.svg"
        alt="icon-order-confirmed"
        width={117}
        height={117}
        className="mb-4"
      />
      <h2 className="font-semibold text-2xl">Order Confirmed !!</h2>
      <p className="text-[16px] text-center mt-2 mb-8">
        We have received your payment, and your order is currently processed by
        our staff, just wait until your favorite sportswear arrive in your home.
        We will contact you in Whatsapp for further shipping updates.
      </p>
    </div>
  );
};

export default OrderConfirmed;
