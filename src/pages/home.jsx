import { useEffect, useRef, useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";

const sections = [
  { id: "section1", label: "Section 1", color: "bg-neutral-900", content: <Section1 /> },
  { id: "section2", label: "Section 2", color: "bg-emerald-400", content: <Section2 /> },
  { id: "section3", label: "Section 3", color: "bg-green-600", content: <Section3 /> },
];

export default function App() {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    if (!scrollRef.current) return;

    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.2,
    });

    const updateProgress = ({ scroll, limit }) => {
      const percentage = scroll.y / limit.y;
      if (progressRef.current) {
        progressRef.current.style.height = `${percentage * 100}%`;
      }
    };

    scrollInstance.current.on("scroll", updateProgress);

    setTimeout(() => {
      scrollInstance.current?.update();
    }, 200);

    return () => {
      scrollInstance.current?.off("scroll", updateProgress);
      scrollInstance.current?.destroy();
    };
  }, []);

  const handleNavClick = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      scrollInstance.current?.scrollTo(target);
    }
  };

  return (
    <div className="relative">
      {/* Scrollable content */}
      <main ref={scrollRef} data-scroll-container className="min-h-screen text-gray-100">
        {/* Page Sections */}
        {sections.map(({ id, color, content }) => (
          <section
            key={id}
            id={id}
            data-scroll-section
            className={`h-screen flex items-center justify-center text-4xl ${color}`}
          >
            {content}
          </section>
        ))}
      </main>

      {/* Fixed nav bar */}
      <nav className="fixed top-1/2 left-6 -translate-y-1/2 z-50">
        <div className="relative bg-black/20 p-4 rounded-md shadow-lg space-y-2 w-40 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded" />
          <div
            ref={progressRef}
            className="absolute left-0 top-0 w-1 bg-green-500 rounded transition-all duration-75"
            style={{ height: "0%" }}
          />

          {/* Nav buttons */}
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="w-full px-3 py-2 rounded text-gray-100 text-sm text-left font-medium hover:bg-green-500 cursor-pointer relative z-10"
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/*
      Interesting colour pallets
      {
        primary: "green-500",
        background: "stone-900",
        card: "stone-800",
        text: "gray-100",
        accent: "amber-400",
        link: "sky-400",
        secondary: "emerald-400",
        error: "rose-500",
        warning: "yellow-400",
      }
      */}

    </div>
  );
}
