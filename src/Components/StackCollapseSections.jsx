import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./StackCollapseSections.css";

const StackCollapseSections = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const contentRefs = useRef([]);

  const sectionData = [
    {
      titleLines: ["PROIECTARE", "ARHITECTURALA", "INTELIGENTA"],
      description:
        "Creăm planuri care combină estetica, funcționalitatea și eficiența energetică, cu soluții personalizate pentru fiecare proiect.",
      backgroundImage:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      titleLines: ["OPTIMIZARE", "EFICIENTA"],
      description:
        "Reducem consumul de energie și maximizăm utilizarea spațiului, oferind soluții durabile și economice.",
      backgroundImage:
        "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      titleLines: ["SISTEME BMS", "INTEGRATE"],
      description:
        "Integrarea tehnologiilor avansate asigură control total asupra locuinței, cu suport continuu pe toată durata proiectului.",
      backgroundImage:
        "https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Wait for refs to be populated
    const initializeAnimations = () => {
      // Filter out null refs
      const validSections = sectionsRef.current.filter(
        (section) => section !== null
      );
      const validContents = contentRefs.current.filter(
        (content) => content !== null
      );

      if (validSections.length !== sectionData.length) {
        console.warn("Not all sections are ready:", validSections.length);
        return;
      }

      // Initialize sections
      gsap.set(validSections, { y: 0 });
      gsap.set(validContents, { scale: 1 });

      // Pin, snap, and animate background size for each section
      validSections.forEach((section, index) => {
        // Background size animation from bottom center
        gsap.fromTo(
          section,
          { backgroundSize: "cover" },
          {
            backgroundSize: "cover",
            ease: "linear",
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "top top",
              scrub: 1.5, // Smooth scroll-driven animation
              id: `bg-size-${index}`,
            },
          }
        );

        // Pinning and snapping
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          pinSpacing: false,
          snap: {
            snapTo: 1,
            duration: 1, // Smooth, quick snap
            delay: 0.05, // Minimal delay
            ease: "power1.out", // Fluid snap
            onComplete: () => {
              // Scale up content when snapped
              gsap.to(validContents[index], {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out",
              });
              // Reset scale for other sections
              validContents.forEach((content, i) => {
                if (i !== index) {
                  gsap.to(content, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }
              });
            },
          },
          id: `section-${index}`,
          anticipatePin: 1, // Smooth pinning
          fastScrollEnd: true, // Handle fast scrolls
          invalidateOnRefresh: true, // Handle viewport changes
        });
      });

      // Log successful initialization
      console.log("Sections initialized:", validSections.length);
    };

    // Delay initialization to ensure refs and images are loaded
    const timer = setTimeout(() => {
      initializeAnimations();
      ScrollTrigger.refresh();
      console.log("ScrollTrigger refreshed");
    }, 200);

    // Refresh on window resize for responsiveness
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      sectionsRef.current = [];
      contentRefs.current = [];
      ScrollTrigger.clearScrollMemory();
      console.log("Cleaned up ScrollTrigger and refs");
    };
  }, []);

  return (
    <>
      <div className="stack-collapse-container relative" ref={containerRef}>
        {sectionData.map((section, index) => (
          <section
            key={`stack-section-${index}`}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="stack-section h-screen w-full flex items-center justify-center relative bg-center"
            style={{
              backgroundImage: `url(${section.backgroundImage})`,
            }}
          >
            <div className="absolute h-full w-full bg-gradient-to-t from-[rgba(36,36,36)] to-transparent z-1">
              <div className="text-left absolute z-100 md:bottom-20 bottom-15 md:left-20 left-10  md:max-w-sm lg:max-w-lg max-w-[320px]">
                <div className="absolute h-[100%] w-[1px] bg-amber-300 -left-6"></div>
                <h1 className="font-extrabold text-amber-300 lg:text-7xl text-4xl">
                  {section.titleLines.map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < section.titleLines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h1>
                <p className="sm:max-w-[350px] md:max-w-[600px]">
                  {section.description}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default React.memo(StackCollapseSections);
