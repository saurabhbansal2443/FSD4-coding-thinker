import React from "react";

const ProductCard = ({ productData }) => {
  const { title, category, price, discountPercentage, rating, thumbnail } =
    productData;

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );

  return (
    <div
      style={{ padding: 16 }}
      className="w-60 bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="h-40 bg-white flex justify-center items-center overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="px-3 py-2">
        <p className="text-[10px] text-gray-500 uppercase tracking-wide">
          {category}
        </p>

        <h2 className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2 h-9">
          {title}
        </h2>

        {/* RATING */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-500 text-xs">★</span>
          <p className="text-xs text-gray-700">{rating.toFixed(1)}</p>
        </div>

        {/* PRICE */}
        <div className="mt-2 flex items-end gap-2">
          <p className="text-base font-bold text-gray-900">
            ₹{discountedPrice}
          </p>
          <p className="text-xs text-gray-500 line-through">₹{price}</p>

          <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-md">
            {discountPercentage}% off
          </span>
        </div>
      </div>

      {/* BUTTON */}
      <div style={{ padding: 8 }} className="px-3 pb-3">
        <button className="w-full bg-blue-600 text-white py-1.5 rounded-md text-xs font-medium hover:bg-blue-700 transition-all">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
