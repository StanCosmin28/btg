import { TracingBeam } from "./TracingBeam";
import { Building, Home, Hammer, Route } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TracingBeamDemo() {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set initial viewport height and handle mounting state
    setViewportHeight(window.innerHeight);
    setIsMounted(true);

    // Handle viewport height changes (important for mobile)
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Fix for mobile viewport height issues
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setViewportHeight(window.innerHeight);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const constructionServices = [
    {
      title: "Residential Construction",
      shortDescription: "Custom homes, apartments, and housing developments",
      icon: <Home className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Commercial Construction",
      shortDescription:
        "Office buildings, retail spaces, and industrial facilities",
      icon: <Building className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Renovation & Remodeling",
      shortDescription:
        "Interior and exterior renovations for homes and businesses",
      icon: <Hammer className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Infrastructure Development",
      shortDescription: "Roads, bridges, and public works projects",
      icon: <Route className="h-6 w-6 text-blue-600" />,
    },
  ];

  // Only render when component is mounted to avoid hydration issues
  if (!isMounted) return null;

  return (
    <div
      className="bg-blue-600 min-h-screen py-8 sm:py-12 px-4"
      style={{ minHeight: viewportHeight }}
    >
      <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12">
        Probleme soluționate Eficient
      </h1>

      <TracingBeam className="px-2 sm:px-4 md:px-6 relative">
        <div className="max-w-2xl mx-auto pt-4 relative">
          {constructionServices.map((service, index) => (
            <motion.div
              key={`content-${index}`}
              className="mb-12 sm:mb-16 md:mb-24 relative service-card"
              data-index={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 transition-all hover:shadow-xl">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-blue-100 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-center font-medium text-base sm:text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-center text-xs sm:text-sm text-gray-600">
                  {service.shortDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}
