"use client";

import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

const MobileMenu = () => {
  const menuData = [
    { title: "Dashboard", icon: <MdDashboard />, link: "/" },
    { title: "Product", icon: <AiFillProduct />, link: "/product" },
    { title: "Orders", icon: <TiShoppingCart />, link: "/orders" },
    { title: "Settings", icon: <IoSettingsSharp />, link: "/settings" },
  ];
  return (
    <div className=" w-[70%]  bg-blue-500 shadow-md min-h-screen sticky top-0 z-40">
      {menuData.map((item) => (
        <div
          key={item?.title}
          className=" flex items-center justify-center text-xl font-semibold gap-y-2 my-3"
        >
          <Link href={item?.link}>
            <p className=" flex items-center justify-center gap-x-1 text-white font-semibold">
              {item?.icon}
              <span>{item?.title}</span>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
