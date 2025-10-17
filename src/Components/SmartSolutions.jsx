import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import data from "../Model/data";
import "./smartSolutions.css";

export default function SmartSolutions() {
  const headerControls = useAnimation();
  const iconsControls = useAnimation();
  const rightControls = useAnimation();
  const headerRef = useRef(null);
  const iconsRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRef = useRef(null);
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="section flex w-full min-h-screen justify-center items-center flex-col lg:flex-row xl:px-20 bg-white small-solutions"
    >
      <div className="flex w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex-col justify-center p-4 sm:p-6 lg:p-8">
        <div
          id="left"
          className="flex flex-col justify-between text-left space-y-6 lg:space-y-8"
        >
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerControls}
            variants={headerVariants}
            className="flex flex-col lg:mb-10"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#CC9D23]">
              SOLUȚII SMART
            </h3>
            <div className="h-8 w-1 bg-[#CC9D23] lg:h-12"></div>
          </motion.div>

          <div className="w-full sm:w-[90%] lg:w-[80%] sm:space-y-4 lg:space-y-6 text-black">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-[660px]">
              Proiectăm sisteme BMS direct pe planul tău.
            </h2>
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl">
              Punem la dispoziție soluții complete de securitate, confort și
              eficiență, adaptate fiecărui spațiu și fiecărei cerințe.
            </h3>
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl">
              Proiectăm sisteme BMS, soluții automate și instalații de
              securitate, personalizate și precise, gata să aducă un plus de
              siguranță și control clădirii tale.
            </h3>
          </div>

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
            className="lg:mt-10 flex flex-row lg:gap-12 xl:gap-20 text-center text-black sm:gap-10 w-full lg:max-w-[600px] justify-center small-solutions-icons"
          >
            <motion.div
              variants={iconVariants}
              className="p-2 flex flex-col justify-center items-center gap-2 text-blue-800"
            >
              <img className="w-16" src="/icon1.svg" alt="Expertiză icon" />
              <p className="text-sm lg:text-base font-bold">EXPERTIZĂ</p>
            </motion.div>
            <motion.div
              variants={iconVariants}
              className="p-2 flex flex-col justify-center items-center gap-2 text-blue-800"
            >
              <img className="w-16" src="/icon2.svg" alt="Precizie icon" />
              <p className="text-sm lg:text-base font-bold">PRECIZIE</p>
            </motion.div>
            <motion.div
              variants={iconVariants}
              className="p-2 flex flex-col justify-center items-center gap-2 text-blue-800"
            >
              <img className="w-16" src="/icon3.svg" alt="Fiabilitate icon" />
              <p className="text-sm lg:text-base font-bold">FIABILITATE</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        ref={rightRef}
        initial="hidden"
        animate={rightControls}
        variants={rightVariants}
        className="flex w-full lg:w-1/2 justify-center items-center small-solutions-img small-solutions-img-container"
      >
        <div
          id="right"
          className="flex justify-center items-start lg:items-center w-[90%] max-w-[500px] sm:max-w-[350px] lg:max-w-[600px] xl:max-w-[700px]"
        >
          <img
            className="w-full h-auto"
            src="/services.svg"
            alt="Smart Solutions Diagram"
          />
        </div>
      </motion.div>
    </section>
  );
}
