import { useEffect, useRef } from "react";

export default function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const elements =
      container.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");

            // Reveal once, then stop observing.
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return containerRef;
}