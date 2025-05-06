import React from "react";
import data from "../Model/data";
import { transform } from "framer-motion";

const Expertiza = () => {
  return (
    <section
      className="w-full min-h-[700px] sm:h-[500px] relative bg-fit bg-right flex items-center"
      style={{
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${data.housePlan2})`,
      }}
    >
      {/* Gradient Overlay (uncomment if needed for text contrast) */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.25)]"></div> */}

      {/* Content */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:ml-10 z-[10] text-left">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-amber-400">
              EXPERTIZA
            </h3>
            <div className="h-8 w-1 bg-amber-400 md:h-12"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-4 text-black">
            <h2 className="text-6xl font-medium leading-tight max-[576px]:text-[28px] sm:text-4xl">
              Soluții personalizate pentru orice tip de clădire
            </h2>
            <p className="text-xl mt-6 max-w-[600px] max-[576px]:text-sm sm:max-w-full">
              Adaptăm soluții pentru diverse tipuri de clădiri, asigurând
              siguranță sporită, economii de energie și costuri operaționale
              reduse, cu sisteme fiabile și ușor de integrat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Expertiza);
