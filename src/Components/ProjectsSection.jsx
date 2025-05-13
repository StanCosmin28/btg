import { useState } from "react";
import "./projects.css";

// Sample project data
const projectData = {
  commercial: {
    title: "Reabilitare obiectiv Neptun ",
    titleOption: "Hotelier",
    description:
      "Soluții proiectate pentru controlul accesului, supraveghere video, rețea date-voce, detecție la efracție și sonorizare.",
    image: "public/hotelier.webp",
    link: "/portfolio/hotelier",
  },
  industrial: {
    title: "Hala Exonia",
    titleOption: "Industrial",
    description:
      "Instalații electrice complete pentru siguranță, control și confort: iluminat, prize, efracție, acces, incendiu și supraveghere video.",
    image: "public/industrial.webp",
    link: "/portfolio/industrial",
  },
  educational: {
    title: "Reabilitare Energetică",
    titleOption: "Educațional",
    description:
      "Colegiul Național Mihai Eminescu - Instalații electrice, sanitare și termice proiectate pentru confort, funcționalitate și un mediu modern de învățare.",
    image: "public/educational.webp",
    link: "/portfolio/educational",
  },
  institutional: {
    title: "Extindere și dotare UPU",
    titleOption: "Spitalicesc",
    description:
      "Spitalul de Urgență pentru Copii Sfânta Maria Iași - Instalații electrice (iluminat, prize), control acces, date-voce, detecție incendiu, supraveghere video și sonorizare.",
    image: "public/spitalicesc.webp",
    link: "/portfolio/spitalicesc",
  },
};

// ProjectsSection Component
export default function ProjectsSection() {
  const [selectedOption, setSelectedOption] = useState("commercial");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const currentProject = projectData[selectedOption];

  return (
    <section id="proiecte" className="py-10 px-4 md:px-8 bg-[#f7f8fa]">
      <div className="max-w-8xl mx-auto">
        {/* Title and Vertical Line */}
        <div className="text-left mb-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#CC9D23]">
            Proiecte
          </h2>
          <div className="h-8 w-1 bg-[#CC9D23] md:h-12"></div>
        </div>
        {/* <div className="hidden lg:flex justify-center lg:gap-8">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["commercial", "industrial", "educational", "institutional"].map(
              (option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                    selectedOption === option
                      ? "bg-amber-100 text-amber-600"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  {projectData[option].titleOption}
                </button>
              )
            )}
          </div>
        </div> */}
        {/* Desktop Layout: Flex with options, title, description, button on left; image on right */}
        <div className="hidden lg:flex lg:gap-8">
          {/* Left: Options, Title, Description, Button */}
          <div className="w-1/2 space-y-6">
            <div className="hidden lg:flex justify-center lg:gap-10">
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "commercial",
                  "industrial",
                  "educational",
                  "institutional",
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      selectedOption === option
                        ? "bg-amber-100 text-amber-600"
                        : "bg-white text-gray-800 hover:bg-gray-100"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    {projectData[option].titleOption}
                  </button>
                ))}
              </div>
            </div>
            {/* Title */}
            <div className="lg:ml-5 xl:ml-20 mt-10 flex flex-col gap-5 max-w-lg">
              <h3 className="lg:text-4xl xl:text-5xl font-bold text-gray-900 text-left">
                {currentProject.title}
              </h3>
              {/* Description */}
              <p className="text-gray-700 text-left lg:text-xl">
                {currentProject.description}
              </p>
              {/* Button */}
              <a
                href={currentProject.link}
                className="max-w-[160px] justify-start flex items-center px-4 py-2 text-sm font-medium text-white bg-[#0655D1] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:font-bold transition-all duration-300 hover:scale-105"
              >
                Vezi portofoliul
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-1/2">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Tablet and Mobile Layout */}
        <div className="lg:hidden ">
          {/* Options */}
          <div className="flex flex-wrap justify-center gap-1 mb-2 small-projects">
            {["commercial", "industrial", "educational", "institutional"].map(
              (option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`py-2 px-1 rounded-lg text-sm font-medium transition-colors ${
                    selectedOption === option
                      ? " text-amber-600"
                      : " text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {projectData[option].titleOption}
                </button>
              )
            )}
          </div>

          {/* Selected Option Title */}
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-2">
            {currentProject.title}
          </h3>

          {/* Image with Overlay Text */}
          <div className="relative flex right-0 items-center justify-center flex-col">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full  h-[300px] object-cover rounded-lg"
            />
            {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-80 p-4 rounded-lg w-3/4 max-w-[300px]"> */}
            <p className="text-gray-700 text-md w-full my-2 small-projects-description">
              {currentProject.description}
            </p>
            {/* </div> */}
          </div>

          {/* Button */}
          <div className="text-center mt-4">
            <a
              href={currentProject.link}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#0655D1] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:font-bold transition-all duration-300 hover:scale-105"
            >
              Vezi portofoliul
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
