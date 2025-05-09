import BlurText from "./BlurText";

export default function HeroHeaderText() {
  const handleAnimationComplete = () => {
    // console.log("Animation completed!");
  };

  const text = ` Proiectăm Viitorul '/n' Inteligent al Clădirilor`;
  return (
    <div className="flex flex-col items-left h-screen w-auto justify-center max-w-[800px]">
      <BlurText
        text="Proiectăm Viitorul Inteligent al Clădirilor"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="lg:text-7xl mb-2 font-bold"
      />
      <h3 className="text-left text-xl italic leading-6 lg:text-2xl font-normal text-white opacity-80 max-w-[600px]">
        Soluții inteligente pentru clădiri care îmbunătățesc experiența, reduc
        costurile și protejează mediul.
      </h3>
    </div>
  );
}
