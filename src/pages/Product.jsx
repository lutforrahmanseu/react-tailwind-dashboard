import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { dummyProducts } from '../data/products';


export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // In a real application, you'd fetch products from an API here
    setProducts(dummyProducts);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link to="/" className="text-blue-500 hover:text-blue-600">Back to Dashboard</Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img 
              src={product.thumbnail} 
              alt={product.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mb-4">
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </p>
              <Link 
                to={`/product/${product.id}`} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
