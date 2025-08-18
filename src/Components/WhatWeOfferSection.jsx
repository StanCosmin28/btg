import { motion } from "framer-motion";
// import { Check, Lightbulb, Target, Users } from "lucide-react";
import "./whatWeOffer.css";
import data from "../Model/data";

export default function WhatWeOfferSection() {
  const { zoomIcon, peopleIcon, moneyIcon, lightIcon } = { ...data.wwoIcons };

  const cards = [
    {
      // icon: <Lightbulb className="w-8 h-8 text-white" />,
      icon: zoomIcon,
      title: "Viziuni de ansamblu",
      description:
        "Mulți se pierd în detalii. Noi integrăm totul într-un plan coerent.",
      color: "bg-[#243673]",
    },
    {
      // icon: <Users className="w-8 h-8 text-white" />,
      icon: peopleIcon,
      title: "Coordonare între specialități",
      description:
        "Asigurăm coerență între instalații. Fără conflicte pe șantier.",
      color: "bg-[#243673]",
    },
    {
      // icon: <Check className="w-8 h-8 text-white" />,
      icon: moneyIcon,
      title: "Costuri Controlate",
      description:
        "Planurile noastre optimizează costurile și previn depășirile de buget.",
      color: "bg-[#243673]",
    },
    {
      // icon: <Target className="w-8 h-8 text-white" />,
      icon: lightIcon,
      title: "Proiecte adaptate nevoilor tale",
      description: "Punem accent pe personalizare și adaptabilitate.",
      color: "bg-[#243673]",
    },
  ];

  return (
    <section className="w-full min-h-screen py-16 bg-[#243673] text-white flex flex-col items-center justify-center">
      <div className="max-w-7xl px-4 w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl xl:text-[2.8rem] font-bold text-center lg:text-left lg:w-1/3">
            Probleme <br /> soluționate{" "}
            <span className="text-[#EFB82C]"> eficient </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full lg:w-2/3 mt-8 lg:mt-0 custom-cursor">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="bg-[#243673] rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all hover:scale-105 duration-350"
              >
                <div className="w-14 h-14 rounded-full bg-[#FBBF24] flex items-center justify-center mb-6">
                  <img src={card.icon} alt="" />
                </div>
                <h3 className="text-lg font-semibold mb-4">{card.title}</h3>
                <p className="text-sm md:max-w-[300px]">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
