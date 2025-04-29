import { useState, useEffect, useRef } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const lastScrollPosition = useRef(0);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition <= 0) {
        // At top of page
        setIsNavbarVisible(true);
        lastScrollPosition.current = currentScrollPosition;
        return;
      }

      if (currentScrollPosition > lastScrollPosition.current) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      lastScrollPosition.current = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isHovered ? "text-black" : "text-white";
  const bgColor = isHovered ? "bg-white" : "bg-transparent";
  const navbarClasses = `fixed w-full z-20 top-0 start-0 transition-all duration-300 ${bgColor} ${
    isNavbarVisible ? "translate-y-0" : "-translate-y-full"
  }`;

  return (
    <nav
      ref={navbarRef}
      className={navbarClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4 xl:px-20">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/btg-logo.svg" className="h-8" alt="BTG Logo" />
          <span
            className={`self-center text-2xl font-bold whitespace-nowrap ${textColor} transition-colors duration-300`}
          >
            BTG
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="cursor-pointer bg-[#0655D1] hover:bg-blue-800 hover:font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 hover:scale-110"
          >
            Contact
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm ${textColor} rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-300`}
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          {/* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <a
                href="#"
                className={`block py-2 px-3 ${textColor} rounded-sm md:hover:bg-transparent md:p-0 transition-all duration-200 hover:scale-110 hover:underline`}
                aria-current="page"
              >
                Despre noi
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 ${textColor} rounded-sm md:hover:bg-transparent md:p-0 transition-colors duration-300`}
              >
                Solutii
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 ${textColor} rounded-sm md:hover:bg-transparent md:p-0 transition-colors duration-300`}
              >
                Expertiza
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 ${textColor} rounded-sm md:hover:bg-transparent md:p-0 transition-colors duration-300`}
              >
                Portofoliu
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 ${textColor} rounded-sm md:hover:bg-transparent md:p-0 transition-colors duration-300`}
              >
                Blog
              </a>
            </li>
          </ul> */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li className="relative group">
              <a
                href="#"
                className={`block py-2 px-3 ${textColor} rounded-sm md:p-0 transition-all duration-300 `}
                aria-current="page"
              >
                Despre noi
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className={`block py-2 px-3 ${textColor} rounded-sm md:p-0 transition-all duration-300 `}
              >
                Solutii
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className={`block py-2 px-3 ${textColor} rounded-sm md:p-0 transition-all duration-300 `}
              >
                Expertiza
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className={`block py-2 px-3 ${textColor} rounded-sm md:p-0 transition-all duration-300 `}
              >
                Portofoliu
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className={`block py-2 px-3 ${textColor} rounded-sm md:p-0 transition-all duration-300 `}
              >
                Blog
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
