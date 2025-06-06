import { motion } from "framer-motion";
import { Check, Lightbulb, Target, Users } from "lucide-react";
import "./whatWeOffer.css";

export default function WhatWeOfferSection() {
  const cards = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Coordonare între specialități",
      description:
        "Asigurăm coerență între instalații. Fără conflicte pe șantier.",
      color: "bg-teal-500",
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Proiecte adaptate nevoilor tale",
      description: "Punem accent pe personalizare și adaptabilitate.",
      color: "bg-emerald-500",
    },
    {
      icon: <Check className="w-8 h-8 text-white" />,
      title: "Costuri Controlate",
      description:
        "Planurile noastre optimizează costurile și previn depășirile de buget.",
      color: "bg-blue-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Viziunii de ansamblu",
      description:
        "Mulți se pierd în detalii. Noi integrăm totul într-un plan coerent.",
      color: "bg-red-500",
    },
  ];

  return (
    <section className="w-full py-15 mt-20 small-wwo">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Probleme soluționate Eficient
          </h2>
          {/* <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Delivering innovative solutions with precision, reliability, and
            creativity.
          </p> */}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 custom-cursor">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition-all hover:scale-105 duration-350"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center ${card.color} mb-4`}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
