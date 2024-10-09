import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocalDeliveryOpen, setIsLocalDeliveryOpen] = useState(false);


  const toggleLocalDelivery = () => setIsLocalDeliveryOpen(!isLocalDeliveryOpen);


  // Toggle open state
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="w-full bg-gray-100 py-8">
      <div className="w-full mx-auto p-4">
        <div className="flex w-full flex-col lg:flex-row gap-8">
          {/* Images Section */}
          <div className="lg:w-[70%]">
            {/* Carousel for small screens */}
            <div className="block lg:hidden">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <img
                    src="https://asimjofa.com/cdn/shop/files/051A5980_543ffd91-6a45-416a-9b03-0b7cd57d1609.jpg?v=1726657081&width=600"
                    className="w-full h-auto rounded-lg shadow-md"
                    alt="Product Image 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://asimjofa.com/cdn/shop/files/051A6043_3d1b4735-105f-41f8-9d6c-00ee05c51945.jpg?v=1726657081&width=600"
                    className="w-full h-auto rounded-lg shadow-md"
                    alt="Product Image 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://asimjofa.com/cdn/shop/files/051A6019_54d6ec64-92d8-43d1-a41d-74975499f33b.jpg?v=1726657081&width=600"
                    className="w-full h-auto rounded-lg shadow-md"
                    alt="Product Image 3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://asimjofa.com/cdn/shop/files/051A9351_d73a5ea0-c17a-4407-b0cc-ed2aa8bcf71e.jpg?v=1726657081&width=600"
                    className="w-full h-auto rounded-lg shadow-md"
                    alt="Product Image 4"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Grid layout for larger screens */}
            <div className="hidden lg:flex flex-wrap gap-4">
              <img
                src="https://asimjofa.com/cdn/shop/files/051A5980_543ffd91-6a45-416a-9b03-0b7cd57d1609.jpg?v=1726657081&width=600"
                className="w-[48%] h-auto rounded-lg shadow-md"
                alt="Product Image 1"
              />
              <img
                src="https://asimjofa.com/cdn/shop/files/051A6043_3d1b4735-105f-41f8-9d6c-00ee05c51945.jpg?v=1726657081&width=600"
                className="w-[48%] h-auto rounded-lg shadow-md"
                alt="Product Image 2"
              />
              <img
                src="https://asimjofa.com/cdn/shop/files/051A6019_54d6ec64-92d8-43d1-a41d-74975499f33b.jpg?v=1726657081&width=600"
                className="w-[48%] h-auto rounded-lg shadow-md"
                alt="Product Image 3"
              />
              <img
                src="https://asimjofa.com/cdn/shop/files/051A9351_d73a5ea0-c17a-4407-b0cc-ed2aa8bcf71e.jpg?v=1726657081&width=600"
                className="w-[48%] h-auto rounded-lg shadow-md"
                alt="Product Image 4"
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="w-full lg:w-1/2 ">
          <div className="mb-10 gap-3 md:mt-10 flex-col flex">
            <h2 className="lg:text-4xl text-2xl lg:font-[500] font-[400]">Asim Jofa Indian Lawn</h2>
            <p className="text-gray-600 lg:text-lg text:sm lg:font-[500] font-[400]">Price: 5449</p>
            <button className="bg-black  w-[300px] text-white py-3 px-10 rounded-lg hover:bg-gray-700 transition-all">
              Add to Cart
            </button>
            <button className="bg-black  w-[300px] text-white py-3 px-10 rounded-lg hover:bg-gray-700 transition-all">
              Buy Now
            </button>

          </div>
            <p className="text-gray-600 mb-2"><span className="lg:font-[500] font-[400]">Discount:</span> 10%</p>
            <p className="text-gray-600 mb-2"><span className="lg:font-[500] font-[400]">Rating:</span> 5.0 ★</p>
            <p className="text-gray-600 mb-2"><span className="lg:font-[500] font-[400]">Fabric:</span> Lawn</p>
            <p className="text-gray-600 mb-2"><span className="lg:font-[500] font-[400]">Type:</span> Stitched</p>

            
            <div className="w-full mt-5  max-w-2xl ">
              {/* Collapsible Bar */}
              <div
                onClick={toggleOpen}
                className="flex  justify-between items-center bg-gray-100 px-4 py-3 cursor-pointer rounded-lg border"
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  Description
                </h3>
                {/* Plus/Minus Icon */}
                <span className="text-2xl text-gray-600">
                  {isOpen ? "-" : "+"}
                </span>
              </div>

              {/* Description Section */}
              {isOpen && (
                <div className="bg-white px-4 py-4 mt-2 rounded-lg  transition-all duration-500">
                  <p className="text-gray-600">
                    This Asim Jofa lawn suit is a blend of traditional elegance
                    and modern design. Perfect for the summer season, it offers
                    a lightweight and breathable fabric, ideal for any formal or
                    casual occasion.
                    Let your ensemble sing with the harmonious melody of magenta adorned with mink color and two-toned zari accompanied by shimmering light gold 3mm sequins. Like notes in a symphony, the threadwork in purple, pink, green and self-color intertwines to create a masterpiece of elegance. With embroidered center and side panels as well as neckline detailing for the back and back itself, this ensemble is a tribute to refined style. The embroidered border for the hemline and sleeves with border adds depth and richness while the embroidered border for chaak conducts the ensemble's grace. Wrap yourself in the embroidered dupatta with borders and let the magenta symphony serenade you.
                  </p>
                </div>
              )}
            </div>

            <div className="w-full max-w-2xl mt-4">
        <div
          onClick={toggleLocalDelivery}
          className="flex justify-between items-center bg-gray-100 px-4 py-3 cursor-pointer rounded-lg border"
        >
          <h3 className="text-lg font-semibold text-gray-700">Local Delivery Timing</h3>
          <span className="text-2xl text-gray-600">
            {isLocalDeliveryOpen ? "-" : "+"}
          </span>
        </div>
        {isLocalDeliveryOpen && (
          <div className="bg-white px-4 py-4 mt-2 rounded-lg transition-all duration-500">
            <p className="text-gray-600">
              Local delivery usually takes 3-5 business days. Orders placed before 2 PM are processed the same day to ensure faster delivery.
            </p>
          </div>
        )}
      </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
