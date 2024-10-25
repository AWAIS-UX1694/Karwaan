import React, { useState } from "react";

const Cart = () => {
   // Initial product states with price and quantity
   const [products, setProducts] = useState([
    { id: 1, name: 'Apple iMac', price: 3000, quantity: 1 },
    { id: 2, name: 'Apple MacBook Pro', price: 2592, quantity: 1 },
  ]);

  // Function to calculate the total order price based on product quantity
  const calculateTotalOrderPrice = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  // Function to increment and decrement quantity
  const updateQuantity = (id, action) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: action === 'increment' ? product.quantity + 1 : Math.max(1, product.quantity - 1) }
          : product
      )
    );
  };

  const totalOrderPrice = calculateTotalOrderPrice();

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl text-gray-900 font-bold sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
            {products.map((product) => (
        <div key={product.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
          <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
            <a href="#" className="shrink-0 md:order-1">
              <img className="h-20 w-20" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
            </a>

            <div className="flex items-center justify-between md:order-3 md:justify-end">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => updateQuantity(product.id, 'decrement')}
                  className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                >
                   <svg className="h-2.5 w-2.5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
              </svg> 
                  {/* Minus icon */}
                </button>

                <input
                  type="text"
                  className="w-10 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                  value={product.quantity}
                  readOnly
                />

                <button
                  type="button"
                  onClick={() => updateQuantity(product.id, 'increment')}
                  className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                >
                    <svg className="h-2.5 w-2.5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
              </svg>
                  {/* Plus icon */}
                </button>
              </div>

              <div className="text-end md:order-4 md:w-32">
                <p className="text-base font-bold text-gray-900">${(product.price * product.quantity).toLocaleString()}</p>
              </div>
            </div>

            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
              <a href="#" className="text-base font-medium text-gray-900 hover:underline">
                {product.name}
              </a>
              {/* Other product actions */}
              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                        <a href="#" className="text-base font-medium text-gray-900 hover:underline">PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT</a>
                                        <div className="flex items-center gap-4">
                                            <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline">
                                                <svg className="me-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                                </svg>
                                                Add to Favorites
                                            </button>

                                            <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline">
                                                <svg className="me-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                </svg>
                                                Remove
                                            </button>
                                        </div>
                                    </div>

            </div>
            
          </div>
          
        </div>
      ))}

              {/* Repeat item block for other products in the cart */}
            </div>
          </div>

          <div className="space-y-4 lg:w-96 md:w-full w-full mt-6 lg:mt-0 rounded-lg border border-gray-200 bg-white lg:p-4 p-2 shadow-sm sm:p-6">
        <p className="text-xl font-semibold text-gray-900">Order summary</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500">Original price</dt>
              <dd className="text-base font-medium text-gray-900">${totalOrderPrice.toLocaleString()}</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500">Savings</dt>
              <dd className="text-base font-medium text-green-600">-$299.00</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500">Store Pickup</dt>
              <dd className="text-base font-medium text-gray-900">$0.00</dd>
            </dl>
          </div>
          <button className="w-full text-center items-center p-2 bg-black hover:bg-gray-700 text-white rounded-lg ">Click to procced</button>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
