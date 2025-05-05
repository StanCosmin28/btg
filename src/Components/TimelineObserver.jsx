import { useEffect, useState, useRef } from "react";

export const TimelineObserver = ({
  initialColor,
  fillColor,
  handleObserve,
}) => {
  const [observers, setObservers] = useState([]);

  // Create and store the observer for a given timeline element
  const setObserver = (element, callback) => {
    // If we already have an observer for this element, don't create another one
    if (observers.find((obs) => obs.element === element)) {
      return;
    }

    // Get the element's position and dimensions
    const rect = element.getBoundingClientRect();

    // Create a new intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the element is in view
          if (entry.isIntersecting) {
            // Fill the timeline
            element.style.background = `linear-gradient(to bottom, 
              ${fillColor} 0%, 
              ${fillColor} ${entry.intersectionRatio * 100}%, 
              ${initialColor} ${entry.intersectionRatio * 100}%, 
              ${initialColor} 100%)`;

            // If we're at least halfway through, call the callback
            if (entry.intersectionRatio >= 0.5) {
              callback();
            }
          }
        });
      },
      {
        // Watch the element as it moves through the viewport
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    // Start observing the element
    observer.observe(element);

    // Store our observer data
    setObservers((prev) => [...prev, { element, observer }]);

    return () => {
      // Clean up when unmounting
      observer.disconnect();
    };
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      observers.forEach(({ observer }) => observer.disconnect());
    };
  }, [observers]);

  // Render the timeline using the provided render prop
  return handleObserve(setObserver);
};
