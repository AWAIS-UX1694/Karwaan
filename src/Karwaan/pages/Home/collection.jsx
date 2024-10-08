const Collection = () => {
  return (
    <section className="w-full p-4">
      <div className="main flex flex-col gap-7 md:flex-row lg:flex-row">
        <div className="right bg-cover rounded-3xl overflow-hidden bg-slate-300 min-h-[40rem] md:h-svh w-full lg:w-[35vw]">
        <div className="absolute m-3 md:m-10 ">
              <h2 className="text-[2rem] md:text-[2.5rem]  font-[700] z-10 text-orange-500 ">
                Women Unstitched
              </h2>
              <h2 className="md:text-4xl text-3xl text-white font-[600]">Collection</h2>
              <button className="wst flex items-center gap-3 mt-2 border-0 bg-transparent hover:ml-5 transition-all duration-300 font-[200] ml-1">
                <p className="md:text-xl text-lg text-white">View Product</p>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="md:w-6 md:h-6 h-4 w-4"
                  color="orange"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
        </div>
        <div className="left flex flex-col gap-7 w-full h-svh lg:w-[65vw]">
          <div className="men h-[50%] w-full overflow-hidden gap-7 flex flex-col md:flex-row lg:flex-row">
            <div className="stiched bg-contain rounded-3xl overflow-hidden w-full h-[200rem] md:h-[100%] lg-h-auto lg:w-[50%]">
            <div className="absolute m-3 md:m-10 ">
              <h2 className="text-[2rem] md:text-[2.5rem]  font-[700] z-10 text-orange-500 ">
                Men Stitched
              </h2>
              <h2 className="md:text-4xl text-3xl text-white font-[600]">Collection</h2>
              <button className="wst flex items-center gap-3 mt-2 border-0 bg-transparent hover:ml-5 transition-all duration-300 font-[200] ml-1">
                <p className="md:text-xl text-lg text-white">View Product</p>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="md:w-6 md:h-6 h-4 w-4"
                  color="orange"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
              <img
                className=""
                src="https://rilancio.pk/cdn/shop/files/MSTE2P24V328_5_1000x.jpg?v=1716544664"
                alt=""
              />
            </div>
            <div className="unstiched bg-cover rounded-3xl overflow-hidden w-full h-[200rem] md:h-[100%] lg-h-auto lg:w-[50%]">
            <div className="absolute m-3 md:m-10 ">
              <h2 className="text-[2rem] md:text-[2.5rem]  font-[700] z-10 text-orange-500 ">
                Men Unstitched
              </h2>
              <h2 className="md:text-4xl text-3xl text-white font-[600]">Collection</h2>
              <button className="wst flex items-center gap-3 mt-2 border-0 bg-transparent hover:ml-5 transition-all duration-300 font-[200] ml-1">
                <p className="md:text-xl text-lg text-white">View Product</p>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="md:w-6 md:h-6 h-4 w-4"
                  color="orange"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
              <img
                className=""
                src="https://chasevalue.pk/cdn/shop/products/DZ7A9426_496b6cda-870a-4540-80b3-6652bef87fe2.jpg?v=1631010593"
                alt=""
              />
            </div>
          </div>
          <div className="women rounded-3xl overflow-hidden w-full h-[12rem] md:h-[50%]">
          <div className="absolute m-3 md:m-10 ">
              <h2 className="text-[2rem] md:text-[2.5rem]  font-[700] z-10 text-orange-500 ">
                Women Stitched
              </h2>
              <h2 className="md:text-4xl text-3xl text-white font-[600]">Collection</h2>
              <button className="wst flex items-center gap-3 mt-2 border-0 bg-transparent hover:ml-5 transition-all duration-300 font-[200] ml-1">
                <p className="md:text-xl text-lg text-white">View Product</p>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="md:w-6 md:h-6 h-4 w-4"
                  color="orange"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <img
              className="h-full"
              src="https://global.bonanzasatrangi.com/cdn/shop/collections/unstitched_2.jpg?v=1695281501"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
