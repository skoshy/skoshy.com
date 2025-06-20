"use client";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: 4,
      background: "rgba(0,0,0,0.05)",
      zIndex: 1000,
    }}>
      <div
        style={{
          height: "100%",
          width: `${scroll}%`,
          background: "linear-gradient(90deg, #6366f1, #06b6d4)",
          transition: "width 0.1s",
        }}
      />
    </div>
  );
} 
