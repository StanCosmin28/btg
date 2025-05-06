import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useCountUp } from "react-countup";
import data from "../Model/data";

export default function Expertiza() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col md:flex-row">
      <div
        id="left"
        className="flex flex-col justify-between text-left space-y-6 md:space-y-8 lg:ml-10"
      >
        {/* Header */}
        <div className="flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-amber-400">
            EXPERTIZA
          </h3>
          <div className="h-8 w-1 bg-amber-400 md:h-12"></div>
        </div>

        {/* Main Content */}
        <div className="w-full sm:w-[90%] md:w-[80%] space-y-4 md:space-y-6 text-black">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Soluții personalizate pentru orice tip de clădire
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl">
            Adaptăm soluții pentru diverse tipuri de clădiri, asigurând
            siguranță sporită, economii de energie și costuri operaționale
            reduse, cu sisteme fiabile și ușor de integrat.
          </h3>
        </div>
      </div>
      <div
        id="right"
        className="flex justify-center items-center w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px]"
      >
        <img
          className="w-full h-auto object-contain"
          src={data.housePlan2}
          alt="House plan illustration"
          loading="lazy"
        />
      </div>
    </div>
  );
}
