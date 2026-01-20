//disini gapake useclient karena parent ini udh pake

import Image from "next/image";
import Button from "./button";
import priceFormatter from "@/app/utils/price-formatter";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation";


export const Cartlist = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    qty: 3,
    imgUrl: "/products/product-1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    qty: 2,
    imgUrl: "/products/product-2.png",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    qty: 3,
    imgUrl: "/products/product-1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    qty: 2,
    imgUrl: "/products/product-2.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    qty: 2,
    imgUrl: "/products/product-2.png",
  },
];

const CartPopup = () => {
  const {push} = useRouter();
  const checkOut = () =>{
    push("/landing/checkout")
  }

  const totalPrice = Cartlist.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );
  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/5 border border-gray-200 w-90 z-10">
      <div className="p-4 border-b border-gray-200 text-center font-bold">
        Shopping Cart
      </div>
      {Cartlist.map((item, index) => (
        <div
          className="border-b border-gray-200 font-bold text-center gap-3 pt-4 pb-4 pl-3.5 flex"
          key={index}
        >
          <div className="bg-dark/3 aspect-square w-16 h-16">
            <Image
              src={item.imgUrl}
              alt={item.name}
              width={63}
              height={63}
              className="aspect-square object-contain w-full"
            />
          </div>
          <div className=" text-left w-full font-medium justify-center content-center items-center">
            <div className="text-[14px]">{item.name}</div>
            <div className="flex gap-3">
              <div className="text-[12px]">{item.qty}x</div>
              <div className="text-primary text-[12px] ml-2">
                {priceFormatter(item.price)}
              </div>
            </div>
          </div>
          <Button
            size="small"
            variant="ghost"
            className="w-20 h-7 p-0! flex self-center ml-auto"
          >
            <FaRegTrashAlt />
          </Button>
        </div>
      ))}
      <div className="border-t border-gray-200 p-4 ">
        <div className="flex justify-between">
          <div className="font-semibold text-sm">Total</div>
          <div className="text-primary font-semibold text-xs">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          size="small"
          className="w-full mt-4"
          onClick={checkOut}
        >
          Checkout Now <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;
