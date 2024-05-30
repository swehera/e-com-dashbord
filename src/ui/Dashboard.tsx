"use client";
import { FaDollarSign } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import BarChart from "../ui/BarChart";

const Dashboard = () => {
  return (
    <div className="  py-1 px-3 mt-4  ">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-3">
        <div className="  h-32 flex items-center justify-center">
          <div className=" w-[90%] h-full bg-gray-600 flex items-center justify-center rounded-md shadow-md shadow-black/60">
            <div className=" flex  items-center justify-center gap-x-8">
              <div>
                <p className=" font-semibold text-2xl text-white">
                  Total earnings
                </p>
                <p className=" text-2xl font-semibold text-white">$0</p>
              </div>
              <div>
                <div className="px-1 py-1 rounded-full bg-[#fff]">
                  <div className="px-3 py-3 rounded-full bg-[#555D68]">
                    <FaDollarSign className=" text-white text-4xl " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  h-32 flex items-center justify-center">
          <div className="w-[90%] h-full bg-blue-500 shadow-md shadow-blue-500/60 flex items-center justify-center rounded-md">
            <div className=" flex  items-center justify-center gap-x-8">
              <div>
                <p className=" font-semibold text-2xl text-white">
                  Total orders
                </p>
                <p className=" text-2xl font-semibold text-white">0</p>
              </div>
              <div>
                <div className="px-1 py-1 rounded-full bg-[#fff]">
                  <div className="px-3 py-3 rounded-full bg-blue-500">
                    <IoMdCart className=" text-white text-4xl " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  h-32 flex items-center justify-center">
          <div className="w-[90%] h-full bg-orange-500 shadow-md shadow-orange-500/60 flex items-center justify-center rounded-md">
            <div className=" flex  items-center justify-center gap-x-8">
              <div>
                <p className=" font-semibold text-2xl text-white">
                  Total product
                </p>
                <p className=" text-2xl font-semibold text-white">0</p>
              </div>
              <div>
                <div className="px-1 py-1 rounded-full bg-[#fff]">
                  <div className="px-3 py-3 rounded-full bg-orange-500">
                    <FaBasketShopping className=" text-white text-4xl " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" h-32 flex items-center justify-center">
          <div className=" w-[90%] h-full bg-orange-500 shadow-md shadow-orange-500/60 flex items-center justify-center rounded-md">
            <div className=" flex flex-col items-center justify-center">
              <p className=" font-semibold text-2xl text-white">
                Total product
              </p>
              <p className=" text-xl font-semibold text-white">0</p>
            </div>
          </div>
        </div> */}
      </div>

      <div className="mt-2 flex items-center justify-center">
        <div className="  w-full ">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
