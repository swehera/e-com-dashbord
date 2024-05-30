"use client";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { ProfileImage } from "@/image";
import { RiMenu3Fill } from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { PiSignInFill } from "react-icons/pi";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const [profile, setProfile] = useState(false);
  const [menu, setMenu] = useState(false);

  const menuData = [
    { title: "Dashboard", icon: <MdDashboard />, link: "/" },
    { title: "Product", icon: <AiFillProduct />, link: "/product" },
    { title: "Orders", icon: <TiShoppingCart />, link: "/orders" },
    { title: "Settings", icon: <IoSettingsSharp />, link: "/settings" },
  ];

  console.log("This is profile check", profile);
  console.log("This is menu check", menu);
  console.log("This is logged data check", session?.user);

  return (
    <div className=" sticky top-0 z-50 bg-white">
      <div className=" w-full flex items-center justify-center  h-16 border-b border-gray-200 relative">
        <div className=" px-3 py-1   w-[96%] ">
          <div className=" flex items-center justify-between">
            {/* mobile device logo start */}
            <Link href={"/"} className=" block md:hidden">
              <p className=" text-blue-500 text-[24px] font-bold">Logo</p>
            </Link>
            {/* mobile device logo end */}
            <div className=" w-[70%] hidden md:block">
              <div className=" flex items-center gap-x-2 bg-white py-1 px-3 rounded-md border border-gray-400">
                <IoSearchSharp className=" text-2xl text-gray-400 " />
                <input
                  type="text"
                  placeholder="search here"
                  className=" flex-1 outline-0 py-1 px-3  "
                />
              </div>
            </div>

            {/* accoutn setting work start */}
            <div className=" flex items-center gap-x-1 cursor-pointer">
              {/* notifications work start */}
              <div className=" mx-3 hidden md:block">
                <IoNotifications className=" text-[20px] text-gray-500" />
              </div>

              {session?.user ? (
                <div className=" hidden md:block">
                  <div
                    onClick={() => setProfile(!profile)}
                    className="rounded-full cursor-pointer flex items-center justify-center gap-x-1 relative"
                  >
                    <Image
                      src={session?.user?.image!}
                      alt="profile-image"
                      width={100}
                      height={100}
                      className=" w-10 h-10 rounded-full"
                    />
                    <FaChevronDown className="  text-[16px] text-gray-500 mt-1" />
                  </div>
                </div>
              ) : (
                <div className=" hidden md:block">
                  <div
                    onClick={() => setProfile(!profile)}
                    className="rounded-full cursor-pointer flex items-center justify-center gap-x-1 relative"
                  >
                    <Image
                      src={ProfileImage}
                      alt="profile-image"
                      width={100}
                      height={100}
                      className=" w-10 h-10 rounded-full"
                    />
                    <FaChevronDown className="  text-[16px] text-gray-500 mt-1" />
                  </div>
                </div>
              )}

              {profile && (
                <div className=" absolute top-14 right-3 bg-blue-500 shadow-md px-10 py-2 rounded-md text-white font-semibold">
                  {session?.user ? (
                    <>
                      <Link
                        href={"/profile"}
                        className=" flex items-center gap-x-1 py-1  my-1"
                      >
                        <MdAccountCircle className=" text-xl" />
                        Profile{" "}
                      </Link>
                      <p
                        onClick={() => signOut()}
                        className=" flex items-center gap-x-1 py-1  my-1"
                      >
                        <IoMdLogOut className=" text-xl" />
                        Logout
                      </p>
                    </>
                  ) : (
                    <Link
                      href={"/login"}
                      className=" flex items-center gap-x-1 py-1  my-1"
                    >
                      <PiSignInFill className=" text-xl" />
                      Login
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* mobile account sign in or signout work start */}
        {session?.user ? (
          <div className=" block md:hidden">
            <div
              onClick={() => setProfile(!profile)}
              className="rounded-full cursor-pointer flex items-center justify-center gap-x-1 relative"
            >
              <Image
                src={session?.user?.image!}
                alt="profile-image"
                width={100}
                height={100}
                className=" w-10 h-8 rounded-full"
              />
            </div>
          </div>
        ) : (
          <Link href={"/login"} className=" block md:hidden">
            <p className=" text-sm text-gray-500 font-semibold   flex items-center gap-x-1">
              login <span>{">"}</span>
              <span>
                <MdAccountCircle className=" text-2xl" />
              </span>
            </p>
          </Link>
        )}

        {/* mobile account sign in or signout work end */}
        {/* notifications work start */}
        <div className=" mx-3 block md:hidden">
          <IoNotifications className=" text-[20px] text-gray-500" />
        </div>
        {/* mobile menubar work start here */}
        <div
          onClick={() => setMenu(!menu)}
          className=" block md:hidden cursor-pointer mr-2"
        >
          <div>
            <RiMenu3Fill className=" text-3xl text-gray-500" />
          </div>
        </div>
        {/* mobile menubar work end here */}
        {menu && (
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              ease: "easeIn",
              duration: 1,
            }}
            onClick={() => setMenu(!menu)}
            className=" w-full min-h-screen bg-gray-900/35  absolute  top-16 flex items-center justify-end"
          >
            <MobileMenu />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Header;
