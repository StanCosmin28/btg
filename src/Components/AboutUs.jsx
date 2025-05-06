import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useCountUp } from "react-countup";
import data from "../Model/data";

export default function AboutUs() {
  // Animation controls
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, {
    once: true,
    margin: "-50px 0px", // Trigger when element is 50px from viewport
    threshold: 0.5, // Trigger when 50% of element is visible
  });
  const isRightInView = useInView(rightRef, {
    once: true,
    margin: "-50px 0px",
    threshold: 0.5,
  });

  // Counter hooks
  const { start: startExperience } = useCountUp({
    ref: "experienceCounter",
    end: 15,
    duration: 5,
    suffix: "+",
  });
  const { start: startProjects } = useCountUp({
    ref: "projectsCounter",
    end: 150,
    duration: 5,
    suffix: "+",
  });
  const { start: startCollaborations } = useCountUp({
    ref: "collaborationsCounter",
    end: 50,
    duration: 5,
    suffix: "+",
  });

  // Trigger animations and counters when in view
  useEffect(() => {
    if (isLeftInView) {
      leftControls.start({ opacity: 1, y: 0 });
      startExperience();
      startProjects();
      startCollaborations();
    }
  }, [
    isLeftInView,
    leftControls,
    startExperience,
    startProjects,
    startCollaborations,
  ]);

  useEffect(() => {
    if (isRightInView) {
      rightControls.start({ opacity: 1, x: 0 });
    }
  }, [isRightInView, rightControls]);

  // Animation variants
  const leftVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 }, // Start from right
    visible: {
      opacity: 1,
      x: 0, // Move to original position
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col md:flex-row p-5">
      {/* Left Section: Text and Counters */}
      <motion.div
        ref={leftRef}
        initial="hidden"
        animate={leftControls}
        variants={leftVariants}
        className="flex w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex-col justify-center p-5 xl:ml-15"
      >
        <div
          id="left"
          className="flex flex-col justify-between text-left space-y-6 md:space-y-8"
        >
          {/* Header */}
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-amber-400">
              DESPRE NOI
            </h3>
            <div className="h-8 w-1 bg-amber-400 md:h-12"></div>
          </div>

          {/* Main Content */}
          <div className="w-full sm:w-[90%] md:w-[80%] space-y-4 md:space-y-6 text-black">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Partenerul tău de încredere în proiectare
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl">
              BTG (BUILDING TECHNOLOGY GROUP) este o companie specializată în
              soluții de automatizare pentru clădiri, oferind sisteme Building
              Management System (BMS) personalizate pentru diverse tipuri de
              spații: rezidențiale, comerciale și industriale.
            </h3>
            <h3 className="text-base sm:text-lg md:text-xl">
              Scopul principal al acestor sisteme este de a îmbunătăți
              Confortul, Siguranța și Eficiența energetică a clădirilor,
              permițând controlul de la distanță al diferitelor funcții ale
              acestora.
            </h3>
            <button className="p-2 sm:p-3 text-base sm:text-lg md:text-xl border-[1px] border-blue-800 text-blue-800 font-bold hover:bg-blue-800 hover:text-white transition-all hover:scale-105 rounded-lg cursor-pointer">
              Descoperă mai mult
            </button>
          </div>

          {/* Counters */}
          <div className="flex flex-row flex-wrap gap-4 p-4 justify-between text-center text-black">
            <div className="flex-1 min-w-[50px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <h3
                className=" text-xl sm:text-5xl font-bold"
                id="experienceCounter"
              >
                15
              </h3>
              <p className="text-sm">Ani de experienta</p>
            </div>
            <div className="flex-1 min-w-[50px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <h3
                className=" text-xl sm:text-5xl font-bold"
                id="projectsCounter"
              >
                150
              </h3>
              <p className="text-sm">Proiecte livrate cu succes</p>
            </div>
            <div className="flex-1 min-w-[50px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <h3
                className=" text-xl sm:text-5xl font-bold"
                id="collaborationsCounter"
              >
                50
              </h3>
              <p className="text-sm">Viitoare colaborari</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Section: Image */}
      <motion.div
        ref={rightRef}
        initial="hidden"
        animate={rightControls}
        variants={rightVariants}
        className="flex w-full md:w-1/2 min-h-[50vh] md:min-h-screen justify-center items-center p-4"
      >
        <div
          id="right"
          className="flex justify-center items-center w-full max-w-[300px] sm:max-w-[350px] md:max-w-[500px]"
        >
          <img
            className="w-full h-auto object-contain"
            src={data.housePlan}
            alt="House plan illustration"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
}
