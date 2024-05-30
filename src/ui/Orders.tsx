"use client";

import { FaFire, FaRegEye } from "react-icons/fa";
import { FaBangladeshiTakaSign, FaCircleInfo } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoMdCart } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";
import OrderData from "../data/orderInfo.json";
import { useState } from "react";

console.log("This is order info", OrderData);

const Orders = () => {
  //state for search option
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className=" flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-semibold my-3">All orders info</h1>
        <div className="flex items-center justify-center w-[90%] my-1">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search customer name"
            className=" flex-1 py-1 px-3 rounded-md outline-none border border-gray-500"
          />
        </div>
        <div className=" w-[90%] overflow-auto">
          <table className="w-full whitespace-nowrap">
            <tr>
              <th className=" p-[8px] text-left border border-gray-800 ">
                <p className=" flex items-center gap-x-2 text-gray-500">
                  <HiMiniUserGroup className=" text-2xl text-blue-500" />
                  <span> Customer</span>
                </p>
              </th>
              <th className=" p-[8px] text-left border border-gray-800 ">
                <p className=" flex items-center gap-x-2 text-gray-500">
                  <IoTimerOutline className=" text-2xl text-blue-500" />
                  <span>Sell Time</span>
                </p>
              </th>
              <th className=" p-[8px] text-left border border-gray-800 ">
                <p className=" flex items-center gap-x-2 text-gray-500">
                  <FaFire className=" text-2xl text-blue-500" />
                  <span>Status</span>
                </p>
              </th>
              <th className=" p-[8px] text-left border border-gray-800 ">
                <p className=" flex items-center gap-x-2 text-gray-500">
                  <IoMdCart className=" text-2xl text-blue-500" />
                  <span>Product Name</span>
                </p>
              </th>
              <th className=" p-[8px] text-left border border-gray-800 ">
                <p className=" flex items-center gap-x-2 text-gray-500">
                  <FaBangladeshiTakaSign className=" text-2xl text-blue-500" />
                  <span>Amount</span>
                </p>
              </th>
              <th className=" p-[8px]  border border-gray-800 ">
                <p className=" flex items-center justify-center gap-x-2 text-gray-500 ">
                  <FaCircleInfo className=" text-2xl text-blue-500" />
                  <span>Details</span>
                </p>
              </th>
              {/* <th className=" p-[8px] text-left border border-gray-800 ">
                Quantity
              </th>
              <th className=" p-[8px] text-center border border-gray-800 ">
                Edit
              </th> */}
            </tr>
            {OrderData.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item?.customer_name
                    .toLowerCase()
                    .includes(search.toLowerCase());
            }).map((item) => (
              <tr key={item?.id}>
                <td className=" p-[8px] text-left border border-gray-800 ">
                  {item?.customer_name}
                </td>
                <td className=" p-[8px] text-left border border-gray-800 ">
                  {item?.order_time}
                </td>
                <td className=" p-[8px] text-left border border-gray-800 ">
                  {item?.payment_status === "on hold" && (
                    <p className=" text-orange-500 font-semibold">
                      {item?.payment_status}
                    </p>
                  )}
                  {item?.payment_status === "complete" && (
                    <p className=" text-green-500 font-semibold">
                      {item?.payment_status}
                    </p>
                  )}
                  {item?.payment_status === "delete" && (
                    <p className=" text-red-500 font-semibold">
                      {item?.payment_status}
                    </p>
                  )}
                </td>
                <td className=" p-[8px] text-left border border-gray-800 ">
                  {item?.product_name}
                </td>
                <td className=" p-[8px] text-right  border border-gray-800 ">
                  ৳ {item?.amount}
                </td>
                <td className=" p-[8px]   border border-gray-800 ">
                  <div className=" flex items-center justify-center">
                    <button className=" px-3 py-1 bg-slate-500 rounded-md flex items-center justify-center gap-x-1 text-white">
                      <FaRegEye className=" mt-1" />
                      view
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {/* {product
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.title.toLowerCase().includes(search.toLowerCase());
                  })
                  .map((item) => (
                    <tr key={item?._id} className=" ">
                      <td className=" p-[8px]  border border-gray-800 ">
                        <div className=" flex items-center justify-center">
                          <Image
                            width={200}
                            height={200}
                            src={item?.image}
                            alt="product-image"
                            className=" w-20 h-20 rounded-md"
                          />
                        </div>
                      </td>
                      <td className=" p-[8px] text-left border border-gray-800 ">
                        {item?.category}
                      </td>
                      <td className=" p-[8px] text-left border border-gray-800 ">
                        {item?.title}
                      </td>
                      <td className=" p-[8px] text-right border border-gray-800 ">
                        {item?.price}
                      </td>
                      <td className=" p-[8px] text-right border border-gray-800 ">
                        {item?.previousPrice}
                      </td>
                      <td className=" p-[8px] text-center border border-gray-800 ">
                        {item?.quantity}
                      </td>
                      <td className=" p-[8px] text-left border border-gray-800 ">
                        <div className=" flex items-center justify-center gap-x-2">
                          <button className=" bg-green-900 text-white text-sm font-semibold px-3 py-1 rounded-md">
                            Edit
                          </button>
                          <button className=" bg-red-900 text-white text-sm font-semibold px-3 py-1 rounded-md">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                <div>
                  {product.length == null && (
                    <div className=" flex items-center justify-center my-4">
                      <h1 className=" text-2xl font-semibold text-red-500">
                        No product available
                      </h1>
                    </div>
                  )}
                </div> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
