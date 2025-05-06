import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Sample FAQ data - replace with your own content
  const faqItems = [
    {
      question: "Ce înseamnă proiectare BMS?",
      answer:
        "We offer a comprehensive range of services including web design, app development, digital marketing, and brand strategy. Our team specializes in creating custom solutions tailored to your specific business needs and goals.",
    },
    {
      question: "De ce să integrez BMS-ul din faza de proiectare?",
      answer:
        "Our pricing varies based on project scope, complexity, and timeline. We offer flexible pricing models including hourly rates, fixed project fees, and retainer packages. Contact us for a personalized quote based on your specific requirements.",
    },
    {
      question: "Cu se softuri lucrați?",
      answer:
        "Project timelines depend on scope and complexity. Simple websites typically take 2-4 weeks, while complex web applications may require 2-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific project requirements and priorities.",
    },
    {
      question: "Care sunt costurile asociate cu proiectarea inteligentă",
      answer:
        "Yes, we provide ongoing support and maintenance packages for all our projects. These include regular updates, security patches, performance optimization, and technical support. We're committed to ensuring the long-term success of your digital products.",
    },
    {
      question: "Pot integra sisteme smart într-o clădire existentă?",
      answer:
        "We include two rounds of revisions in our standard project scope. Additional revision requests beyond the agreed scope may incur extra charges. We believe in transparent communication throughout the project to minimize the need for extensive revisions.",
    },
  ];

  // Handler for clicking accordion items
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Handler for clicking outside to close
  const handleOutsideClick = () => {
    setActiveIndex(null);
  };

  return (
    <div
      className=" flex justify-center items-center p-8 flex-col gap-10 my-30"
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
                className={`p-5 cursor-pointer flex justify-between items-left font-medium text-gray-700 hover:bg-blue-100 transition-colors ${
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
      <button className="transition-all duration-300 hover:scale-102 max-w-5xl w-full p-2 sm:p-3 text-base sm:text-lg md:text-xl text-white font-bold hover:bg-blue-800 hover:text-white rounded-lg cursor-pointer bg-[#0655D1]">
        Contactează-ne
      </button>
    </div>
  );
}
