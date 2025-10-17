import "./ctaSection.css";

export default function CTASection() {
  return (
    <section
      className="w-full flex justify-center items-center bg-center bg-no-repeat bg-cover py-12 sm:py-16 md:py-20 relative"
      style={{
        backgroundImage: "url(/cta-section.png)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/50 z-10"></div>

      <div className="relative z-20 flex flex-col gap-4 items-center text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed">
          Ai un plan?{" "}
          <span className="bg-blue-600 px-2 py-1 rounded-md">
            Avem Soluția!
          </span>{" "}
          <br />
          Hai să-l construim împreună!
        </h1>
      </div>
    </section>
  );
}
