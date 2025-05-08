export default function Footer() {
  return (
    <footer className="bg-[#000E18]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col text-left gap-4">
              <div className="flex flex-row md:flex-col gap-4 justify-evenly">
                <a href="/" className="flex items-center group">
                  <img
                    src="public/btg-logo.svg"
                    className="h-8 me-3 transition-transform group-hover:rotate-12"
                    alt="Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white group-hover:text-blue-400 transition-colors">
                    BTG
                  </span>
                </a>
                <p>
                  Lorem ipsum dolor sit, amet <br /> consectetur adipisicing
                  elit.
                </p>
              </div>
              <div>
                <button className="transition-all duration-300 hover:scale-110 hover:rounded-xl max-w-4xl w-full p-2 sm:p-3 text-base sm:text-lg md:text-xl text-white font-bold hover:bg-blue-800 hover:text-white  cursor-pointer bg-[#0655D1]">
                  Contactează-ne
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3 text-left">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Servicii
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="">
                  <a
                    href="#"
                    className="hover:text-white hover:underline underline-offset-4 transition-all"
                  >
                    Proiectare
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline underline-offset-4 transition-all"
                  >
                    Optimizare
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline underline-offset-4 transition-all"
                  >
                    Integrare BMS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Companie
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="">
                  <a
                    href="#"
                    className="hover:text-white hover:underline underline-offset-4 transition-all"
                  >
                    Despre Noi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline underline-offset-4 transition-all"
                  >
                    Solutii
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline underline-offset-4 transition-all"
                  >
                    Expertiza
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline underline-offset-4 transition-all"
                  >
                    Portofoliu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline underline-offset-4 transition-all"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Contact
              </h2>
              {/* <ul className="text-gray-400 font-medium">
                <li className="">
                  <a
                    href="#"
                    className="hover:text-white hover:underline underline-offset-4 transition-all"
                  >
                    Locatie
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline underline-offset-4 transition-all"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline underline-offset-4 transition-all"
                  >
                    tel
                  </a>
                </li>
              </ul> */}
              <div className="flex justify-left flex-col gap-2 min-w-[250px]">
                {/* Email Component */}
                {/* <div className="group flex flex-col items-center text-center w-20 sm:w-44 md:w-48 p-4 transition-transform hover:-translate-y-1"> */}
                <a
                  href="mailto:tehnic@btgromania.ro"
                  className="group flex flex-row items-center justify-between gap-2 text-center w-20 sm:w-44 md:w-48 transition-transform hover:-translate-y-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white transition-colors group-hover:text-blue-200 hidden md:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <p
                    href="mailto:tehnic@btgromania.ro"
                    className="text-white text-sm sm:text-base font-medium hover:underline transition-colors group-hover:text-blue-200"
                  >
                    tehnic@btgromania.ro
                  </p>
                </a>
                {/* </div> */}

                {/* Location Component */}
                <a
                  href="/BTG-location"
                  className="group flex flex-row items-center justify-between gap-2 text-center sm:w-44 md:w-48  transition-transform hover:-translate-y-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white transition-colors group-hover:text-blue-200 hidden md:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p
                    href="https://maps.app.goo.gl/your-location"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-left text-white text-sm sm:text-base font-medium hover:underline transition-colors group-hover:text-blue-200"
                  >
                    {/* Iasi, Aleea Rozelor, Nr. 6A */}
                    Iasi, Aleea Rozelor, Nr. 6A, Demisol
                  </p>
                </a>

                {/* Phone Component */}
                <a
                  href="BTG-mobile"
                  className="group flex flex-row items-center justify-start gap-2 text-center w-20 sm:w-44 md:w-48 transition-transform hover:-translate-y-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white transition-colors group-hover:text-blue-200 hidden md:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <p
                    href="tel:+400232250885"
                    className="text-left text-white text-sm sm:text-base font-medium hover:underline transition-colors group-hover:text-blue-200"
                  >
                    0232.250.885
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2025{" "}
            <a
              href="/"
              className="hover:text-white hover:underline transition-colors"
            >
              BTG
            </a>
            . Toate drepturile rezervate.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110"
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
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110"
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
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              ></svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
