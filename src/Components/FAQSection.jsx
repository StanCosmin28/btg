import { useState } from "react";
import "./faqSection.css";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Ce înseamnă proiectare BMS?",
      answer:
        "Proiectarea BMS integrează sistemele clădirii într-un plan unitar pentru eficiență și gestionare ușoară.",
    },
    {
      question: "De ce să integrez BMS-ul din faza de proiectare?",
      answer:
        "O proiectare corelată previne conflictele între instalații, economisește timp și bani, și asigură un proiect clar, gata de implementat.",
    },
    {
      question: "Cu se softuri lucrați?",
      answer:
        "Costurile variază în funcție de proiect, dar economiile pe termen lung din energie și eficiență le compensează. Oferim consultații gratuite pentru estimări.",
    },
    {
      question: "Care sunt costurile asociate cu proiectarea inteligentă",
      answer:
        "Da, putem integra sisteme smart într-o clădire existentă, adaptându-le la infrastructura actuală.",
    },
    {
      question: "Pot integra sisteme smart într-o clădire existentă?",
      answer:
        "Folosim AutoCAD, Revit și alte instrumente, adaptate cerințelor proiectului și echipei de arhitectură.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleOutsideClick = () => {
    setActiveIndex(null);
  };

  return (
    <div
      className=" flex justify-center items-center p-8 flex-col gap-10  md:my-20 small-faq"
      onClick={handleOutsideClick}
    >
      <div className="w-11/12 max-w-5xl mx-auto">
        <h1 className="text-3xl text-center font-semibold text-gray-800 mb-8">
          Nu ai găsit răspuns la întrebarea ta?
        </h1>

        <ul className="space-y-4">
          {faqItems.map((item, index) => (
            <li
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg`}
            >
              <div
                className={`p-5 cursor-pointer flex justify-between items-left font-medium text-gray-700 hover:bg-blue-100 transition-colors text-left ${
                  activeIndex === index ? "bg-blue-200" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion(index);
                }}
              >
                <span>{item.question}</span>
                <div className="relative w-6 h-6 flex-shrink-0">
                  <span
                    className={`absolute bg-gray-500 rounded-sm transition-all duration-300 ${
                      activeIndex === index ? "rotate-0 opacity-0" : "rotate-0"
                    }`}
                    style={{
                      width: "2px",
                      height: "16px",
                      top: "4px",
                      left: "11px",
                    }}
                  ></span>
                  <span
                    className="absolute bg-gray-500 rounded-sm"
                    style={{
                      width: "16px",
                      height: "2px",
                      top: "11px",
                      left: "4px",
                    }}
                  ></span>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-64 pt-2" : "max-h-0"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <p className="p-5 pt-0 text-gray-600 leading-relaxed text-left">
                  {item.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="tel:+40232250885"
        className="transition-all duration-300 hover:scale-102 max-w-4xl w-full p-2 sm:p-3 text-base sm:text-lg md:text-xl text-white font-bold hover:bg-blue-800 hover:text-white rounded-lg cursor-pointer bg-[#0655D1]"
      >
        Contactează-ne
      </a>
    </div>
  );
}
