import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderContacts from "./HeaderContacts";
import data from "../Model/data";
import "./header.css";

export default function HeaderSection({
  text = "BTG",
  text1 = "R",
  text2 = "OMANIA",
  fillColor = "#ffb900",
  borderColor = "#ffb900",
  borderWidth = 1,
  backgroundColor = "#060606",
  textSize1 = "text-4xl sm:text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem]",
  textSize2 = "text-3xl sm:text-[2.2rem] sm:-bottom-1 sm:right-4 md:text-[3.8rem] lg:text-[5.5rem] xl:text-[6.3rem]",
  textPosition = " -bottom-1.5 left-15 sm:left-18 sm:-bottom-[7px] md:left-32 md:-bottom-3 lg:left-43 lg:-bottom-4 xl:-bottom-5 xl:left-48",
  fontFamily1 = data.font1,
  fontFamily2 = data.font2,
  showProgress = true,
  className = "",
  style = {},
  ...props
}) {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const maskRef = useRef(null);
  // const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;
    const textElement = textRef.current;
    const maskElement = maskRef.current;

    if (!sectionElement || !textElement || !maskElement) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionElement,
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        // setFillProgress(progress);
        gsap.to(maskElement, {
          clipPath: `polygon(0% 0%, ${progress * 100}% 0%, ${
            progress * 100
          }% 100%, 0% 100%)`,
          duration: 0.1,
          overwrite: true,
        });
      },
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      scrollTrigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className={`min-h-screen flex items-center justify-left relative overflow-hidden ${className}`}
        style={{ backgroundColor, ...style }}
        {...props}
      >
        <div className="absolute w-full h-full top-0">
          <div className="bg-black opacity-50 absolute w-full h-screen z-1"></div>
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src="/btg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative text-left max-w-full px-4 uppercase ml-5 md:ml-10 small-header">
          <div className="relative z-10">
            {/* Outline text (bottom layer) */}
            <h1
              ref={textRef}
              className={`realtive special-font font-bold break-words z-10 ${textSize1}`}
              style={{
                color: "transparent",
                WebkitTextStroke: `${borderWidth}px ${borderColor}`,
                textStroke: `${borderWidth}px ${borderColor}`,
                fontFamily1,
              }}
            >
              {text}
              <br />
              {text1}
              <span
                style={{ fontFamily2 }}
                className={`special-font2 absolute ${textSize2} ${textPosition}`}
              >
                {text2}
              </span>
            </h1>
            <h1
              ref={maskRef}
              className={`special-font font-bold absolute top-0 left-0 z-20 break-words ${textSize1}`}
              style={{
                color: fillColor,
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                fontFamily1,
              }}
            >
              {text}
              <br />
              <span>{text1}</span>
              <span
                style={{ fontFamily2 }}
                className={`special-font2 absolute ${textSize2} ${textPosition}`}
              >
                {text2}
              </span>
            </h1>
          </div>
        </div>
        <div className="w-full absolute bottom-0 text-center z-10 items-center text-white flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <HeaderContacts />
        </div>
        {/* {showProgress && (
          <div className="absolute bottom-4 left-4 text-sm text-gray-500">
            Scroll progress: {Math.round(fillProgress * 100)}%
          </div>
        )} */}
        {/* User instruction */}
        {/* <div className="absolute bottom-10 left-0 right-0 text-center text-gray-300 opacity-50 font-medium">
          Scroll down to see the text fill effect
        </div> */}
      </section>
    </>
  );
}
