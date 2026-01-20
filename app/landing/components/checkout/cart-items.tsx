
"use client";
import { Cartlist } from "../ui/cart-popup";
import Image from "next/image";
import Button from "../ui/button";
import priceFormatter from "@/app/utils/price-formatter";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiArrowRight, FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/navigation";



const CartItems = () => {
  const {push} = useRouter();
  const totalPrice = Cartlist.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const payment = () =>{

  }


  return (
    <CardWithHeader title="Cart Items">
        <div className="overflow-auto max-h-96">
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
        </div>
        <div className="border-t border-gray-200 p-4 ">
          <div className="flex justify-between">
            <div className="font-semibold text-sm">Total</div>
            <div className="text-primary font-semibold text-xs">
              {priceFormatter(totalPrice)}
            </div>
          </div>
          <Button variant="dark" size="normal" className="w-full mt-4" onClick={()=>push("/landing/payment")}>
            Proceed to Payment <FiCreditCard />
          </Button>
        </div>
    </CardWithHeader>
  );
};

export default CartItems;
