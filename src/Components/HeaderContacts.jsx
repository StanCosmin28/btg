import data from "../Model/data";
export default function HeaderContacts() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-2 md:gap-16 lg:gap-40 flex-row">
      {/* Email Component */}
      <a
        href="mailto:tehnic@btgromania.ro"
        className="group flex md:flex-row flex-col items-center text-center w-20 sm:w-44 md:w-48 transition-transform hover:-translate-y-1 gap-4"
      >
        <img
          className="h-10 w-10 transition-colors group-hover:text-blue-200"
          src={data.headerMail}
          alt=""
        />
        <p
          href="mailto:tehnic@btgromania.ro"
          className="text-white text-sm sm:text-base font-medium hover:underline transition-colors group-hover:text-blue-200 hidden md:block"
        >
          tehnic@btgromania.ro
        </p>
      </a>

      {/* Location Component */}
      <a className="group flex md:flex-row flex-col items-center text-center w-20 sm:w-44 md:w-48 rounded-lg bg-opacity-15 border-opacity-20 transition-transform hover:-translate-y-1 hover:shadow-lg gap-4">
        <img
          className="h-10 w-10 transition-colors group-hover:text-blue-200"
          src={data.headerLocation}
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
        <img
          className="h-10 w-10 transition-colors group-hover:text-blue-200"
          src={data.headerPhone}
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
