"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollTextFill({
  text = "FILL ON SCROLL",
  fillColor = "#1E40AF", // Vibrant blue
  borderColor = "#000000",
  borderWidth = 2,
}) {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const textFillRef = useRef(null);
  const [fillProgress, setFillProgress] = useState(0); // Track fill progress
  const lastScrollTop = useRef(0); // Track last scroll position

  useEffect(() => {
    // Skip if not in browser or refs are not ready
    if (
      typeof window === "undefined" ||
      !sectionRef.current ||
      !textRef.current ||
      !textFillRef.current
    ) {
      return;
    }

    // Initialize fill state
    gsap.set(textFillRef.current, { width: `${fillProgress * 100}%` });

    // Create ScrollTrigger to detect scroll and update fill
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom", // Start when section enters viewport
      end: "bottom top", // End when section leaves viewport
      onUpdate: (self) => {
        // Get current scroll position
        const currentScroll =
          window.pageYOffset || document.documentElement.scrollTop;

        // Calculate scroll delta (how much we scrolled)
        const delta = currentScroll - lastScrollTop.current;
        lastScrollTop.current = currentScroll;

        // Update fill progress based on scroll direction
        let newProgress = fillProgress;
        if (delta < 0) {
          // Scroll up: increase fill (left to right)
          newProgress = Math.min(fillProgress + Math.abs(delta) / 1000, 1);
        } else if (delta > 0) {
          // Scroll down: decrease fill (right to left)
          newProgress = Math.max(fillProgress - delta / 1000, 0);
        }

        // Update state and apply fill
        if (newProgress !== fillProgress) {
          setFillProgress(newProgress);
          gsap.to(textFillRef.current, {
            width: `${newProgress * 100}%`,
            duration: 0.1, // Smooth transition
            ease: "power1.inOut",
          });
        }
      },
      invalidateOnRefresh: true, // Handle resize or refresh
    });

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      trigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [fillProgress]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="relative">
        {/* Border-only text */}
        <h1
          ref={textRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-transparent"
          style={{
            WebkitTextStroke: `${borderWidth}px ${borderColor}`,
            position: "relative",
            zIndex: 1,
          }}
        >
          {text}
        </h1>

        {/* Filled text (animated) */}
        <h1
          ref={textFillRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase absolute top-0 left-0 overflow-hidden whitespace-nowrap"
          style={{
            color: fillColor,
            WebkitTextStroke: `${borderWidth}px ${borderColor}`,
            width: "0%", // Initial state, updated by GSAP
            zIndex: 2,
          }}
        >
          {text}
        </h1>
      </div>
    </section>
  );
}
