import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./parallaxStyles.css";
import data from "../Model/data";

const HorizontalScrollSectionDemo = React.forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const scrollTweenRef = useRef(null);

  const addToPanelsRef = (el) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (panelsRef.current.length === 0 || !containerRef.current) return;

    const totalPanels = panelsRef.current.length;

    // Dynamically calculate totalWidth based on screen size
    const calculateTotalWidth = () => {
      const isMobile = window.innerWidth < 768; // Mobile breakpoint
      const panelWidthPercentage = isMobile ? 75 : 50; // 75% for mobile, 50% for desktop
      return panelWidthPercentage * totalPanels;
    };

    // Set container width based on total panels and viewport
    const handleResize = () => {
      const totalWidth = calculateTotalWidth();
      gsap.set(containerRef.current, {
        width: `${totalPanels * window.innerWidth}px`,
      });

      // Update ScrollTrigger end position
      if (scrollTweenRef.current?.scrollTrigger) {
        scrollTweenRef.current.scrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial calculation

    const totalWidth = calculateTotalWidth();
    scrollTweenRef.current = gsap.to(panelsRef.current, {
      xPercent: -totalWidth,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 3,
        start: "top top",
        end: () => `+=${containerRef.current.offsetWidth}`,
        anticipatePin: 1,
      },
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollTweenRef.current?.scrollTrigger) {
        scrollTweenRef.current.scrollTrigger.kill();
      }
      scrollTweenRef.current?.kill?.();
    };
  }, []);

  const { sliderImages, sliderDescription } = data;
  const renderPanels = () => {
    return Array.from({ length: 2 }).map((_, index) => (
      <article
        key={`panel-${index}`}
        ref={addToPanelsRef}
        className="panel relative w-full h-screen flex justify-center items-center overflow-hidden"
      >
        <div className="image-grid flex justify-center items-center w-full h-full">
          {/* First Image */}
          <div className="image-container relative flex-1 h-full contain-content group">
            <div className="absolute h-full w-full bg-black opacity-40 z-1"></div>
            <img
              className="w-full h-full object-cover group-hover:blur-[2px] group-hover:scale-130 transition-all duration-350"
              src={sliderImages[index * 2] || "https://via.placeholder.com/600"}
              alt={`Work ${index * 2 + 1}`}
            />
            <div className="text-overlay absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
              <h3 className="text-xl md:text-2xl font-normal text-white max-w-[450px] p-4 z-2">
                {sliderDescription[index * 2] || "No Description"}
              </h3>
              <p className="max-w-[450px] group-hover:block hidden z-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                itaque totam quam voluptates. Dolores?
              </p>
            </div>
          </div>
          {/* Second Image */}
          <div className="image-container relative flex-1 h-full contain-content group">
            <div className="absolute h-full w-full bg-black opacity-40 z-1"></div>
            <img
              className="w-full h-full object-cover group-hover:blur-[2px] group-hover:scale-130 transition-all duration-350"
              src={
                sliderImages[index * 2 + 1] || "https://via.placeholder.com/600"
              }
              alt={`Work ${index * 2 + 2}`}
            />
            <div className="text-overlay absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
              <h3 className="text-xl md:text-2xl font-normal text-white max-w-[450px] p-4 z-2">
                {sliderDescription[index * 2 + 1] || "No Description"}
              </h3>
              <p className="max-w-[450px] group-hover:block hidden z-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                itaque totam quam voluptates. Dolores?
              </p>
            </div>
          </div>
        </div>
      </article>
    ));
  };

  return (
    <section className="section container" ref={containerRef}>
      {renderPanels()}
    </section>
  );
});

export default HorizontalScrollSectionDemo;
