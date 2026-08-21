// src/components/ui/Tooltip.tsx
import React, { useState, useRef } from "react";

interface TooltipProps {
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  variant?: "dark" | "light";
  children: React.ReactNode;
}

export const Tooltip = ({
  content,
  position = "top",
  delay = 200,
  variant = "dark",
  children,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const positions = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  };

  const variants = {
    dark: "bg-slate-900 text-white border-slate-800",
    light: "bg-white text-slate-900 border-slate-200 shadow-lg",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={`absolute z-50 px-2.5 py-1.5 text-xs font-medium rounded-md border whitespace-nowrap transition-all duration-150 animate-in fade-in zoom-in-95 ${positions[position]} ${variants[variant]}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};