"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextFillOnScroll({
  text = "FILL ON SCROLL",
  fillColor = "#1E40AF",
  borderColor = "#000000",
  borderWidth = 1,
}) {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const maskRef = useRef(null);
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Store references for cleanup
    const sectionElement = sectionRef.current;
    const textElement = textRef.current;
    const maskElement = maskRef.current;

    if (!sectionElement || !textElement || !maskElement) return;

    // Create the scroll animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionElement,
      start: "top top",
      end: "bottom top", // End trigger when the bottom of the section hits the top of the viewport
      pin: true, // No pinning to allow natural scrolling
      scrub: true, // Smooth scrubbing effect

      // Update fill progress based on scroll position
      onUpdate: (self) => {
        // Calculate progress (0 to 1)
        const progress = self.progress;
        setFillProgress(progress);

        // Animate the clip-path width based on progress
        gsap.to(maskElement, {
          clipPath: `polygon(0% 0%, ${progress * 100}% 0%, ${
            progress * 100
          }% 100%, 0% 100%)`,
          duration: 0.1,
          overwrite: true,
        });
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
    };
  }, []);

  return (
    <>
      {/* Hero section with the animated text */}
      <section
        ref={sectionRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="relative text-left max-w-full px-4">
          {/* Text container */}
          <div className="relative">
            {/* Text with outline (bottom layer) */}
            {/* <h1
              ref={textRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase font-sans relative z-10 break-words"
              style={{
                color: "transparent",
                WebkitTextStroke: `${borderWidth}px ${borderColor}`, // remove taht to enable a text reveal
                textStroke: `${borderWidth}px ${borderColor}`,
              }}
            >
              {text}
            </h1> */}
            <h1
              ref={textRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase font-sans break-words z-10"
              style={{
                color: "transparent",
                WebkitTextStrokeWidth: `${borderWidth}px`,
                WebkitTextStroke: `${borderWidth}px ${borderColor}`,
                textStrokeWidth: `${borderWidth}px`,
                fontFamily: "sans-serif",
              }}
            >
              {text}
            </h1>

            {/* Filled text (top layer with mask) */}
            <h1
              ref={maskRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase font-sans absolute top-0 left-0 z-20 break-words"
              style={{
                color: fillColor,
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", // Start with no fill
                // WebkitTextStroke: `${borderWidth}px ${borderColor}`,
                textStroke: `${borderWidth}px ${borderColor}`,
                fontFamily: "sans-serif",
              }}
            >
              {text}
            </h1>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-4 left-4 text-sm text-gray-500">
          Scroll progress: {Math.round(fillProgress * 100)}%
        </div>

        {/* reveal other sections on scroll for this text effect - be creative */}
        {/* User instruction */}
        {/* <div className="absolute bottom-10 left-0 right-0 text-center text-gray-700 font-medium animate-pulse">
          Scroll down to see the text fill effect
        </div> */}
      </section>

      {/* Next section */}
      {/* <section className="min-h-screen bg-gray-800 flex items-center justify-center text-white">
        <h2 className="text-3xl font-bold">Content Section</h2>
      </section> */}
    </>
  );
}
