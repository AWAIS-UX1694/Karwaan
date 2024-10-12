import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocalDeliveryOpen, setIsLocalDeliveryOpen] = useState(false);

  const toggleLocalDelivery = () =>
    setIsLocalDeliveryOpen(!isLocalDeliveryOpen);

  // Toggle open state
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const ImageZoom = ({ imageUrl, zoomLevel = 2 }) => {
    const [zoomStyles, setZoomStyles] = useState({
      backgroundPosition: "0% 0%",
      backgroundSize: "100%",
    });

    const handleMouseMove = (e) => {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 100;
      const y = ((e.pageY - top) / height) * 100;

      setZoomStyles({
        backgroundPosition: `${x}% ${y}%`,
        backgroundSize: `${zoomLevel * 100}%`,
      });
    };

    const handleMouseLeave = () => {
      setZoomStyles({
        backgroundPosition: "0% 0%",
        backgroundSize: "100%",
      });
    };

    return (
      <div
        className="relative overflow-hidden rounded-lg shadow-md"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: zoomStyles.backgroundPosition,
          backgroundSize: zoomStyles.backgroundSize,
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={imageUrl}
          alt="Zoom"
          className="opacity-0 w-full h-auto object-cover"
        />
      </div>
    );
  };

  const [selectedImage, setSelectedImage] = useState(
    "https://asimjofa.com/cdn/shop/files/051A5980_543ffd91-6a45-416a-9b03-0b7cd57d1609.jpg?v=1726657081&width=600"
  );

  const images = [
    "https://asimjofa.com/cdn/shop/files/051A5980_543ffd91-6a45-416a-9b03-0b7cd57d1609.jpg?v=1726657081&width=600",
    "https://asimjofa.com/cdn/shop/files/051A6043_3d1b4735-105f-41f8-9d6c-00ee05c51945.jpg?v=1726657081&width=600",
    "https://asimjofa.com/cdn/shop/files/051A6019_54d6ec64-92d8-43d1-a41d-74975499f33b.jpg?v=1726657081&width=600",
    "https://asimjofa.com/cdn/shop/files/051A9351_d73a5ea0-c17a-4407-b0cc-ed2aa8bcf71e.jpg?v=1726657081&width=600",
  ];

  // Sample price per size (these can vary based on the product)
  const sizePrice = {
    S: 5449,
    M: 6245,
    L: 6987,
    XL: 7543,
    XXL: 8999,
  };

  const shippingCost = 10; // Fixed shipping cost

  const [selectedSize, setSelectedSize] = useState("M"); // Default size: Medium
  const [quantity, setQuantity] = useState(1); // Default quantity: 1

  // Calculate the total price
  const calculateTotal = () => {
    const pricePerItem = sizePrice[selectedSize];
    const totalPrice = pricePerItem * quantity + shippingCost;
    return totalPrice;
  };

  
  return (
    <section className="w-full  py-8">
      <div className="w-full mx-auto p-4">
        <div className="flex w-full flex-col lg:flex-row ">
          {/* Images Section */}
          <div className="lg:w-[60%]">
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
            <div className="hidden lg:grid transition-all duration-300 gap-4">
              <div className="flex w-full ml-16 flex-col lg:flex-row gap-8">
                {/* Images Section */}
                <div className="lg:w-24 h-auto">
                  {/* Thumbnails for larger screens */}
                  <div className="hidden lg:grid grid-cols-1 gap-4">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer border-2 rounded-lg p-0.5 ${
                          selectedImage === image
                            ? "border-gray-900"
                            : "border-transparent"
                        }`}
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index}`}
                          className="w-full object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Display selected image on larger screens */}
                <div className="lg:w-[70%]">
                  <ImageZoom imageUrl={selectedImage} zoomLevel={2} />
                </div>
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="w-full mt-5 lg:mt-0 lg:w-[50%] ">
            <div className="mb-10 gap-3 md:mt-10 flex-col flex">
              <h2 className="lg:text-4xl text-2xl lg:font-[700] font-[400]">
                Asim Jofa Indian Lawn
              </h2>
              <div className="flex gap-2 items-center">
                <p className="lg:text-2xl text:sm lg:font-[600] font-[400]">
                  Price: 5449
                </p>
                <p className="text-gray-600 text-sm mt-2.5 mb-2">(5.0)</p>
                <a
                  to="/"
                  className="underline hover:decoration-transparent cursor-pointer text-gray-600 text-sm mt-2.5 mb-2"
                >
                  355 Reviews
                </a>
              </div>
              <div className="text-sm lg:text-[1rem]">
                <p className="text-gray-600 mb-2">
                  <span className="lg:font-[500] font-[400]">Discount:</span>{" "}
                  10%
                </p>

                <p className="text-gray-600 mb-2">
                  <span className="lg:font-[500] font-[400]">Fabric:</span> Lawn
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="lg:font-[500] font-[400]">Type:</span>{" "}
                  Stitched
                </p>
              </div>
              <hr width="80%" />
              <div className="lg:w-[30%]">
                {/* Size selection - as tabs */}
                <div className=" mb-4  ">
                  <label className="block font-bold mb-2">Select Size:</label>
                  <div className="filter flex overflow-x-auto space-x-4">
                    {Object.keys(sizePrice).map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-7 py-3 border rounded-lg ${
                          selectedSize === size
                            ? "bg-black text-white"
                            : " text-black"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity selection */}
              <div className="mb-4">
                <label className="block font-bold mb-2">Select Quantity:</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-32 p-2 border rounded-xl"
                />
              </div>

              {/* Price calculation */}
              <div className="mb-4   lg:w-[30%]">
                <div className="text-lg flex justify-between ">
                  <p className="text-gray-500">Price per item</p>
                  <p className="font-semibold">${sizePrice[selectedSize]}</p>
                </div>
                <div className="text-lg flex justify-between ">
                  <p className="text-gray-500">Shipping cost</p>
                  <p className="font-semibold">${shippingCost}</p>
                </div>

                <div className="text-lg flex justify-between ">
                  <p className="text-black font-semibold">Total Price</p>
                  <p className="font-semibold">${calculateTotal()}</p>
                </div>
              </div>
              <div className="lg:flex gap-3">
                <button className="bg-black block mt-3 w w-full lg:w-[200px] lg:py-3 lg:px-10 py-2 px-7 text-white  rounded-lg hover:bg-gray-700 transition-all">
                  Add to Cart
                </button>
                <button className="bg-black block w-full mt-3 lg:w-[200px] lg:py-3 lg:px-10 py-2 px-7 text-white  rounded-lg hover:bg-gray-700 transition-all">
                  Buy Now
                </button>
              </div>
            </div>
            <hr width="80%" />

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
                    casual occasion. Let your ensemble sing with the harmonious
                    melody of magenta adorned with mink color and two-toned zari
                    accompanied by shimmering light gold 3mm sequins. Like notes
                    in a symphony, the threadwork in purple, pink, green and
                    self-color intertwines to create a masterpiece of elegance.
                    With embroidered center and side panels as well as neckline
                    detailing for the back and back itself, this ensemble is a
                    tribute to refined style. The embroidered border for the
                    hemline and sleeves with border adds depth and richness
                    while the embroidered border for chaak conducts the
                    ensemble's grace. Wrap yourself in the embroidered dupatta
                    with borders and let the magenta symphony serenade you.
                  </p>
                </div>
              )}
            </div>

            <div className="w-full max-w-2xl mt-4">
              <div
                onClick={toggleLocalDelivery}
                className="flex justify-between items-center bg-gray-100 px-4 py-3 cursor-pointer rounded-lg border"
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  Local Delivery Timing
                </h3>
                <span className="text-2xl text-gray-600">
                  {isLocalDeliveryOpen ? "-" : "+"}
                </span>
              </div>
              {isLocalDeliveryOpen && (
                <div className="bg-white px-4 py-4 mt-2 rounded-lg transition-all duration-500">
                  <p className="text-gray-600">
                    Local delivery usually takes 3-5 business days. Orders
                    placed before 2 PM are processed the same day to ensure
                    faster delivery.
                  </p>
                </div>
              )}
            </div>

            <section className=" py-8 antialiased md:py-16">
              <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
                    Reviews
                  </h2>

                  <div className="mt-2 flex items-center gap-2 sm:mt-0">
                    <div className="flex items-center gap-0.5">
                      {[...Array(1)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm font-medium leading-none text-gray-500">
                      (4.6)
                    </p>
                    <a
                      href="#"
                      className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline"
                    >
                      645 Reviews
                    </a>
                  </div>
                </div>

                <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
                  <div className="shrink-0 space-y-4">
                    <p className="text-lg lg:text-2xl font-semibold leading-none text-gray-900">
                      4.65 out of 5
                    </p>
                  </div>

                  <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
                    <div className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900">
                        5
                      </p>
                      <svg
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <div className="h-1.5 w-52 lg:w-80 rounded-full bg-gray-100">
                        <div
                          className="h-1.5 rounded-full bg-yellow-300"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                      <a
                        href="#"
                        className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline sm:w-auto sm:text-left"
                      >
                        239 reviews
                      </a>
                    </div>

                    {/* Add more reviews here */}
                    <div className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900">
                        4
                      </p>
                      <svg
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <div className="h-1.5 w-52 lg:w-80 rounded-full bg-gray-100">
                        <div
                          className="h-1.5 rounded-full bg-yellow-300"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <a
                        href="#"
                        className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline sm:w-auto sm:text-left"
                      >
                        432 reviews
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900">
                        3
                      </p>
                      <svg
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <div className="h-1.5 w-52 lg:w-80 rounded-full bg-gray-100">
                        <div
                          className="h-1.5 rounded-full bg-yellow-300"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <a
                        href="#"
                        className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline sm:w-auto sm:text-left"
                      >
                        123 reviews
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample Reviews */}
              <div className="filter2 my-4  overflow-y-scroll h-[40rem] lg:w-[80%]  space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Awais Ali</h3>
                  <h3 className="text-sm text-gray-500">09/08/2024</h3>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600">
                    "Great product! I'm very satisfied."
                  </p>
                  <div className="img flex gap-2 mt-3 w-24">
                    <img
                      src="https://asimjofa.com/cdn/shop/files/051A5980_543ffd91-6a45-416a-9b03-0b7cd57d1609.jpg?v=1726657081&width=600"
                      className="w-full h-auto rounded-lg shadow-md"
                      alt="Product Image 1"
                    />
                    <img
                      src="https://asimjofa.com/cdn/shop/files/051A6043_3d1b4735-105f-41f8-9d6c-00ee05c51945.jpg?v=1726657081&width=600"
                      className="w-full h-auto rounded-lg shadow-md"
                      alt="Product Image 2"
                    />
                    <img
                      src="https://asimjofa.com/cdn/shop/files/051A6043_3d1b4735-105f-41f8-9d6c-00ee05c51945.jpg?v=1726657081&width=600"
                      className="w-full h-auto rounded-lg shadow-md"
                      alt="Product Image 2"
                    />
                  </div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Hamza Waheed</h3>
                  <h3 className="text-sm text-gray-500">09/08/2024</h3>
                  <div className="flex items-center gap-0.5">
                    {[...Array(3)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600">"Good value for money."</p>
                  <div className="img flex gap-2 mt-3 w-24">
                    <img
                      src="https://asimjofa.com/cdn/shop/files/051A5980_543ffd91-6a45-416a-9b03-0b7cd57d1609.jpg?v=1726657081&width=600"
                      className="w-full h-auto rounded-lg shadow-md"
                      alt="Product Image 1"
                    />
                    <img
                      src="https://asimjofa.com/cdn/shop/files/051A6043_3d1b4735-105f-41f8-9d6c-00ee05c51945.jpg?v=1726657081&width=600"
                      className="w-full h-auto rounded-lg shadow-md"
                      alt="Product Image 2"
                    />
                  </div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Awais Ali</h3>
                  <h3 className="text-sm text-gray-500">09/08/2024</h3>
                  <div className="flex items-center gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>{" "}
                  <p className="text-gray-600">
                    "Decent quality, but room for improvement."
                  </p>
                  <div className="img flex gap-2 mt-3 w-24">
                    <img
                      src="https://asimjofa.com/cdn/shop/files/051A5980_543ffd91-6a45-416a-9b03-0b7cd57d1609.jpg?v=1726657081&width=600"
                      className="w-full h-auto rounded-lg shadow-md"
                      alt="Product Image 1"
                    />
                    <img
                      src="https://asimjofa.com/cdn/shop/files/051A6043_3d1b4735-105f-41f8-9d6c-00ee05c51945.jpg?v=1726657081&width=600"
                      className="w-full h-auto rounded-lg shadow-md"
                      alt="Product Image 2"
                    />
                  </div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Hamza Waheed</h3>
                  <h3 className="text-sm text-gray-500">09/08/2024</h3>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600">
                    "Decent quality, but room for improvement."
                  </p>

                  <div className="img flex gap-2 mt-3 w-24">
                    <img
                      src="https://asimjofa.com/cdn/shop/files/051A5980_543ffd91-6a45-416a-9b03-0b7cd57d1609.jpg?v=1726657081&width=600"
                      className="w-full h-auto rounded-lg shadow-md"
                      alt="Product Image 1"
                    />
                  </div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Awais Ali</h3>
                  <h3 className="text-sm text-gray-500">09/08/2024</h3>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600">
                    "Decent quality, but room for improvement."
                  </p>

                  <div className="img flex gap-2 mt-3 w-24">
                    <img
                      src="https://asimjofa.com/cdn/shop/files/051A5980_543ffd91-6a45-416a-9b03-0b7cd57d1609.jpg?v=1726657081&width=600"
                      className="w-full h-auto rounded-lg shadow-md"
                      alt="Product Image 1"
                    />
                    <img
                      src="https://asimjofa.com/cdn/shop/files/051A6043_3d1b4735-105f-41f8-9d6c-00ee05c51945.jpg?v=1726657081&width=600"
                      className="w-full h-auto rounded-lg shadow-md"
                      alt="Product Image 2"
                    />
                    <img
                      src="https://asimjofa.com/cdn/shop/files/051A6043_3d1b4735-105f-41f8-9d6c-00ee05c51945.jpg?v=1726657081&width=600"
                      className="w-full h-auto rounded-lg shadow-md"
                      alt="Product Image 2"
                    />
                  </div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Hamza Waheed</h3>
                  <h3 className="text-sm text-gray-500">09/08/2024</h3>
                  <div className="flex items-center gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600">
                    "Decent quality, but room for improvement."
                  </p>

                  <div className="img flex gap-2 mt-3 w-24">
                    <img
                      src="https://asimjofa.com/cdn/shop/files/051A5980_543ffd91-6a45-416a-9b03-0b7cd57d1609.jpg?v=1726657081&width=600"
                      className="w-full h-auto rounded-lg shadow-md"
                      alt="Product Image 1"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
