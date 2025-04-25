"use client";
import { useState, useEffect, useRef } from "react";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 }); // The actual mouse position
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      setMousePosition((prev) => {
        const dx = targetPosition.current.x - prev.x;
        const dy = targetPosition.current.y - prev.y;
        return {
          x: prev.x + dx * 0.05, // Adjust 0.1 for more/less lag
          y: prev.y + dy * 0.05,
        };
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <div
      className="w-48 h-48 fixed rounded-full bg-gradient-to-r from-teal-500 to-blue-600 blur-2xl opacity-20 pointer-events-none transition-transform duration-300"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: "translate(0%, 0%)",
        animation: "rotate 15s ease-in-out infinite alternate"
      }}
    />
  );
};

export default MouseTracker;
