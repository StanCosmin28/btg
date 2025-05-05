import { useEffect, useRef } from "react";

export const Timeline = ({ setObserver, callback, className, id }) => {
  const timeline = useRef(null);

  // Will be fired when the element crosses the middle of the screen
  const handleInView = () => {
    if (callback) {
      callback();
    }
  };

  useEffect(() => {
    if (timeline.current) {
      // Register this timeline with the observer
      const cleanup = setObserver(timeline.current, handleInView);

      return cleanup;
    }
  }, [setObserver]);

  return (
    <div
      id={id || `timeline-${Math.random().toString(36).substr(2, 9)}`}
      ref={timeline}
      className={`timeline ${className || ""}`}
    />
  );
};
