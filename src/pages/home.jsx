import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const sections = [
  { id: "section1", label: "Section 1", color: "bg-yellow-400" },
  { id: "section2", label: "Section 2", color: "bg-blue-500" },
  { id: "section3", label: "Section 3", color: "bg-green-600" },
];

export default function App() {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.2,
    });

    // Update after 200ms for content/layout stability
    setTimeout(() => {
      scrollInstance.current?.update();
    }, 200);

    return () => {
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
      <main ref={scrollRef} data-scroll-container className="min-h-screen text-white">
        {sections.map(({ id, label, color }) => (
          <section
            key={id}
            id={id}
            data-scroll-section
            className={`h-screen flex items-center justify-center text-4xl ${color}`}
          >
            {label}
          </section>
        ))}
      </main>

      {/* Simple fixed nav box */}
      <nav className="fixed bottom-6 left-6 z-50 bg-black/70 p-4 rounded-md shadow-lg space-y-2 w-40">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className="w-full px-3 py-2 rounded bg-gray-800 text-white text-sm text-left font-medium hover:bg-gray-700 cursor-pointer"
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
