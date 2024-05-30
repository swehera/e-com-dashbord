"use client";

import { useState } from "react";
import { ProductType } from "../../type";
import Image from "next/image";

import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";

interface Props {
  product: ProductType[];
}

const Product = ({ product }: Props) => {
  const [allProduct, setAllProduct] = useState(true);
  const [addProduct, setAddProduct] = useState(false);
  //state for search option
  const [search, setSearch] = useState("");

  const allProductActice = () => {
    setAllProduct(true);
    setAddProduct(false);
  };

  const addProductActice = () => {
    setAllProduct(false);
    setAddProduct(true);
  };

  const [productAdd, setProductAdd] = useState({
    // username: "",
    // email: "",
    // password: "",
    brand: "",
    category: "",
    description: "",
    image: "",
    isNew: "",
    previousPrice: "",
    price: "",
    quantity: "",
    title: "",
  });

  const handleAddProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("This is add product", productAdd);
    toast.success("product added successfully");
    setAddProduct(false);
    setAllProduct(true);
  };

  console.log("This is check", allProduct);
  console.log("This is check", addProduct);
  console.log("This is product data", product);

  return (
    <div>
      <div className=" flex items-center justify-center mt-3">
        <div className=" w-[70%]  grid grid-cols-2 gap-x-3">
          <div
            onClick={allProductActice}
            className={`flex items-center justify-center py-2 w-full rounded-md  cursor-pointer ${
              allProduct ? "bg-blue-500" : "bg-gray-500"
            }`}
          >
            <p className=" text-white font-semibold">All Product</p>
          </div>
          <div
            onClick={addProductActice}
            className={` flex items-center justify-center py-2 w-full rounded-md  cursor-pointer ${
              addProduct ? "bg-blue-500" : "bg-gray-500"
            }`}
          >
            <p className=" text-white font-semibold">Add Product</p>
          </div>
        </div>
      </div>

      {/* all product work start */}
      {allProduct && (
        <div className=" flex items-center justify-center mt-3">
          <div className=" w-[90%] ">
            <div className=" flex items-center justify-center">
              <p className=" text-2xl font-semibold">All Product</p>
            </div>
            <div className=" my-3 ">
              <div className=" w-full  flex  relative my-2">
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search product"
                  className=" flex-1 py-2 px-3 hidden md:block rounded-md outline-none border border-gray-500"
                />
                <div>
                  <FaSearch className=" hidden md:block text-2xl text-gray-600 absolute right-6 top-2" />
                </div>
              </div>
              <div className=" w-full  block md:hidden ">
                <div className="flex items-center justify-center">
                  <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search product"
                    className=" flex-1 py-2 px-3 rounded-md outline-none border border-gray-500"
                  />
                </div>
              </div>
              <div className=" overflow-auto my-2">
                <table className=" whitespace-nowrap w-full">
                  <tr>
                    <th className=" p-[8px] text-left border border-gray-800 ">
                      Image
                    </th>
                    <th className=" p-[8px] text-left border border-gray-800 ">
                      Category
                    </th>
                    <th className=" p-[8px] text-left border border-gray-800 ">
                      Title
                    </th>
                    <th className=" p-[8px] text-left border border-gray-800 ">
                      Price
                    </th>
                    <th className=" p-[8px] text-left border border-gray-800 ">
                      PreviousPrice
                    </th>
                    <th className=" p-[8px] text-left border border-gray-800 ">
                      Quantity
                    </th>
                    <th className=" p-[8px] text-center border border-gray-800 ">
                      Edit
                    </th>
                  </tr>
                  {product
                    .filter((item) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.title
                            .toLowerCase()
                            .includes(search.toLowerCase());
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
                              className=" w-16 md:w-20 h-16 md:h-20 rounded-md"
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
                  </div>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* add product work start */}
      {addProduct && (
        <div className=" my-3 mx-2">
          <div className="flex flex-col items-center justify-center my-3">
            <div className=" w-full md:w-[40%] px-3 py-1 border border-gray-600 rounded-md flex flex-col gap-y-3 ">
              <div className=" flex items-center justify-center">
                <p className="text-2xl font-semibold">Add Product</p>
              </div>
              <div className=" flex flex-col gap-y-2">
                <label className="text-sm font-semibold">
                  Enter Brand Name
                </label>
                <input
                  type="text"
                  placeholder="Brand name"
                  value={productAdd.brand}
                  onChange={(e) =>
                    setProductAdd({ ...productAdd, brand: e.target.value })
                  }
                  className=" px-3 py-1 rounded-md border-[1px] border-gray-600 outline-none"
                />
              </div>
              <div className=" flex flex-col gap-y-2">
                <label className="text-sm font-semibold">
                  Enter product title
                </label>
                <input
                  type="text"
                  placeholder="Brand name"
                  value={productAdd.title}
                  onChange={(e) =>
                    setProductAdd({ ...productAdd, title: e.target.value })
                  }
                  className=" px-3 py-1 rounded-md border-[1px] border-gray-600 outline-none"
                />
              </div>
              <div className=" flex flex-col gap-y-2">
                <label className="text-sm font-semibold">
                  Enter Category Name
                </label>
                <input
                  type="text"
                  placeholder="Category name"
                  value={productAdd.category}
                  onChange={(e) =>
                    setProductAdd({ ...productAdd, category: e.target.value })
                  }
                  className=" px-3 py-1 rounded-md border-[1px] border-gray-600 outline-none"
                />
              </div>
              {/* <div className=" flex flex-col gap-y-2">
          <label className="text-sm font-semibold">Enter Category Name</label>
          <input
            type="text"
            placeholder="Category name"
            value={productAdd.category}
            onChange={(e) =>
              setProductAdd({ ...productAdd, category: e.target.value })
            }
            className=" px-3 py-1 rounded-md border-[1px] border-gray-600 outline-none"
          />
        </div> */}
              <div className=" flex flex-col gap-y-2">
                <label className="text-sm font-semibold">
                  Enter the description
                </label>
                <input
                  type="text"
                  placeholder="Category name"
                  value={productAdd.description}
                  onChange={(e) =>
                    setProductAdd({
                      ...productAdd,
                      description: e.target.value,
                    })
                  }
                  className=" px-3 py-1 rounded-md border-[1px] border-gray-600 outline-none"
                />
              </div>
              <div className=" flex flex-col gap-y-2">
                <label className="text-sm font-semibold">
                  Enter product price
                </label>
                <input
                  type="number"
                  placeholder="Category name"
                  value={productAdd.price}
                  onChange={(e) =>
                    setProductAdd({ ...productAdd, price: e.target.value })
                  }
                  className=" px-3 py-1 rounded-md border-[1px] border-gray-600 outline-none"
                />
              </div>
              <div className=" flex flex-col gap-y-2">
                <label className="text-sm font-semibold">
                  Enter product previous price
                </label>
                <input
                  type="number"
                  placeholder="Category name"
                  value={productAdd.previousPrice}
                  onChange={(e) =>
                    setProductAdd({
                      ...productAdd,
                      previousPrice: e.target.value,
                    })
                  }
                  className=" px-3 py-1 rounded-md border-[1px] border-gray-600 outline-none"
                />
              </div>
              <div className=" flex flex-col gap-y-2">
                <label className="text-sm font-semibold">
                  Enter product quantity
                </label>
                <input
                  type="number"
                  placeholder="Category name"
                  value={productAdd.quantity}
                  onChange={(e) =>
                    setProductAdd({ ...productAdd, quantity: e.target.value })
                  }
                  className=" px-3 py-1 rounded-md border-[1px] border-gray-600 outline-none"
                />
              </div>
              <div>
                <button
                  onClick={handleAddProduct}
                  className=" py-1 w-full text-white font-semibold bg-blue-600 rounded-md"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Product;
