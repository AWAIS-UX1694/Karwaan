// import React, { useState } from 'react';

// const products = [
//   {
//     id: 8,
//     name: "AJMS-14 EMBROIDERED INDIAN RAW SILK 3 PCS",
//     image: "https://asimjofa.com/cdn/shop/files/MG_1168.jpg?v=1725960926&width=600",
//     rating: 5.0,
//     reviews: 455,
//     price: 8499,
//     discount: 10,
//     category: "Lawn",
//     season: "summer",
//     gender: "men",
//     type: "3 piece",
//     brand: "asim jofa",
//     wear: "New",
//     features: [
//       { icon: "fast-delivery-icon-path", label: "Fast Delivery" },
//       { icon: "best-price-icon-path", label: "Best Price" },
//     ],
//   },
//   {
//     id: 2,
//     name: "AJFILE-09 CAMBRIC 3 PCS",
//     image: "https://asimjofa.com/cdn/shop/files/051A9351.jpg?v=1726657008&width=600",
//     rating: 5,
//     reviews: 455,
//     price: 4499,
//     discount: 20,
//     category: "braded",
//     season: "winter",
//     gender: "women",
//     type: "3 piece",
//     brand: "Asim jofa",
//     wear: "New",
//     features: [
//       { icon: "fast-delivery-icon-path", label: "Fast Delivery" },
//       { icon: "best-price-icon-path", label: "Best Price" },
//     ],
//   },
//   {
//     id: 3,
//     name: "AJFILE-02 CAMBRIC 3 PCS",
//     image: "https://asimjofa.com/cdn/shop/files/051A6314_055184a4-d1f7-4564-b86c-f8301b3bb4a4.jpg?v=1726656834&width=600",
//     rating: 5,
//     reviews: 455,
//     price: 10499,
//     discount: 0,
//     category: "braded",
//     season: "winter",
//     gender: "women",
//     type: "3 piece",
//     brand: "Asim jofa",
//     wear: "New",
//     features: [
//       { icon: "fast-delivery-icon-path", label: "Fast Delivery" },
//       { icon: "best-price-icon-path", label: "Best Price" },
//     ],
//   },
//   {
//     id: 4,
//     name: "AJFILE-12 CAMBRIC 3 PCS",
//     image: "https://asimjofa.com/cdn/shop/files/051A4789.jpg?v=1726657129&width=600",
//     rating: 3,
//     reviews: 455,
//     price: 5499,
//     discount: 50,
//     category: "Printed",
//     season: "winter",
//     gender: "women",
//     type: "3 piece",
//     brand: "Bonanza Satrangi",
//     wear: "New",
//     features: [
//       { icon: "fast-delivery-icon-path", label: "Fast Delivery" },
//       { icon: "best-price-icon-path", label: "Best Price" },
//     ],
//   },
//   {
//     id: 5,
//     name: "AJKK-30 EMBROIDERED CHIFFON 3 PCS",
//     image: "https://asimjofa.com/cdn/shop/files/AJKK-30_1.jpg?v=1721654281&width=900",
//     rating: 3,
//     reviews: 455,
//     price: 17499,
//     discount: 5,
//     category: "braded",
//     season: "winter",
//     gender: "women",
//     type: "2 piece",
//     brand: "Asim jofa",
//     wear: "New",
//     features: [
//       { icon: "fast-delivery-icon-path", label: "Fast Delivery" },
//       { icon: "best-price-icon-path", label: "Best Price" },
//     ],
//   },
//   {
//     id: 6,
//     name: "Embroidered Raw Silk Saree | SF-W24-15",
//     image: "https://www.mariab.pk/cdn/shop/files/SFW2415FeroziFront_540x.jpg?v=1727865763",
//     rating: 5,
//     reviews: 455,
//     price: 170499,
//     discount: 0,
//     category: "braded",
//     season: "summer",
//     gender: "women",
//     type: "Ready to Ware",
//     brand: "Maria B",
//     wear: "New",
//     features: [
//       { icon: "fast-delivery-icon-path", label: "Fast Delivery" },
//       { icon: "best-price-icon-path", label: "Best Price" },
//     ],
//   },
//   {
//     id: 7,
//     name: "3 Piece - Unstitched Suit | EID LAWN-24-02",
//     image: "https://www.mariab.pk/cdn/shop/files/D-2Front_7dfe021f-5fa2-4201-9f34-d9ad2cf96bd5_540x.jpg?v=1715582509",
//     rating: 4,
//     reviews: 455,
//     price: 23499,
//     discount: 30,
//     category: "Lawn",
//     season: "summer",
//     gender: "women",
//     type: "3 piece",
//     brand: "Maria B",
//     wear: "New",
//     features: [
//       { icon: "fast-delivery-icon-path", label: "Fast Delivery" },
//       { icon: "best-price-icon-path", label: "Best Price" },
//     ],
//   },
//   // Add more product objects as needed
// ];

