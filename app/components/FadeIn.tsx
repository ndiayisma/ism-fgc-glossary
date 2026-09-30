"use client";

import { useEffect, useState } from "react";

/**
 * Fait apparaître son contenu en fondu + léger glissement au montage.
 * Piloté par du state React + classes Tailwind (transition/opacity/translate),
 * sans keyframes CSS custom.
 */
export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShown(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}
