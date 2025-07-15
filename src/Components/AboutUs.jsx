import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useCountUp } from "react-countup";
import data from "../Model/data";

export default function AboutUs() {
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, {
    once: true,
    margin: "-50px 0px",
    threshold: 0.5,
  });
  const isRightInView = useInView(rightRef, {
    once: true,
    margin: "-50px 0px",
    threshold: 0.5,
  });

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

  const leftVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      id="about"
      className="flex w-full min-h-screen justify-center items-center flex-col lg:flex-row p-5 small-about max-w-[1640px] mx-auto"
    >
      <motion.div
        ref={leftRef}
        initial="hidden"
        animate={leftControls}
        variants={leftVariants}
        className="flex w-full mt-8 lg:w-1/2 min-h-[50vh] lg:min-h-screen flex-col justify-center p-5 xl:pl-20 2xl:pl-32"
      >
        <div
          id="left"
          className="flex flex-col justify-between text-left space-y-6 lg:space-y-8"
        >
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#CC9D23]">
              DESPRE NOI
            </h3>
            <div className="h-8 w-1 bg-[#CC9D23] lg:h-12"></div>
          </div>

          <div className="w-full sm:w-[90%] lg:w-[95%] space-y-4 lg:space-y-6 text-[#383838]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Partenerul tău de încredere în proiectare
            </h2>
            <h3 className="text-base sm:text-lg lg:text-xl">
              BTG (BUILDING TECHNOLOGY GROUP) este o companie specializată în
              soluții de automatizare pentru clădiri, oferind sisteme Building
              Management System (BMS) personalizate pentru diverse tipuri de
              spații: rezidențiale, comerciale și industriale.
            </h3>
            <h3 className="text-base sm:text-lg lg:text-xl  mb-10">
              Scopul principal al acestor sisteme este de a îmbunătăți
              Confortul, Siguranța și Eficiența energetică a clădirilor,
              permițând controlul de la distanță al diferitelor funcții ale
              acestora.
            </h3>
            <button className="p-4 sm:p-4 lg:p-4 text-base sm:text-md lg:text-lg xl:text-xl border-[1px] border-blue-800 text-blue-800 font-bold hover:bg-blue-800 hover:text-white transition-all hover:scale-105 rounded-lg cursor-pointer">
              Descoperă mai mult
            </button>
          </div>

          <div className="flex flex-row flex-wrap gap-4 p-4 justify-between text-center text-[#383838]">
            <div className="flex-1 min-w-[50px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <h3
                className="text-xl sm:text-5xl lg:text-6xl font-bold"
                id="experienceCounter"
              >
                15
              </h3>
              <p className="text-xs lg:text-base">Ani de experiență</p>
            </div>
            <div className="flex-1 min-w-[50px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <h3
                className="text-xl sm:text-5xl lg:text-6xl font-bold"
                id="projectsCounter"
              >
                150
              </h3>
              <p className="text-xs lg:text-base">Proiecte livrate cu succes</p>
            </div>
            <div className="flex-1 min-w-[100px] p-2 flex flex-col justify-center items-center gap-2 text-blue-800">
              <h3
                className="text-xl sm:text-5xl lg:text-6xl font-bold"
                id="collaborationsCounter"
              >
                50
              </h3>
              <p className="text-xs lg:text-base">Viitoare colaborări</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={rightRef}
        initial="hidden"
        animate={rightControls}
        variants={rightVariants}
        className="flex w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen justify-center items-center p-4"
      >
        <div
          id="right"
          className="flex justify-center items-center w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] xl:max-w-[400px] 2xl:max-w-[500px]"
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
