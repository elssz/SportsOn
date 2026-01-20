"use client"; //perlu ini kalau butuh usestate
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  // 1. Tambahkan state untuk melacak menu yang sedang aktif
  const [activeMenu, setActiveMenu] = useState("Home");

  // Daftar menu agar kode lebih bersih (DRY - Don't Repeat Yourself)
  const menus = [
    { name: "Home", href: "#" },
    { name: "Category", href: "#" },
    { name: "Explore Products", href: "#" },
  ];

  return (
    <header>
      <div className="flex justify-between gap-10 container mx-auto py-7">
        <Image
          src="/images/logo.svg"
          alt="SportOn Logo"
          width={127}
          height={30}
        />
        {/* menu */}
        <nav className="flex gap-44 font-medium">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              onClick={() => setActiveMenu(menu.name)}
              className={`group relative py-2 transition-all ${
                activeMenu === menu.name
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {menu.name}
              {/* Garis Bawah: Muncul jika aktif ATAU saat di-hover */}
              <span
                className={`absolute bottom-0 left-1/2 h-0.75 -translate-x-1/2 bg-primary transition-all duration-300 rounded-full ${
                  activeMenu === menu.name ? "w-1/2" : "w-0 group-hover:w-1/2"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="relative justify-center content-center items-center flex gap-10">
          <FiSearch size={24} />
          <button
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag size={24} />
            <div className="bg-primary rounded-full w-3.5 h-3.5 absolute z-10 -top-1 -right-1 text-[10px] text-white justify-center flex items-center">
              3
            </div>
          </button>
          {isCartPopupOpen && <CartPopup />}
        </div>
      </div>
    </header>
  );
};

export default Header;
