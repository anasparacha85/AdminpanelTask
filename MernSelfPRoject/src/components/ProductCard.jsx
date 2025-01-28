import React from "react";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      {/* Product Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>

      {/* Product Price */}
      <p className="text-gray-600 text-md mb-4">${product.price}</p>

      {/* Add to Cart Button */}
    <Link to={`/Products/shop/${product._id}/details`}><button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition duration-200 ease-in-out">
        Add to Cart
      </button></Link>  
    </div>
  );
};

export default ProductCard;
