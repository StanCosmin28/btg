import { useState } from "react";

// Sample project data
const projectData = {
  commercial: {
    title: "Proiectul Nexus Tower",
    titleOption: "Comercial",
    description:
      "Proiectele comerciale includ spații de retail moderne, complexe de birouri și dezvoltări mixte, concepute pentru funcționalitate maximă și estetică atractivă.",
    image:
      "https://images.unsplash.com/photo-1705858348697-f956f1dd7bb9?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/portfolio/commercial",
  },
  industrial: {
    title: "Industriale",
    titleOption: "Industrial",
    description:
      "Proiectele industriale cuprind depozite, fabrici și centre logistice, construite pentru eficiență și scalabilitate.",
    image:
      "https://images.unsplash.com/photo-1728471468415-bf96db35e79c?q=80&w=3562&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/portfolio/industrial",
  },
  educational: {
    title: "Educaționale",
    titleOption: "Educațional",
    description:
      "Proiectele educaționale includ școli, universități și centre de cercetare, concepute pentru a încuraja învățarea și inovația.",
    image:
      "https://plus.unsplash.com/premium_photo-1694475008606-9f98b1e914a0?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/portfolio/educational",
  },
  institutional: {
    title: "Instituționale",
    titleOption: "Instituțional",
    description:
      "Proiectele instituționale acoperă spitale, clădiri guvernamentale și centre culturale, prioritizând accesibilitatea și durabilitatea.",
    image:
      "https://images.unsplash.com/photo-1651516467730-963b2346e174?q=80&w=3494&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/portfolio/institutional",
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
    <section className="py-10 px-4 md:px-8 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto">
        {/* Title and Vertical Line */}
        <div className="text-left mb-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-amber-400">
            Proiecte
          </h2>
          <div className="h-8 w-1 bg-amber-400 md:h-12"></div>
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
              <h3 className="text-3xl font-bold text-gray-900 text-left">
                {currentProject.title}
              </h3>
              {/* Description */}
              <p className="text-gray-700 text-left">
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
        <div className="lg:hidden space-y-6">
          {/* Options */}
          <div className="flex flex-wrap justify-center gap-1 ">
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
          <h3 className="text-3xl font-bold text-gray-900 text-center">
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
            <p className="text-gray-700 text-md w-full mt-2">
              {currentProject.description}
            </p>
            {/* </div> */}
          </div>

          {/* Button */}
          <div className="text-center">
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
