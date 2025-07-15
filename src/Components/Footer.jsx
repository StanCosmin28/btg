import data from "../Model/data";
import "./footer.css";
export default function Footer() {
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop, // Adjust for fixed header (e.g., 80px)
        behavior: "smooth",
      });
    }
  };
  return (
    <footer className="mx-auto w-full p-4 py-6 lg:py-8 bg-gray-900 text-white">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* Logo and Description Section */}
        <div className="flex flex-col gap-8 text-left lg:w-1/3">
          <div className="flex flex-row items-center gap-4 justify-between px-2">
            <a href="/" className="flex items-center group">
              <img
                src={data.logoFull}
                className="h-20 mr-3 small-footer-logo"
                alt="BTG Logo"
              />
              <span className="text-xl font-semibold whitespace-nowrap text-white group-hover:text-blue-400 transition-colors">
                {/* BTG */}
              </span>
            </a>
          </div>

          <a href="tel:+40232250885">
            <button className="w-[285px] p-2 sm:p-3 text-sm sm:text-base font-bold text-white bg-[#0655D1] hover:bg-blue-800 hover:scale-105 transition-all duration-300 rounded-md contact-btn cursor-pointer">
              Contactează-ne
            </button>
          </a>
          <p className="text-gray-400 text-sm sm:text-xl">
            Viziunea ta | Planul nostru smart
          </p>
        </div>

        {/* Servicii, Companie, Contact Sections */}
        <div className="flex lg:flex-row lg:gap-12 gap-6 lg:w-2/3 text-left small-footer xl:gap-40 justify-between">
          {/* Servicii Section */}
          <div className="">
            <h2 className="mb-4 text-sm font-semibold text-white uppercase">
              Servicii
            </h2>
            <ul className="text-gray-400 font-medium space-y-2">
              <li>
                <a className="hover:text-white cursor-pointer">Proiectare</a>
              </li>
              <li>
                <a className="hover:text-white cursor-pointer">Optimizare</a>
              </li>
              <li>
                <a className="hover:text-white cursor-pointer">Integrare BMS</a>
              </li>
            </ul>
          </div>

          {/* Companie Section */}
          <div className="">
            <h2 className="mb-4 text-sm font-semibold text-white uppercase">
              Companie
            </h2>
            <ul className="text-gray-400 font-medium space-y-2">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollToSection(e, "about")}
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  Despre Noi
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleScrollToSection(e, "solutions")}
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  Solutii
                </a>
              </li>
              <li>
                <a
                  href="#expertiza"
                  onClick={(e) => handleScrollToSection(e, "expertiza")}
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  Expertiza
                </a>
              </li>
              <li>
                <a
                  href="#proiecte"
                  onClick={(e) => handleScrollToSection(e, "proiecte")}
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  Portofoliu
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={(e) => handleScrollToSection(e, "blog")}
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="">
            <h2 className="mb-4 text-sm font-semibold text-white uppercase">
              Contact
            </h2>
            <div className="flex flex-col gap-3">
              {/* Email */}
              <a
                href="mailto:tehnic@btgromania.ro"
                className="group flex items-center gap-3 transition-transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white transition-colors group-hover:text-blue-200 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-white text-sm sm:text-base font-medium hover:underline transition-colors group-hover:text-blue-200">
                  tehnic@btgromania.ro
                </span>
              </a>

              {/* Location */}
              <a
                href="https://maps.app.goo.gl/your-location" // Replace with actual Google Maps link
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white transition-colors group-hover:text-blue-200 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-white text-sm sm:text-base font-medium hover:underline transition-colors group-hover:text-blue-200">
                  Iasi, Aleea Rozelor, Nr. 6A, <br /> Demisol
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+40232250885"
                className="group flex items-center gap-3 transition-transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white transition-colors group-hover:text-blue-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-white text-sm sm:text-base font-medium hover:underline transition-colors group-hover:text-blue-200">
                  0232.250.885
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

      {/* Copyright and Social Links */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-gray-400 text-sm">
        <span className="text-center sm:text-left">
          © 2025{" "}
          <a
            href="/"
            className="hover:text-white hover:underline transition-colors"
          >
            BTG
          </a>
          . Toate drepturile rezervate.
        </span>
        <div className="flex justify-center space-x-5 ">
          {/* <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110"
            aria-label="Facebook"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110"
            aria-label="Twitter"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110"
            aria-label="Instagram"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808 0 2.43-.012 2.784-.06 3.808-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06-2.43 0-2.784-.012-3.808-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808 0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C9.901 2.013 10.256 2 12.685 2h-.37zm-.1 1.83c-2.403 0-2.738.01-3.762.058-.976.046-1.505.207-1.858.344a3.098 3.098 0 00-1.126.73 3.098 3.098 0 00-.73 1.126c-.137.353-.298.882-.344 1.858-.048 1.024-.058 1.359-.058 3.762 0 2.403.01 2.738.058 3.762.046.976.207 1.505.344 1.858.15.385.363.717.73 1.126.409.367.741.58 1.126.73.353.137.882.298 1.858.344 1.023.048 1.359.058 3.762.058 2.403 0 2.738-.01 3.762-.058.976-.046 1.505-.207 1.858-.344a3.098 3.098 0 001.126-.73 3.098 3.098 0 00.73-1.126c.137-.353.298-.882.344-1.858.048-1.024.058-1.359.058-3.762 0-2.403-.01-2.738-.058-3.762-.046-.976-.207-1.505-.344-1.858a3.098 3.098 0 00-.73-1.126 3.098 3.098 0 00-1.126-.73c-.353-.137-.882-.298-1.858-.344-1.023-.048-1.359-.058-3.762-.058zm0 3.366a6.364 6.364 0 100 12.728 6.364 6.364 0 000-12.728zm0 10.5a4.136 4.136 0 110-8.272 4.136 4.136 0 010 8.272zm4.97-9.818a1.485 1.485 0 11-2.97 0 1.485 1.485 0 012.97 0z"
                clipRule="evenodd"
              />
            </svg>
          </a> */}
          <p>Termeni și condiții</p>
          <p>Politica de confidențialitate</p>
        </div>
      </div>
    </footer>
  );
}
