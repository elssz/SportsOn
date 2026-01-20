
"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/button";
import { LuRefreshCw } from "react-icons/lu";

const OrderSubmitted = () => {
 
    const reloadOrderStatus = () => {
      window.location.reload();
    }

  return (
    <div className="bg-white w-160.25 h-114 p-15 flex flex-col justify-center items-center">
      <Image
        src="/icons/icon-order-submitted.svg"
        alt="icon-order-submitted"
        width={117}
        height={117}
        className="mb-4"
      />
      <h2 className="font-semibold text-2xl">Order Submitted !!</h2>
      <p className="text-[16px] text-center mt-2 mb-8">
        Your Order is recorded in our system, we are still confirming the
        payment status, please wait and your order status will be updated in
        less than 12 hours.
      </p>
      <Button variant="dark" className="w-[411px] h-[54px]" onClick={reloadOrderStatus}>
        <LuRefreshCw />
        Refrech Order Status
      </Button>
    </div>
  );
};

export default OrderSubmitted;
