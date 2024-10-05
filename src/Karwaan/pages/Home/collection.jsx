const Collection = () => {
    return (
        <section className="w-full p-4">
            <div className="main flex flex-col gap-7 md:flex-row lg:flex-row">
                <div className="right bg-cover rounded-3xl overflow-hidden bg-slate-300 md:h-svh w-full lg:w-[35vw]">
                    <img className="h-full w-full" src="https://www.hdcollection.com.pk/cdn/shop/files/9_e7c59b7d-dd79-4e11-9c0d-a1f7a9f4e0f0.jpg?v=1683839000" alt="" />
                </div>
                <div className="left flex flex-col gap-7 w-full h-svh lg:w-[65vw]">
                    <div className="men h-[50%] w-full overflow-hidden gap-7 flex flex-col md:flex-row lg:flex-row">
                        <div className="stiched bg-contain rounded-3xl overflow-hidden w-full h-[100%] lg-h-auto lg:w-[50%]">
                            <img className="" src="https://rilancio.pk/cdn/shop/files/MSTE2P24V328_5_1000x.jpg?v=1716544664" alt="" />
                        </div>
                        <div className="unstiched bg-cover rounded-3xl overflow-hidden w-full h-[100%] lg-h-auto lg:w-[50%]">
                            <img className="" src="https://chasevalue.pk/cdn/shop/products/DZ7A9426_496b6cda-870a-4540-80b3-6652bef87fe2.jpg?v=1631010593" alt="" />
                        </div>
                    </div>
                    <div className="women rounded-3xl overflow-hidden w-full md:h-[50%]">
                            <img className="h-full" src="https://global.bonanzasatrangi.com/cdn/shop/collections/unstitched_2.jpg?v=1695281501" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Collection;
