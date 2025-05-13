export default function HeaderContacts() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-2 md:gap-16 lg:gap-40 flex-row">
      {/* Email Component */}
      {/* <div className="group flex flex-col items-center text-center w-20 sm:w-44 md:w-48 p-4 transition-transform hover:-translate-y-1"> */}
      <a
        href="mailto:tehnic@btgromania.ro"
        className="group flex md:flex-row flex-col items-center text-center w-20 sm:w-44 md:w-48 transition-transform hover:-translate-y-1 gap-4"
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white transition-colors group-hover:text-blue-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg> */}
        <img
          className="h-10 w-10 transition-colors group-hover:text-blue-200"
          src="public/mail.svg"
          alt=""
        />
        <p
          href="mailto:tehnic@btgromania.ro"
          className="text-white text-sm sm:text-base font-medium hover:underline transition-colors group-hover:text-blue-200 hidden md:block"
        >
          tehnic@btgromania.ro
        </p>
      </a>
      {/* </div> */}

      {/* Location Component */}
      <a className="group flex md:flex-row flex-col items-center text-center w-20 sm:w-44 md:w-48 rounded-lg bg-opacity-15 border-opacity-20 transition-transform hover:-translate-y-1 hover:shadow-lg gap-4">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#ffb900] border-[1px] transition-colors group-hover:text-blue-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg> */}
        <img
          className="h-10 w-10 transition-colors group-hover:text-blue-200"
          src="public/location.svg"
          alt=""
        />
        <p
          href="https://maps.app.goo.gl/your-location"
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-45 text-white text-left text-sm sm:text-base font-medium hover:underline transition-colors group-hover:text-blue-200 hidden md:block"
        >
          Iasi, Aleea Rozelor, Nr. 6A, Demisol
        </p>
      </a>

      {/* Phone Component */}
      <a className=" group flex md:flex-row flex-col items-center text-center w-20 sm:w-44 md:w-48 rounded-lg bg-opacity-15 border-opacity-20 transition-transform hover:-translate-y-1 hover:shadow-lg gap-4">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white  transition-colors group-hover:text-blue-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg> */}
        <img
          className="h-10 w-10 transition-colors group-hover:text-blue-200"
          src="public/phone.svg"
          alt=""
        />
        <p
          href="tel:+400232250885"
          className="text-white text-sm sm:text-base font-medium hover:underline transition-colors group-hover:text-blue-200 hidden md:block"
        >
          0232.250.885
        </p>
      </a>
    </div>
  );
}
