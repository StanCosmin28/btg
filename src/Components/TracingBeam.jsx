import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

export const TracingBeam = ({ children, className }) => {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [bulletPositions, setBulletPositions] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Effect to handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Effect to calculate heights and positions
  useEffect(() => {
    if (!contentRef.current) return;

    const calculatePositions = () => {
      const cards = contentRef.current.querySelectorAll(".service-card");
      const container = ref.current.getBoundingClientRect();
      const containerTop = container.top + window.scrollY;

      // Make sure the SVG height covers the entire content area
      setSvgHeight(contentRef.current.offsetHeight);

      const positions = Array.from(cards).map((card) => {
        const rect = card.getBoundingClientRect();
        return rect.top + window.scrollY - containerTop + rect.height / 2;
      });

      setBulletPositions(positions);
    };

    calculatePositions();

    // Recalculate positions after images and content are fully loaded
    window.addEventListener("load", calculatePositions);

    // Set up intersection observer to track active card
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
    );

    const cards = contentRef.current.querySelectorAll(".service-card");
    cards.forEach((card) => observer.observe(card));

    // Handle resize events to recalculate positions
    const handleResize = () => {
      // Use requestAnimationFrame to avoid excessive calculations during resize
      requestAnimationFrame(() => {
        calculatePositions();
      });
    };

    window.addEventListener("resize", handleResize);

    // Recalculate on scroll to ensure accuracy
    const handleScroll = () => {
      requestAnimationFrame(() => {
        calculatePositions();
      });
    };

    // Less frequent scroll updates for performance
    let scrollTimeout;
    window.addEventListener("scroll", () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 100);
      }
    });

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", calculatePositions);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Spring animations for smoother timeline movement
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    { stiffness: 500, damping: 90 }
  );

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  // Calculate timeline position based on screen size
  const timelineLeftPosition = isMobile
    ? "-left-2"
    : "-left-6 md:-left-12 lg:-left-16";

  return (
    <motion.div
      ref={ref}
      className={`relative mx-auto h-full w-full max-w-5xl ${className}`}
    >
      <div className={`absolute top-3 ${timelineLeftPosition} z-20`}>
        {/* Timeline track */}
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background track */}
          <path
            d={`M 1 0 V ${svgHeight}`}
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
          />

          {/* Animated progress line */}
          <motion.path
            d={`M 1 0 V ${svgHeight}`}
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray={svgHeight}
            strokeDashoffset={useTransform(
              scrollYProgress,
              (value) => svgHeight * (1 - value)
            )}
          />
        </svg>

        {/* Bullets for each card */}
        {bulletPositions.map((position, index) => (
          <motion.div
            key={index}
            className={`absolute left-0 ml-[19px] flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${
              activeIndex === index ? "scale-110" : "scale-90"
            }`}
            style={{ top: position - 12 }}
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: activeIndex === index ? 1 : 0.5,
              backgroundColor:
                activeIndex === index
                  ? "rgba(255, 255, 255, 1)"
                  : "rgba(255, 255, 255, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-3 w-3 rounded-full"
              animate={{
                backgroundColor: activeIndex === index ? "#2563eb" : "#93c5fd",
                scale: activeIndex === index ? 1 : 0.8,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Fade overlay - top */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-blue-600 to-transparent z-10 pointer-events-none" />

      <div ref={contentRef} className="relative z-0">
        {children}
      </div>

      {/* Fade overlay - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-blue-600 to-transparent z-10 pointer-events-none" />
    </motion.div>
  );
};
