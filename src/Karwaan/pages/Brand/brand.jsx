import React, { useState } from "react";

const Brand = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data
  const data = [
    { id: 1, name: "Asim Jofa", bgImage: "https://wholesale.konjae.com/Bnrs/20122023-03-45-17asim%20jofa%20logo.png" },
    { id: 2, name: "Bonanza", bgImage:"https://wholesale.konjae.com/Bnrs/08062023-10-42-39Bonanza-Mens-1%202.png" },
    { id: 3, name: "Gul", bgImage:"https://wholesale.konjae.com/Bnrs/08062023-10-46-01GuL%20Ahmed%201.png" },
    { id: 4, name: "Florent", bgImage:"https://wholesale.konjae.com/Bnrs/28112023-00-03-02Florent.png" },
    { id: 5, name: "Johar", bgImage:"https://wholesale.konjae.com/Bnrs/23062023-04-44-04johra%20logo.png" },
    { id: 1, name: "Asim Jofa", bgImage: "https://wholesale.konjae.com/Bnrs/20122023-03-45-17asim%20jofa%20logo.png" },
    { id: 2, name: "Bonanza", bgImage:"https://wholesale.konjae.com/Bnrs/08062023-10-42-39Bonanza-Mens-1%202.png" },
    { id: 3, name: "Gul", bgImage:"https://wholesale.konjae.com/Bnrs/08062023-10-46-01GuL%20Ahmed%201.png" },
    { id: 4, name: "Florent", bgImage:"https://wholesale.konjae.com/Bnrs/28112023-00-03-02Florent.png" },
    { id: 5, name: "Johar", bgImage:"https://wholesale.konjae.com/Bnrs/23062023-04-44-04johra%20logo.png" },
    { id: 1, name: "Asim Jofa", bgImage: "https://wholesale.konjae.com/Bnrs/20122023-03-45-17asim%20jofa%20logo.png" },
    { id: 2, name: "Bonanza", bgImage:"https://wholesale.konjae.com/Bnrs/08062023-10-42-39Bonanza-Mens-1%202.png" },
    { id: 3, name: "Gul", bgImage:"https://wholesale.konjae.com/Bnrs/08062023-10-46-01GuL%20Ahmed%201.png" },
    { id: 4, name: "Florent", bgImage:"https://wholesale.konjae.com/Bnrs/28112023-00-03-02Florent.png" },
    { id: 5, name: "Johar", bgImage:"https://wholesale.konjae.com/Bnrs/23062023-04-44-04johra%20logo.png" },
    { id: 1, name: "Asim Jofa", bgImage: "https://wholesale.konjae.com/Bnrs/20122023-03-45-17asim%20jofa%20logo.png" },
    { id: 2, name: "Bonanza", bgImage:"https://wholesale.konjae.com/Bnrs/08062023-10-42-39Bonanza-Mens-1%202.png" },
    { id: 3, name: "Gul", bgImage:"https://wholesale.konjae.com/Bnrs/08062023-10-46-01GuL%20Ahmed%201.png" },
    { id: 4, name: "Florent", bgImage:"https://wholesale.konjae.com/Bnrs/28112023-00-03-02Florent.png" },
    { id: 5, name: "Johar", bgImage:"https://wholesale.konjae.com/Bnrs/23062023-04-44-04johra%20logo.png" },
    { id: 1, name: "Asim Jofa", bgImage: "https://wholesale.konjae.com/Bnrs/20122023-03-45-17asim%20jofa%20logo.png" },
    { id: 2, name: "Bonanza", bgImage:"https://wholesale.konjae.com/Bnrs/08062023-10-42-39Bonanza-Mens-1%202.png" },
    { id: 3, name: "Gul", bgImage:"https://wholesale.konjae.com/Bnrs/08062023-10-46-01GuL%20Ahmed%201.png" },
    { id: 4, name: "Florent", bgImage:"https://wholesale.konjae.com/Bnrs/28112023-00-03-02Florent.png" },
    { id: 5, name: "Johar", bgImage:"https://wholesale.konjae.com/Bnrs/23062023-04-44-04johra%20logo.png" },
    { id: 1, name: "Asim Jofa", bgImage: "https://wholesale.konjae.com/Bnrs/20122023-03-45-17asim%20jofa%20logo.png" },
    { id: 2, name: "Bonanza", bgImage:"https://wholesale.konjae.com/Bnrs/08062023-10-42-39Bonanza-Mens-1%202.png" },
    { id: 3, name: "Gul", bgImage:"https://wholesale.konjae.com/Bnrs/08062023-10-46-01GuL%20Ahmed%201.png" },
    { id: 4, name: "Florent", bgImage:"https://wholesale.konjae.com/Bnrs/28112023-00-03-02Florent.png" },
    { id: 5, name: "Johar", bgImage:"https://wholesale.konjae.com/Bnrs/23062023-04-44-04johra%20logo.png" },
  ];

  // Filter data based on search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="md:flex lg:flex justify-between content items-center w-full px-9  mt-8">
        <h2 className="text-3xl font-[200] mb-4">Wholesale Brands</h2>

        {/* Search input */}
        <div className="inline-flex items-center md:w-[30vw] lg::w-[30vw] w-full justify-between bg-gray-50 p-2 pl-5 pr-2 rounded-[2rem]">
          <input
            type="text"
            placeholder="Search name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent focus:outline-none text-lg text-gray-400 w-full"
          />
          {/* Customizable Search Icon */}
          <div className="drop h-12 flex w-16 rounded-full bg-white items-center justify-center">
            <svg
              className="ml-2 w-5 h-5 mr-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-9">
        {/* Filtered results */}
        <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.id}
                value={item.name}
                className="bg-white border px-9 sm:h-[9rem] md:h-[12rem] items-center  content-center rounded-3xl hover:shadow-xl transition-shadow shadow-gray-200 duration-300 p-4 text-center"
              ><img src={item.bgImage} alt="" />
              </div>
            ))
          ) : (
            <li className="text-red-500">No results found</li>
          )}
        </div>
      </div>
    </>
  );
};

export default Brand;
