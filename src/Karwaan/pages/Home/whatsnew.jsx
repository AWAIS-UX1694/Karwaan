const WhatsNew = () => {
  return (
    <>
      <div class="flex items-center lg:space-x-16 lg:py-36 py-10 lg:gap-0 ">
        <div className="what  text-center mx-10 ">
          <h2 className="lg:text-5xl  md:text-3xl text-normal lg:w-[30rem] md:w-[17rem] w-8 uppercase text-center">
            New Collection
          </h2>
        </div>
        <div className="filter item-center mx-10 flex overflow-scroll w-full gap-2 lg:gap-8">
          <div class="text-center w-52 ">
            <img
              class="lg:w-52 w-24  rounded-full object-cover border-2 border-gray-200"
              src="https://asimjofa.com/cdn/shop/files/268A0324_d5d1ee5d-e477-456e-9746-b29cbc7c40a3.jpg?v=1717852186&width=200"
              alt=""
            />
            <span className="lg:text-lg md:text-md text-xs font-[500]">Men</span>
          </div>
          <div class="text-center w-52 ">
            <img
              class="lg:w-52 w-24  rounded-full object-cover border-2 border-gray-200"
              src="https://asimjofa.com/cdn/shop/files/200_x_200_whats_new_circle.jpg?v=1728719253&width=200"
              alt=""
            />
            <span className="lg:text-lg md:text-md text-xs font-[500]">Woman</span>
          </div>
          <div class="text-center w-52 ">
            <img
              class="lg:w-52 w-24  rounded-full object-cover border-2 border-gray-200"
              src="https://asimjofa.com/cdn/shop/files/limited_edition-min.jpg?v=1728304562&width=200"
              alt=""
            />
            <span className="lg:text-lg md:text-md text-xs font-[500]">Winter</span>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
