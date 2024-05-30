import Product from "@/ui/Product";
import React from "react";

const getData = async () => {
  const response = await fetch("https://jsonserver.reactbd.com/amazonpro", {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  if (!response) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const ProductPage = async () => {
  const product = await getData();
  return (
    <div>
      <Product product={product} />
    </div>
  );
};

export default ProductPage;
