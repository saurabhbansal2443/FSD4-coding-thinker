import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// https://dummyjson.com/products
const ProductGrid = () => {
  const [gridProductData, setGridProductData] = useState([]);

  async function getData() {
    try {
      let data = await fetch(`https://dummyjson.com/products`);
      let jsonData = await data.json();
      setGridProductData(jsonData.products);
    } catch (err) {
      alert("Failed to call Api ", err);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {gridProductData.map((productData) => {
        return <ProductCard productData={productData} />;
      })}
    </div>
  );
};

export default ProductGrid;
