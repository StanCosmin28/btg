import { useState, useEffect, useRef } from "react";
import data from "../Model/data";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false); // Initially hidden
  // const [isHovered, setIsHovered] = useState(false);
  const lastScrollPosition = useRef(0);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop, // Adjust for fixed header (e.g., 80px)
        behavior: "smooth",
      });
      setIsMenuOpen(!isMenuOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      const videoHeight = window.innerHeight; // Adjust based on your video section height

      // If at the top or within video section, hide navbar
      if (currentScrollPosition <= videoHeight) {
        setIsNavbarVisible(false);
        lastScrollPosition.current = currentScrollPosition;
        return;
      }

      // After video section
      if (currentScrollPosition > videoHeight) {
        if (currentScrollPosition < lastScrollPosition.current) {
          // Scrolling up
          setIsNavbarVisible(true);
        } else {
          // Scrolling down
          setIsNavbarVisible(false);
        }
      }

      lastScrollPosition.current = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = "text-black";
  const bgColor = "bg-white";
  const navbarClasses = `fixed w-full z-20 top-0 start-0 transition-all duration-300 ${bgColor} ${
    isNavbarVisible ? "translate-y-0 bg-white" : "-translate-y-full"
  }`;

  return (
    <nav
      ref={navbarRef}
      className={navbarClasses}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4 xl:px-20">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse scale-110"
        >
          <img src={data.logoFull} className="h-12" alt="BTG Logo" />
          <span
            className={`self-center text-2xl font-bold whitespace-nowrap ${textColor} transition-colors duration-300`}
          >
            {/* BTG */}
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="tel:+40232250885">
            <button
              type="button"
              className="cursor-pointer bg-[#0655D1] hover:bg-blue-800 hover:font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 hover:scale-110"
            >
              Contact
            </button>
          </a>
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
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li className="relative group">
              <a
                // href="about"
                className={`block py-2 px-3 ${textColor} rounded-sm md:p-0 transition-all duration-300 cursor-pointer`}
                aria-current="page"
                onClick={(e) => handleScrollToSection(e, "about")}
              >
                Despre noi
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                // href="solutions"
                className={`block py-2 px-3 ${textColor} rounded-sm md:p-0 transition-all duration-300 cursor-pointer`}
                onClick={(e) => handleScrollToSection(e, "solutions")}
              >
                Solutii
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                // href="#"
                className={`block py-2 px-3 ${textColor} rounded-sm md:p-0 transition-all duration-300 cursor-pointer`}
                onClick={(e) => handleScrollToSection(e, "expertiza")}
              >
                Expertiza
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                // href="#"
                className={`block py-2 px-3 ${textColor} rounded-sm md:p-0 transition-all duration-300 cursor-pointer`}
                onClick={(e) => handleScrollToSection(e, "proiecte")}
              >
                Portofoliu
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                // href="#"
                className={`block py-2 px-3 ${textColor} rounded-sm md:p-0 transition-all duration-300 cursor-pointer`}
                onClick={(e) => handleScrollToSection(e, "blog")}
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
