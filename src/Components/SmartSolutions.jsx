import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import data from "../Model/data";

export default function SmartSolutions() {
  // Animation controls
  const headerControls = useAnimation();
  const iconsControls = useAnimation();
  const rightControls = useAnimation();
  const headerRef = useRef(null);
  const iconsRef = useRef(null);
  const rightRef = useRef(null);
  const isHeaderInView = useInView(headerRef, {
    once: true,
    margin: "0px",
    threshold: 0.7,
  });
  const isIconsInView = useInView(iconsRef, {
    once: true,
    margin: "0px",
    threshold: 0.7,
  });
  const isRightInView = useInView(rightRef, {
    once: true,
    margin: "0px",
    threshold: 0.7,
  });

  // Trigger animations when in view
  useEffect(() => {
    if (isHeaderInView) {
      headerControls.start({ y: 0, opacity: 1 });
    }
  }, [isHeaderInView, headerControls]);

  useEffect(() => {
    if (isIconsInView) {
      iconsControls.start("visible");
    }
  }, [isIconsInView, iconsControls]);

  useEffect(() => {
    if (isRightInView) {
      rightControls.start({ y: 0, opacity: 1 });
    }
  }, [isRightInView, rightControls]);

  // Animation variants
  const headerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { y: 50, opacity: 0 }, // Bottom-up animation
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col md:flex-row p-5 bg-white">
      {/* Left Section: Text and Icons */}
      <div className="flex w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex-col justify-center p-4 sm:p-6 md:p-8">
        <div
          id="left"
          className="flex flex-col justify-between text-left space-y-6 md:space-y-8"
        >
          {/* Header */}
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerControls}
            variants={headerVariants}
            className="flex flex-col md:mb-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-amber-400">
              SOLUȚII SMART
            </h3>
            <div className="h-8 w-1 bg-amber-400 md:h-12"></div>
          </motion.div>

          {/* Main Content */}
          <div className="w-full sm:w-[90%] md:w-[80%] space-y-4 md:space-y-6 text-black">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Proiectăm sisteme BMS direct pe planul tău.
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl">
              Punem la dispoziție soluții complete de securitate, confort și
              eficiență, adaptate fiecărui spațiu și fiecărei cerințe.
            </h3>
            <h3 className="text-base sm:text-lg md:text-xl">
              Proiectăm sisteme BMS, soluții automate și instalații de
              securitate, personalizate și precise, gata să aducă un plus de
              siguranță și control clădirii tale.
            </h3>
          </div>

          {/* Icons */}
          <motion.div
            ref={iconsRef}
            initial="hidden"
            animate={iconsControls}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="flex flex-row flex-wrap md:gap-12 xl:gap-25 text-center text-black sm:gap-10 w-full md:max-w-[600px] justify-center"
          >
            <motion.div
              variants={iconVariants}
              className="p-2 flex flex-col justify-center items-center gap-2 text-blue-800"
            >
              <img className="w-16" src={data.icon1} alt="Expertiză icon" />
              <p className="text-sm font-bold">EXPERTIZĂ</p>
            </motion.div>
            <motion.div
              variants={iconVariants}
              className="p-2 flex flex-col justify-center items-center gap-2 text-blue-800"
            >
              <img className="w-16" src={data.icon2} alt="Precizie icon" />
              <p className="text-sm font-bold">PRECIZIE</p>
            </motion.div>
            <motion.div
              variants={iconVariants}
              className="p-2 flex flex-col justify-center items-center gap-2 text-blue-800"
            >
              <img className="w-16" src={data.icon3} alt="Fiabilitate icon" />
              <p className="text-sm font-bold">FIABILITATE</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right Section: Image */}
      <motion.div
        ref={rightRef}
        initial="hidden"
        animate={rightControls}
        variants={rightVariants}
        className="flex w-full md:w-1/2 justify-center items-center"
      >
        <div
          id="right"
          className="flex justify-center items-start md:items-center w-full max-w-[500px] sm:max-w-[350px] md:max-w-[600px]"
        >
          <img
            className="w-full h-auto"
            src={data.services}
            alt="House plan illustration"
          />
        </div>
      </motion.div>
    </div>
  );
}
