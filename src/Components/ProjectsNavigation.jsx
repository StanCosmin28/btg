import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import data from "../Model/data";
import "./navbar.css";
export default function ProjectsNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollPosition = useRef(0);
  const navbarRef = useRef(null);
  const isMobile = window.innerWidth < 425;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition < lastScrollPosition.current) {
        // Scrolling up
        setIsNavbarVisible(true);
      } else {
        // Scrolling down
        setIsNavbarVisible(false);
      }

      lastScrollPosition.current = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `fixed w-full z-20 top-0 start-0 transition-all duration-300 bg-white ${
    isNavbarVisible ? "translate-y-0" : "-translate-y-full"
  } shadow-md`;

  return (
    <nav ref={navbarRef} className={navbarClasses}>
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4 xl:px-20">
        <Link
          to="/fragar"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={data.logo} className="h-8" alt="Fragar" />
          <span className="leading-none self-center text-xl font-bold whitespace-nowrap text-black transition-colors duration-300">
            {isMobile ? "Fragar" : "Fragar Trading"}
          </span>
        </Link>
        <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="tel:+40232250885" className="md:hidden">
            <button
              type="button"
              className="text-white cursor-pointer bg-[#0655D1] hover:bg-blue-800 hover:font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 hover:scale-110"
            >
              Contact
            </button>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-300"
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
          <div
            className={`absolute top-full left-0 w-full md:static md:flex md:w-auto transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            } md:opacity-100 md:translate-y-0 md:pointer-events-auto`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 font-bold bg-white text-black md:bg-transparent md:text-black rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:items-center">
              <li className="relative group">
                <Link
                  to="/fragar"
                  className="block py-2 px-3 text-black rounded-sm md:p-0 transition-all duration-300 cursor-pointer"
                  //   onClick={(e) => handleScrollToSection(e, "home")}
                >
                  Acasa
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="relative group">
                <a
                  className="block py-2 px-3 text-black rounded-sm md:p-0 transition-all duration-300 cursor-pointer"
                  onClick={(e) => handleScrollToSection(e, "about")}
                >
                  Despre noi
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="relative group">
                <a
                  className="block py-2 px-3 text-black rounded-sm md:p-0 transition-all duration-300 cursor-pointer"
                  onClick={(e) => handleScrollToSection(e, "solutions")}
                >
                  Servicii
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              {/* <li className="relative group">
                <a
                  className="block py-2 px-3 text-black rounded-sm md:p-0 transition-all duration-300 cursor-pointer"
                  onClick={(e) => handleScrollToSection(e, "expertiza")}
                >
                  Proiecte
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li> */}
              <li className="relative group md:ml-4 hidden md:block">
                <a href="tel:+40232250885">
                  <button className="text-white cursor-pointer bg-[#0655D1] hover:bg-blue-800 hover:font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 hover:scale-110">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                      Contact
                    </span>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
