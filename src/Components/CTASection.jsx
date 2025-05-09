import data from "../Model/data";
import "./ctaSection.css";

export default function CTASection() {
  return (
    <section
      className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex justify-center items-center bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${data.ctaSection})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      {/* Gradient Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.5)] z-[5]"></div>

      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 justify-between px-4 sm:px-5 text-white my-8 sm:my-12 md:my-16 lg:my-20 mx-4 sm:mx-8 md:mx-12 lg:mx-20 items-center z-[10] text-center small-cta">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl max-w-[380px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[750px] font-bold leading-tight">
          Ești gata să faci primul pas spre un proiect bine planificat?
        </h1>
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[350px] sm:max-w-[380px] md:max-w-full">
          Suntem aici să răspundem întrebărilor tale și să te ajutăm să-ți
          transformi viziunea în realitate.
        </h3>
        <button className="mt-2 sm:mt-4 w-full max-w-xs sm:max-w-sm  bg-white text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-200 transition-all hover:scale-105 cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg">
          SOLICITĂ O CONSULTAȚIE
        </button>
      </div>
    </section>
  );
}
