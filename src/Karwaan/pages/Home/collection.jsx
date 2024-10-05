const Collection = () => {
    return (
        <section className="w-full p-4">
            <div className="main flex flex-col gap-7 md:flex-row lg:flex-row">
                <div className="right bg-cover bg-slate-300 h-svh w-full lg:w-[40vw]">
                    <img className="w-full h-full" src="https://www.eshaalcollection.com/cdn/shop/products/maria-b-mprints-lawn-2023-collection-1a-_1__1_1_490x.progressive.jpg?v=1676540473" alt="" />
                </div>
                <div className="left flex flex-col gap-7 bg-red-300 w-full lg:w-[60vw]">
                    <div className="men bg-amber-500 w-full  md:h-[50%] gap-7 flex flex-col md:flex-row lg:flex-row">
                        <div className="stiched bg-red-500 w-full h-72 md:h-auto lg-h-auto lg:w-[50%]"></div>
                        <div className="unstiched bg-green-400 w-full h-72 md:h-auto lg-h-auto lg:w-[50%]"></div>
                    </div>
                    <div className="women bg-indigo-500 w-full h-72 md:h-[50%]"></div>
                </div>
            </div>
        </section>
    );
}

export default Collection;
