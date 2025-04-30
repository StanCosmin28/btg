"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollTextFill({
  text = "FILL ON SCROLL",
  fillColor = "#1E40AF",
  borderColor = "#000000",
  borderWidth = 2,
}) {
  const sectionRef = useRef(null);
  const borderTextRef = useRef(null);
  const fillTextRef = useRef(null);
  const fillContainerRef = useRef(null);
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Store references for cleanup
    const sectionElement = sectionRef.current;
    const fillContainer = fillContainerRef.current;

    if (!sectionElement || !fillContainer) return;

    // Create the scroll animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionElement,
      start: "top top",
      end: "+=2000", // 2000px of scrolling to complete the animation
      pin: true,
      pinSpacing: true, // Changed to true to ensure proper spacing
      scrub: 1, // Smoother scrubbing with a slight delay for better control
      invalidateOnRefresh: true,

      // Update fill progress based on scroll position
      onUpdate: (self) => {
        // Calculate progress (0 to 1)
        const progress = self.progress;
        setFillProgress(progress);

        // Animate the fill width based on progress
        gsap.to(fillContainer, {
          width: `${progress * 100}%`,
          duration: 0.1,
          overwrite: true,
        });

        // Unpin ONLY when fully filled (progress is 1)
        if (progress >= 0.995) {
          // Increased threshold to ensure complete fill
          self.disable();
          ScrollTrigger.refresh();
        }
      },
    });

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      scrollTrigger.kill();
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Main section with the animated text */}
      <section
        ref={sectionRef}
        className="min-h-screen bg-gray-100 flex items-center justify-center relative overflow-hidden"
      >
        <div className="relative text-center">
          {/* Border-only text (always visible) */}
          <h1
            ref={borderTextRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase font-sans relative z-10"
            style={{
              color: "transparent",
              WebkitTextStroke: `${borderWidth}px ${borderColor}`,
              textStroke: `${borderWidth}px ${borderColor}`,
            }}
          >
            {text}
          </h1>

          {/* Filled text (clipped to show animation) */}
          <div
            ref={fillContainerRef}
            className="absolute top-0 left-0 h-full overflow-hidden z-20"
            style={{ width: `${fillProgress * 100}%` }}
          >
            <h1
              ref={fillTextRef}
              className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase font-sans whitespace-nowrap"
              style={{ color: fillColor }}
            >
              {text}
            </h1>
          </div>
        </div>

        {/* Progress indicator (optional, can be removed) */}
        <div className="absolute bottom-4 left-4 text-sm text-gray-500">
          Scroll progress: {Math.round(fillProgress * 100)}%
        </div>

        {/* User instruction */}
        <div className="absolute bottom-10 left-0 right-0 text-center text-gray-700 font-medium animate-pulse">
          Scroll down to fill text completely before continuing
        </div>
      </section>

      {/* Next section for testing scroll behavior */}
      <section className="min-h-screen bg-[#242424] flex items-center justify-center text-white">
        <h2 className="text-3xl font-bold">Next Section</h2>
      </section>
    </>
  );
}
