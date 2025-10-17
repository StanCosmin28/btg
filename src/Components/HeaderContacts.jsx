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
          src="/mail.svg"
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
      <a
        href="https://www.google.com/maps/place/BTG+Romania/@47.1395481,27.5776103,733m/data=!3m1!1e3!4m6!3m5!1s0x40cafba15cd7bd11:0xcfe28f8e5f9ead53!8m2!3d47.1489116!4d27.5818515!16s%2Fg%2F11flzgbn5k?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        className="group flex md:flex-row flex-col items-center text-center w-20 sm:w-44 md:w-48 rounded-lg bg-opacity-15 border-opacity-20 transition-transform hover:-translate-y-1 hover:shadow-lg gap-4"
      >
        <img
          className="h-10 w-10 transition-colors group-hover:text-blue-200"
          src="/location.svg"
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
      <a
        href="tel:+40232250885"
        className=" group flex md:flex-row flex-col items-center text-center w-20 sm:w-44 md:w-48 rounded-lg bg-opacity-15 border-opacity-20 transition-transform hover:-translate-y-1 hover:shadow-lg gap-4"
      >
        <img
          className="h-10 w-10 transition-colors group-hover:text-blue-200"
          src="/phone.svg"
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
