import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TimelineObserver } from "./TimelineObserver";
import { Timeline } from "./Timeline";
import "./timeline.css";

// Optional icons you can use or replace with your own
import {
  Building,
  Home,
  //   Hammer,
  //   Route,
  Calendar,
  Briefcase,
  Award,
  //   LucideIcon,
} from "lucide-react";

// Timeline entry type
const TimelineEntry = ({
  title,
  description,
  date,
  icon: Icon,
  index,
  isActive,
  side = "right", // "left" or "right"
}) => {
  // Determine which side the content should be on
  const isLeft = side === "left";

  return (
    <div
      className={`relative z-10 my-8 flex w-full items-center justify-center`}
    >
      <div
        className={`flex w-full max-w-5xl ${
          isLeft ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Content card */}
        <motion.div
          className={`w-1/2 px-4 ${isLeft ? "text-right" : "text-left"}`}
          initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
          animate={{
            opacity: isActive ? 1 : 0.7,
            x: 0,
            scale: isActive ? 1 : 0.95,
          }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className={`
            bg-white rounded-lg shadow-lg p-4 sm:p-6 
            transform transition-all duration-300
            ${isActive ? "shadow-xl" : "shadow"}
          `}
          >
            <div className="flex items-center mb-3">
              <div
                className={`
                p-2 rounded-full bg-blue-100 mr-3
                ${isLeft ? "order-last ml-3 mr-0" : ""}
              `}
              >
                {Icon && <Icon className="h-5 w-5 text-blue-600" />}
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
            </div>
            {date && (
              <div
                className={`text-sm text-gray-500 mb-2 flex items-center ${
                  isLeft ? "justify-end" : ""
                }`}
              >
                <Calendar className="h-4 w-4 mr-1 inline" />
                <span>{date}</span>
              </div>
            )}
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </motion.div>

        {/* This creates spacing for the timeline in the center */}
        <div className="w-[60px] flex-shrink-0"></div>
      </div>
    </div>
  );
};

// Main component
export const MultiTimeline = ({ timelineData }) => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Handle when a timeline section becomes active
  const handleTimelineCallback = (index) => {
    setActiveIndices((prev) => {
      if (!prev.includes(index)) {
        return [...prev, index];
      }
      return prev;
    });
  };

  if (!isMounted) return null;

  return (
    <div className="relative bg-blue-50 min-h-screen py-12 px-4">
      <h1 className="text-center text-3xl font-bold mb-12 text-blue-900">
        Our Journey
      </h1>

      <div className="relative mx-auto max-w-7xl">
        {/* The vertical line in the middle */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 transform -translate-x-1/2 z-0"></div>

        {/* Timeline entries */}
        {timelineData.map((entry, index) => (
          <div key={index} className="relative">
            <TimelineObserver
              initialColor="#e5e5e5"
              fillColor="#3b82f6" // blue-500
              handleObserve={(setObserver) => (
                <>
                  <Timeline
                    id={`timeline-${index}`}
                    className="absolute top-0 bottom-0 left-1/2 w-px transform -translate-x-1/2 z-0 opacity-0"
                    setObserver={setObserver}
                    callback={() => handleTimelineCallback(index)}
                  />

                  <TimelineEntry
                    {...entry}
                    index={index}
                    isActive={activeIndices.includes(index)}
                    side={index % 2 === 0 ? "right" : "left"}
                  />
                </>
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage with sample data
export default function TimelineDemo() {
  const timelineData = [
    {
      title: "Company Founded",
      description:
        "Our journey began with a small team and big dreams. We set out to revolutionize construction.",
      date: "Jan 2010",
      icon: Building,
    },
    {
      title: "First Major Project",
      description:
        "Completed our first residential complex with 50 units, establishing our reputation for quality.",
      date: "Mar 2012",
      icon: Home,
    },
    {
      title: "Expansion Phase",
      description:
        "Opened new offices in three major cities and doubled our team size to meet growing demand.",
      date: "Sep 2016",
      icon: Briefcase,
    },
    {
      title: "Industry Recognition",
      description:
        "Received the National Construction Excellence Award for our innovative sustainable building practices.",
      date: "Nov 2020",
      icon: Award,
    },
  ];

  return <MultiTimeline timelineData={timelineData} />;
}
