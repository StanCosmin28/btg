import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./parallaxStyles.css";
import Box from "./Box";

const HorizontalScrollSection = React.forwardRef((props, ref) => {
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
    const totalWidth = 100 * (totalPanels - 1);

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

  const renderMiniSections = () => {
    return Array.from({ length: 4 }).map((_, index) => (
      <article
        key={`panel-${index}`}
        ref={addToPanelsRef}
        className={`panel panel-${index + 1} ${
          index % 2 === 0 ? "blue" : "red"
        }`}
      >
        <div className="box-container">
          <Box className={`box-${index + 1}`}>{index + 1}</Box>
          {/* <Box className={`box-${index + 1}-sub`}>{index + 1}.1</Box> */}
        </div>
      </article>
    ));
  };

  return (
    <section className="section container" ref={containerRef}>
      {renderMiniSections()}
    </section>
  );
});

export default HorizontalScrollSection;