// const MenCollection = () => {
//   const [filters, setFilters] = useState({
//     category: '',
//     season: '',
//     gender: '',
//     type: '',
//     brand: '',
//     price: '',
//     discount: '',
//     wear: ''
//   });

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const filteredProducts = products.filter((product) => {
//     return (
//       (!filters.category || product.category === filters.category) &&
//       (!filters.season || product.season === filters.season) &&
//       (!filters.gender || product.gender === filters.gender) &&
//       (!filters.type || product.type === filters.type) &&
//       (!filters.brand || product.brand === filters.brand) &&
//       (!filters.price || product.price <= filters.price) &&
//       (!filters.discount || product.discount <= filters.discount) &&
//       (!filters.wear || product.wear === filters.wear)
//     );
//   });

//   return (
//     <section className="bg-gray-50  py-8 md:py-12 p-4">
//       <div className="mb-4">
//         <div className="filter flex gap-4 mb-4 overflow-scroll">
//           <select name="category" onChange={handleFilterChange} className="border p-3 rounded-[2rem] text-gray-500 ">
//             <option value="">Select Catigory</option>
//             <option value="Printed">Printed</option>
//             <option value="braded">braded</option>
//             <option value="Lawn">Lawn</option>
//           </select>
//           <select name="season" onChange={handleFilterChange} className="border p-3 rounded-[2rem] text-gray-500">
//             <option value="Summer">Summer</option>
//             <option value="Winter">Winter</option>
//             {/* Add more seasons as needed */}
//           </select>
//           <select name="gender" onChange={handleFilterChange} className="border p-3 rounded-[2rem] text-gray-500">
//             <option value="Women">Women</option>
//             <option value="Women Unstitched">Women Unstitched</option>
//             {/* Add more genders as needed */}
//           </select>
//           <select name="type" onChange={handleFilterChange} className="border p-3 rounded-[2rem] text-gray-500">
//             <option value="3 piece<">3 piece</option>
//             <option value="2 piece">2 piece</option>
//             <option value="Ready to Ware">Ready to ware</option>
//             {/* Add more types as needed */}
//           </select>
//           <select name="brand" onChange={handleFilterChange} className="border p-3 rounded-[2rem] text-gray-500">
//             <option value="AsimJofa">Asim Jofa</option>
//             <option value="Bonanza Satrangi">Bonanza Satrangi</option>
//             <option value="Maria B">Maria B</option>
//             {/* Add more brands as needed */}
//           </select>
//           <input
//             type="number"
//             name="price"
//             placeholder="Max Price"
//             onChange={handleFilterChange}
//             className="border p-3 rounded-[2rem] text-gray-500"
//           />
//           <input
//             type="number"
//             name="discount"
//             placeholder="Max Discount (%)"
//             onChange={handleFilterChange}
//             className="border p-3 rounded-[2rem] text-gray-500"
//           />
//           <select name="wear" onChange={handleFilterChange} className="border p-3 rounded-[2rem] text-gray-500">
//             <option value="New">New</option>
//             <option value="Old">Old</option>
//             {/* Add more wear options as needed */}
//           </select>
//         </div>
//       </div>

//       <div className="grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-6">
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-200  border-gray-200 bg-white  shadow-sm">
//             <div className=" w-full">
//               <a href="#">
//                 <img className="mx-auto h-full" src={product.image} alt={product.name} />
//               </a>
//             </div>
//             <div className="pt-6 lg:p-3 p-3 md:p-3">
//               <div className="mb-4 flex items-center justify-between gap-4">
//                 <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
//                   Up to {product.discount}% off
//                 </span>
//                 <div className="flex items-center justify-end gap-1">
//                   <button type="button" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
//                     <span className="sr-only"> Quick look </span>
//                     {/* Quick look icon */}
//                   </button>
//                   <button type="button" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
//                     <span className="sr-only"> Add to Favorites </span>
//                     {/* Favorite icon */}
//                   </button>
//                 </div>
//               </div>

//               <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
//                 {product.name}
//               </a>

//               <div className="mt-2 flex items-center gap-2">
//                 <div className="flex items-center">
//                   {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
//                     <svg key={index} className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
//                     </svg>
//                   ))}
//                 </div>

//                 <p className="text-sm font-medium text-gray-900">{product.rating}</p>
//                 <p className="text-sm font-medium text-gray-500">({product.reviews})</p>
//               </div>

//               <ul className="mt-2 flex items-center gap-4">
//                 {product.features.map((feature, index) => (
//                   <li key={index} className="flex items-center ">
//                     <svg className="h-4 w-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d={feature.icon} />
//                     </svg>
//                     <p className=" md:text-xs text-xs text-start font-medium text-gray-500">{feature.label}</p>
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-4 flex items-center justify-between gap-4">
//                 <p className="text-lg font-bold text-gray-900">${product.price}</p>
//                 <p className="text-sm font-medium text-gray-500">{product.discount}% off</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MenCollection;;
