"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Zap, BarChart } from "lucide-react";

export default function SolutionsSection() {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const progressBarRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isHoveringCards, setIsHoveringCards] = useState(false);
  const [scrollAccumulator, setScrollAccumulator] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Lipsa viziunii de ansamblu",
      description:
        "Mulți se pierd în detalii. Noi integrăm totul într-un plan coerent.",
      icon: <Zap className="w-10 h-10 text-[#1A2A44]" />,
    },
    {
      id: 2,
      title: "Costuri necontrolate",
      description:
        "Planurile noastre optimizează costurile și previn depășirile de buget.",
      icon: <Shield className="w-10 h-10 text-[#1A2A44]" />,
    },
    {
      id: 3,
      title: "Proiecte neadaptate",
      description:
        "Punem accent pe personalizare și adaptabilitate, răspunzând tuturor nevoilor tale.",
      icon: <BarChart className="w-10 h-10 text-[#1A2A44]" />,
    },
    {
      id: 4,
      title: "Calitate superioară",
      description:
        "Ne angajăm să oferim servicii de cea mai înaltă calitate, depășind așteptările clienților noștri.",
      icon: <CheckCircle className="w-10 h-10 text-[#1A2A44]" />,
    },
  ];

  // Handle mouse enter/leave to detect hovering over the cards container
  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const handleMouseEnter = () => setIsHoveringCards(true);
    const handleMouseLeave = () => setIsHoveringCards(false);

    cardsContainer.addEventListener("mouseenter", handleMouseEnter);
    cardsContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardsContainer.removeEventListener("mouseenter", handleMouseEnter);
      cardsContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Handle wheel event for scrolling through cards with reduced sensitivity
  useEffect(() => {
    const handleWheel = (e) => {
      if (!isInView || !isHoveringCards) return;

      e.preventDefault();

      // Accumulate scroll delta to reduce sensitivity
      setScrollAccumulator((prev) => {
        const newAccumulator = prev + e.deltaY;
        const threshold = 150;

        if (newAccumulator > threshold) {
          setActiveIndex((prevIndex) =>
            Math.min(prevIndex + 1, cards.length - 1)
          );
          return 0;
        } else if (newAccumulator < -threshold) {
          setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
          return 0;
        }

        return newAccumulator;
      });
    };

    const container = containerRef.current;
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [cards.length, isInView, isHoveringCards]);

  // Detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle progress bar click to navigate to card
  const handleProgressBarClick = (e) => {
    if (!progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const progressBarHeight = rect.height;
    const clickRatio = clickY / progressBarHeight;
    const cardIndex = Math.round(clickRatio * (cards.length - 1));
    setActiveIndex(cardIndex);
  };

  // Calculate dot position based on activeIndex
  const dotPosition = `${(activeIndex / (cards.length - 1)) * 100}%`;

  // Spring animation for cards
  const cardSpring = {
    type: "spring",
    stiffness: 30, // Lower stiffness for a softer motion
    damping: 25, // Higher damping to reduce bounce
    mass: 1.2, // Slightly higher mass for a more deliberate movement
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#1A2A44] snap-center"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-0 md:mr-12 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 px-6 md:w-1/3"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Probleme soluționate eficient
        </motion.h1>

        <div className="flex items-center w-full md:w-2/3 h-full px-6">
          {/* Progress Bar (Line + Dot) */}
          <div
            ref={progressBarRef}
            className="hidden md:block w-4 h-2/3 mr-8 relative cursor-pointer"
            onClick={handleProgressBarClick}
          >
            <div className="absolute top-0  w-[2px] h-full bg-[#E5E7EB] left-1/2 transform -translate-x-1/2 rounded-full" />
            <motion.div
              className="absolute  w-4 h-4 bg-white rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: dotPosition }}
              transition={{
                type: "spring",
                stiffness: 30,
                damping: 25,
                mass: 1.2,
              }}
            />
          </div>

          {/* Cards */}
          <div
            ref={cardsContainerRef}
            className="relative w-full max-w-md sm:max-w-lg h-full flex items-center justify-center"
          >
            {cards.map((card, index) => {
              const position = index - activeIndex;
              const isActive = position === 0;

              return (
                <motion.div
                  key={card.id}
                  className="absolute left-1/2 w-full max-w-md sm:max-w-lg bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/20"
                  style={{
                    x: "-50%",
                    y: `${position * 150}%`,
                    zIndex: isActive ? 10 : 5,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%), url('/path-to-background-image.jpg') center/cover no-repeat",
                  }}
                  animate={{
                    y: `${position * 150}%`,
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1 : 0.9,
                  }}
                  transition={cardSpring}
                  onClick={() => !isActive && setActiveIndex(index)}
                  whileHover={{ scale: isActive ? 1 : 0.95, opacity: 1 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-lg bg-white/50">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
                        {card.title}
                      </h3>
                      <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Top Fade Overlay */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1A2A44] to-transparent z-20 pointer-events-none" />

        {/* Bottom Fade Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A2A44] to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
