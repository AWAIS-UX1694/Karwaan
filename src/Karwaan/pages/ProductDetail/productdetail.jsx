import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 9,
    name: "AJMS-16 EMBROIDERED INDIAN RAW SILK 3 PCS",
    image: "https://asimjofa.com/cdn/shop/files/MG_1492_f3c778e6-ad3e-4faf-83a4-eb824de7e4b1.jpg?v=1725961763&width=600",
    rating: 4.0,
    reviews: 455,
    price: 18499,
    discount: 5,
    category: "Lawn",
    season: "winter",
    gender: "Men Stitched",
    type: "3 piece",
    brand: "asim jofa",
    wear: "New",
    features: [
      { icon: "path-to-fast-delivery-icon", label: "Fast Delivery" },
      { icon: "M2 12l1-1h0l8-8h0l1-1h0l8 8h0l1 1v6h-4v-3h-8v3H2z", label: "Best Price" },
    ],
  },
  // Add more products here
];

const ProductDetail = () => {
  const { productId } = useParams(); // Extract the product ID from the URL
  console.log("Product ID:", productId);
  const product = products.find((product) => product.id === parseInt(productId)); // Find the product by ID

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <section className="py-8 md:py-12 bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-2">Price: ${product.price}</p>
            <p className="text-gray-600 mb-2">Discount: {product.discount}%</p>
            <p className="text-gray-600 mb-2">Rating: {product.rating} ★</p>
            <p className="text-gray-600 mb-2">Category: {product.category}</p>
            <p className="text-gray-600 mb-2">Season: {product.season}</p>
            <p className="text-gray-600 mb-2">Gender: {product.gender}</p>
            <p className="text-gray-600 mb-2">Type: {product.type}</p>
            <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
            <p className="text-gray-600 mb-2">Wear: {product.wear}</p>

            <h3 className="text-xl font-semibold mt-6">Features:</h3>
            <ul className="mt-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <svg className="h-4 w-4 text-gray-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d={feature.icon} />
                  </svg>
                  <span>{feature.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
