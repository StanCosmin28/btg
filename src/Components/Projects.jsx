import { useState } from "react";
// import { Link } from "react-router-dom";
import "./projects.css";

// const baseUrl = "https://stancosmin28.github.io/btg/";
const projectData = {
  commercial: {
    title: "Reabilitare obiectiv Neptun ",
    titleOption: "Hotelier",
    description:
      "Soluții proiectate pentru controlul accesului, supraveghere video, rețea date-voce, detecție la efracție și sonorizare.",
    image: `/hotelier.webp`,
  },
  industrial: {
    title: "Hala Exonia",
    titleOption: "Industrial",
    description:
      "Instalații electrice complete pentru siguranță, control și confort: iluminat, prize, efracție, acces, incendiu și supraveghere video.",
    image: `/industrial.webp`,
  },
  educational: {
    title: "Reabilitare Energetică",
    titleOption: "Educațional",
    description:
      "Colegiul Național Mihai Eminescu - Instalații electrice, sanitare și termice proiectate pentru confort, funcționalitate și un mediu modern de învățare.",
    image: `/educational.webp`,
  },
  institutional: {
    title: "Extindere și dotare UPU",
    titleOption: "Spitalicesc",
    description:
      "Spitalul de Urgență pentru Copii Sfânta Maria Iași - Instalații electrice (iluminat, prize), control acces, date-voce, detecție incendiu, supraveghere video și sonorizare.",
    image: `/spitalicesc.webp`,
  },
};

export default function Projects() {
  const [selectedOption, setSelectedOption] = useState("commercial");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handlePortfolioClick = () => {
    window.location.href = "/portofoliu";
  };

  const currentProject = projectData[selectedOption];

  return (
    <section
      id="proiecte"
      className="py-10 px-4 mx-auto md:px-8 bg-[#f7f8fa] max-w-7xl mt-[100px]"
    >
      <div className="max-w-8xl mx-auto">
        <div className="text-left mb-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#CC9D23]">
            Proiecte
          </h2>
          <div className="h-8 w-1 bg-[#CC9D23] md:h-12"></div>
        </div>
        <div className="hidden lg:flex lg:gap-8">
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
                    className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors cursor-pointer${
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
            <div className="mt-10 flex flex-col gap-5 max-w-lg">
              <h3 className="lg:text-4xl xl:text-5xl font-bold text-gray-900 text-left">
                {currentProject.title}
              </h3>
              <p className="text-gray-700 text-left lg:text-xl">
                {currentProject.description}
              </p>
              <button
                onClick={handlePortfolioClick}
                className="max-w-[160px] justify-start flex items-center px-4 py-2 text-sm font-medium text-white bg-[#0655D1] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:font-bold transition-all duration-300 hover:scale-105 cursor-pointer"
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
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-[650px] h-[450px] object-cover rounded-lg mx-auto"
            />
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex flex-wrap justify-center gap-1 mb-2 small-projects">
            {["commercial", "industrial", "educational", "institutional"].map(
              (option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`cursor-pointer py-2 px-1 rounded-lg text-sm font-medium transition-colors ${
                    selectedOption === option
                      ? "text-amber-600"
                      : "text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {projectData[option].titleOption}
                </button>
              )
            )}
          </div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-2">
            {currentProject.title}
          </h3>
          <div className="relative flex right-0 items-center justify-center flex-col">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <p className="text-gray-700 text-md w-full my-2 small-projects-description">
              {currentProject.description}
            </p>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={handlePortfolioClick}
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
