"use client"; //digunakan untuk side client react wajib ada kalo pake usestate
import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductActions = () => {
  const {push} = useRouter();
  const [qty, setQty] = useState(1); //untuk menyimpan state yang bisa merubah di ui react. reactive programming

  const checkout = () => {
    
  };

  return (
    <div className="flex gap-5">
      <div className="border border-gray-400 inline-flex w-fit min-w-20.5">
        <div className="aspect-square text-xl font-medium border-r border-r-gray-400 flex justify-center items-center">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col">
          <button
            className="border-b border-gray-400 cursor-pointer h-1/2 aspect-square flex justify-center items-center"
            onClick={() => setQty(qty + 1)}
          >
            <FiChevronUp />
          </button>
          <button
            className=" cursor-pointer h-1/2 aspect-square flex justify-center items-center"
            onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
      <Button className="px-20 w-full">
        <FiShoppingBag className="mr-2 " size={24} /> Add to Cart
      </Button>
      <Button variant="dark" className="px-20 w-full" onClick={()=>push("/landing/checkout")}>
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
};

export default ProductActions;
