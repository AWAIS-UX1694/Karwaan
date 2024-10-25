import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="flex md:px-9 px-5 p-3 justify-between bg-white dark:bg-black  text-center items-center">
        <div className="menu hover:rotate-180 transition-all duration-500 transform-gpu cursor-pointer ">
          <img
            onClick={toggleDrawer}
            className="md:w-8  md:h-8 w-6 h-6"
            color="white"
            src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-application-user-interface-anggara-basic-outline-anggara-putra.png"
            alt="external-application-user-interface-anggara-basic-outline-anggara-putra"
          />
        </div>

        <div className="logo md:text-3xl dark:text-orange-600 text-2xl font-600 ">
          <Link to="/"> Karwaa.n </Link>
        </div>
        <div className="links flex gap-3 items-center">
          <div className="font-bold hidden sm:visible">About</div>
          <div className="font-bold hidden md:hidden">FAQ's</div>
          <Link to="/cart">
          <div className="rounded-full bg-gray-100  md:p-4 p-2">
            <img
            className="md:w-6 md:h-6 w-5 h-5"
            
              src="https://img.icons8.com/forma-thin/24/shopping-bag.png"
              alt="shopping-bag"
            />{" "}
          </div></Link>
        </div>
      </header>
      {/* SIDEBAR */}
      <div className="text-center">
        {/* Drawer trigger button */}

        {/* Drawer component */}
        <div
          className={`fixed top-0 left-0 z-40 w-72 h-screen p-4 bg-white dark:bg-black transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-labelledby="drawer-navigation-label"
        >
          <Link to="/">
            <h1
              id="drawer-navigation-label"
              className="logo font-bold text-start text-2xl uppercase dark:text-white"
            >
              Karwaa.n
            </h1>
          </Link>
          <button
            type="button"
            onClick={toggleDrawer}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black group"
                >
                  <svg
                  className="w-6 h-6 text-black transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2L3 9h3v10h6V14h2v5h6V9h3L12 2z" />
                  </svg>{" "}
                  <span className="ml-3">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/brand"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black group"
                >
                  <svg
                    className="w-5 h-5 text-black transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="ml-3">Brand</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/allproduct"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black group"
                >
                  <svg
                    className="w-5 h-5 text-black transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="ml-3">All Product</span>
                </Link>
              </li>
              {/* Add more navigation links as needed */}
            </ul>
            <ul className="absolute bottom-4">
            <li>
                <Link
                  to="/login"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black group"
                >
                  <svg
                    className="w-5 h-5 text-black transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="ml-3">LogIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleDrawer}
          ></div>
        )}
      </div>
    </>
  );
};

export default Header;
