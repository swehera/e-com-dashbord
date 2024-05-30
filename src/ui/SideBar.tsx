"use client";
import { useState } from "react";
import { RiMenuFold3Fill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { IoSettingsSharp } from "react-icons/io5";
import { RiMenuFold4Fill } from "react-icons/ri";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(pathname);
  const [isOpen, setIsOpen] = useState(false);

  const menuData = [
    { title: "Dashboard", icon: <MdDashboard />, link: "/" },
    { title: "Product", icon: <AiFillProduct />, link: "/product" },
    { title: "Orders", icon: <TiShoppingCart />, link: "/orders" },
    { title: "Settings", icon: <IoSettingsSharp />, link: "/settings" },
  ];

  console.log("This is check", isOpen);
  console.log("This is path name", pathname);

  return (
    <div className="min-h-screen hidden md:block shadow-md">
      {isOpen ? (
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            ease: "easeIn",
            duration: 1,
          }}
          className="w-full  px-4 py-5  "
        >
          <div className="flex items-center justify-between  py-3 px-1">
            <Link href="/" className=" mx-2 cursor-pointer">
              <p className=" font-semibold text-blue-500">Logo</p>
            </Link>
            <RiMenuFold4Fill
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl font-semibold text-gray-400 cursor-pointer"
            />
          </div>

          {/* menu data work start */}
          <div
          // className={`${
          //   pathname === "/login" || pathname === "register"
          //     ? " hidden"
          //     : "block"
          // }`}
          >
            {menuData.map((item) => (
              <div key={item.title} className="text-xl">
                <Link href={item.link}>
                  <div
                    onClick={() => setActiveSection(item.link)}
                    className={`flex items-center justify-center gap-x-3 my-2 py-1 px-3 rounded-md hover:shadow-md duration-300 cursor-pointer ${
                      pathname === "/login" ||
                      pathname === "/register" ||
                      pathname === "/profile"
                        ? "bg-[#EFEFEF]"
                        : activeSection === item.link
                        ? "bg-blue-600 text-white "
                        : "bg-[#EFEFEF] "
                    }`}
                  >
                    <p className=" text-4xl ">{item.icon}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        <div>
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              ease: "easeIn",
              duration: 1,
            }}
            className="w-full  px-4 py-5 "
          >
            <div className="flex items-center justify-between  py-3 px-1">
              <Link
                href="/"
                className="flex flex-col items-center cursor-pointer"
              >
                <p className="text-xl font-semibold text-blue-500">Logo</p>
                <p className="text-sm text-gray-600 font-semibold">Tagline</p>
              </Link>
              <RiMenuFold3Fill
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl font-semibold text-gray-400 cursor-pointer"
              />
            </div>

            {/* menu data work start */}
            <div className="">
              {menuData.map((item) => (
                <div key={item.title} className="text-xl">
                  <Link href={item.link}>
                    <div
                      onClick={() => setActiveSection(item.link)}
                      className={`flex items-center gap-x-3 my-2 py-1 px-3 rounded-md hover:shadow-md duration-300 cursor-pointer ${
                        pathname === "/login" ||
                        pathname === "/register" ||
                        pathname === "/profile"
                          ? "bg-[#EFEFEF]"
                          : activeSection === item.link
                          ? "bg-blue-600 text-white"
                          : "bg-[#EFEFEF] "
                      }`}
                    >
                      <span>{item.icon}</span>
                      <p>{item.title}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
