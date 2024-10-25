import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="lg:bg-gray-50 rounded-3xl lg:shadow-md w-full max-w-4xl flex h-3/4">
                {/* Left Side: Form */}
                <div className="lg:w-1/2 w-full h-full flex items-center justify-center p-8">
                    <div className="w-full">
                        <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="flex  items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg w-full">
                                    Log In
                                </button>
                            </div>
                            <p className="mt-2 ">Already have an account <Link to="/signup" className="font-bold text-orange-500">SignUp</Link></p>
                        </form>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-1/2 hidden md:block lg:block h-full">
                    <img
                        src="https://nishatlinen.com/cdn/shop/files/42404112-_1.jpg?v=1725982145&width=500" // Replace with your image URL
                        alt="Login Visual"
                        className="w-full h-full object-cover rounded-r-3xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default LogIn;
