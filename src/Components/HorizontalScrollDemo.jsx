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
    const totalWidth = 50 * totalPanels;
    //if mobile => 75 || if tablet or above 50

    // Force recalculate width on resize
    const handleResize = () => {
      gsap.set(containerRef.current, {
        width: `${totalPanels * window.innerWidth}px`,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial calculation

    scrollTweenRef.current = gsap.to(panelsRef.current, {
      xPercent: -totalWidth,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5,
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
        <div className="image-grid flex justify-center items-center gap-2 w-full h-full px-1">
          {/* First Image */}
          <div className="image-container relative flex-1 h-full">
            <img
              className="w-full h-full object-cover"
              src={sliderImages[index * 2] || "https://via.placeholder.com/600"}
              alt={`Work ${index * 2 + 1}`}
            />
            <div className="text-overlay absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
              <h1 className="text-xl md:text-2xl font-bold text-white">
                {sliderDescription[index * 2] || "No Description"}
              </h1>
            </div>
          </div>
          {/* Second Image */}
          <div className="image-container relative flex-1 h-full ">
            <img
              className="w-full h-full object-cover"
              src={
                sliderImages[index * 2 + 1] || "https://via.placeholder.com/600"
              }
              alt={`Work ${index * 2 + 2}`}
            />
            <div className="text-overlay absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {sliderDescription[index * 2 + 1] || "No Description"}
              </h3>
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
