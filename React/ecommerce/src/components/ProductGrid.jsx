import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [gridProductData, setGridProductData] = useState([]);

  async function getData() {
    try {
      let data = await fetch(`https://dummyjson.com/products`);
      let jsonData = await data.json();
      setGridProductData(jsonData.products);
    } catch (err) {
      alert("Failed to call API");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen w-screen bg-red-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Products
        </h1>

        <div
          className="
          w-screen
          grid 
          gap-8 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5
        "
        >
          {gridProductData.map((productData) => (
            <ProductCard productData={productData} key={productData.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
