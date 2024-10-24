import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { dummyProducts } from "../data/products";



export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // In a real app, you'd fetch the product details from an API here
    const foundProduct = dummyProducts.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/products"
        className="text-blue-500 hover:text-blue-600 mb-4 inline-block"
      >
        &larr; Back to Products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-4">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}
