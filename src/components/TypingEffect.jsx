import { useState, useEffect } from "react";

export default function TypingEffect({ text, delay = 500, speed = 50 }) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("waiting");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInt = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);
    return () => clearInterval(cursorInt);
  }, []);

  useEffect(() => {
    setDisplayed("");
    setPhase("waiting");
    const waitTimeout = setTimeout(() => {
      setPhase("typing");
    }, delay);
    return () => clearTimeout(waitTimeout);
  }, [text, delay]);

  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    const typer = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(typer);
        setPhase("done");
      }
    }, speed);
    return () => clearInterval(typer);
  }, [phase, text, speed]);

  return (
    <div className="text-white text-base text-center">
      {phase === "waiting"
        ? ""            
        : displayed    
      }
      {phase === "waiting" && " waiting..."}
      {showCursor && "|"}
    </div>
  );
}
