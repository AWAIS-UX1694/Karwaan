import React, { useState } from "react";
import Collection from "./collection";
import MajorBrand from "./majorbrands";
import bg1 from "./../../../assets/images/1.jpg"
import bg2 from "./../../../assets/images/2.jpg"
import bg3 from "./../../../assets/images/3.jpg"
const Home = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSeasonOpen, setIsSeasonOpen] = useState(false);

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const toggleSeasonDropdown = () => {
    setIsSeasonOpen(!isSeasonOpen);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of background images
  const slides = [
    {
      id: 1,
      bgImage:`url(${bg1})`,
    },
    {
      id: 2,
      bgImage:`url(${bg2})`
    },
    {
      id: 3,
      bgImage:`url(${bg3})`
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section className="filter mt-4 overflow-x-visible overflow-y-scroll z-20 scroll-m-14 flex gap-3 mx-4">
        {/* First Dropdown: Categories */}
        <div className="relative inline-block text-left ">
          <div className="items-center">
            <button
              onClick={toggleCategoryDropdown}
              className="inline-flex items-center w-[20vw] min-w-[200px] justify-between bg-gray-50 p-2 pl-5 pr-2 rounded-[2rem]"
            >
              <p className="text-lg text-gray-400">Categories</p>
              <div className="drop h-12 flex w-12 rounded-full bg-white items-center justify-center">
                <svg
                  className="ml-2 w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.293-3.294a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>

          {isCategoryOpen && (
            <div className="z-50 origin-top-right absolute right-0 mt-2 w-[20vw] min-w-[200px] rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="p-2" role="menu" aria-orientation="vertical">
                <a
                  href="#"
                  className="block px-4 py-4 rounded-xl text-md font-[500] hover:bg-gray-100"
                  role="menuitem"
                >
                  Winter Collection
                </a>
                <a
                  href="#"
                  className="block px-4 py-4 rounded-xl text-md font-[500] hover:bg-gray-100"
                  role="menuitem"
                >
                  Summer Collection
                </a>
                <a
                  href="#"
                  className="block px-4 py-4 rounded-xl text-md font-[500] hover:bg-gray-100"
                  role="menuitem"
                >
                  Casual Wear
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Second Dropdown: Seasons */}
        <div className="relative inline-block text-left">
          <div className="items-center">
            <button
              onClick={toggleSeasonDropdown}
              className="inline-flex items-center w-[15vw] min-w-[200px] justify-between bg-gray-50 p-2 pl-5 pr-2 rounded-[2rem]"
            >
              <p className="text-lg text-gray-400">Seasons</p>
              <div className="drop h-12 flex w-12 rounded-full bg-white items-center justify-center">
                <svg
                  className="ml-2 w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.293-3.294a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>

          {isSeasonOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-[14vw] min-w-[200px] rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="p-2" role="menu" aria-orientation="vertical">
                <a
                  href="#"
                  className="block px-4 py-4 rounded-xl text-md font-[500] hover:bg-gray-100"
                  role="menuitem"
                >
                  Spring
                </a>
                <a
                  href="#"
                  className="block px-4 py-4 rounded-xl text-md font-[500] hover:bg-gray-100"
                  role="menuitem"
                >
                  Summer
                </a>
                <a
                  href="#"
                  className="block px-4  py-4 rounded-xl text-md font-[500] hover:bg-gray-100"
                  role="menuitem"
                >
                  Fall
                </a>
                <a
                  href="#"
                  className="block px-4 py-4 rounded-xl text-md font-[500] hover:bg-gray-100"
                  role="menuitem"
                >
                  Winter
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Serach bar */}
        <div className="relative inline-block text-left ">
          <div className="items-center">
          <div className="inline-flex items-center md:w-[30vw] lg::w-[30vw] w-full justify-between bg-gray-50 p-2 pl-5 pr-2 rounded-[2rem]">
          <input
            type="text"
            placeholder="Search by name..." 
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
        </div>

        {/* Filter Tabs */}

        <button className="rounded-[2rem]  text-lg px-10 border-2 border-gray-200 ">
          Men
        </button>
        <button className="rounded-[2rem]  text-lg px-10 border-2  border-gray-200">
          Women
        </button>
        <button className="rounded-[2rem]  text-lg px-10 border-2  border-gray-200">
          <p className="w-24">New Arival</p>
        </button>
        <button className="rounded-[2rem]  text-lg px-10 border-2  border-gray-200">
          Children
        </button>
        <button className="rounded-[2rem]  text-lg px-10 border-2  border-gray-200">
          Brand
        </button>
      </section>

      <section className="hero h-svh z-0 w-full p-4">
        <div className="main  bg-amber-50 h-full overflow-hidden rounded-[2rem] w-full">
          <div className="relative w-full h-full overflow-hidden">
            {/* Carousel Background */}
            <div
              className="absolute inset-0 transition-all duration-700 ease-in-out bg-center bg-cover"
              style={{ backgroundImage: slides[currentIndex].bgImage }}
            ></div>

            {/* Overlay Content */}
            <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-30">
              {/* Heading */}
              <h2 className="text-7xl mb-4 w-[80vw] text-center">We are digital meets fashions</h2>
              <p className="lg:w-[30vw] w-[80vw] text-center text-xl">Show your Karwaan pride. get high-quality swag directly from the Karwaan foundation.</p>

              {/* Shop More Button */}
              <button className="flex items-center  mt-4  px-2 pl-5 py-2 rounded-[2.5rem] mb-8">
                <div className="btn">
                <p className="text-black h-16 items-center content-center p-4 px-14 rounded-[2.5rem] text-md font-[500] bg-white ">SHOW MORE</p>
                </div>
                <div className="icon -rotate-45 h-16 w-16  rounded-full bg-gray-100 ">
                  <img className="items-center ml-4 mt-4" width="30" height="30" src="https://img.icons8.com/ios-filled/50/right--v1.png" alt="right--v1"/>
                  </div>
              </button>
              <button className="absolute bottom-10">See top collection</button>

           <div className="sliderbtn">
               {/* Previous Button */}
               <button
                onClick={prevSlide}
                className="absolute top-24 right-24 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full z-10"
              >
                <img width="16" height="16" src="https://img.icons8.com/metro/26/back.png" alt="back"/>
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute top-24 right-12 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full z-10"
              >
                <img width="16" height="16" src="https://img.icons8.com/metro/26/forward.png" alt="forward"/>
              </button>
           </div>
            </div>
          </div>
        </div>
      </section>
      <Collection />
      <MajorBrand/>
    </>
  );
};

export default Home;
