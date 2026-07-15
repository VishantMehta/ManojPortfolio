import React from "react";
import { WordmarkStyle } from "@/data/projects";

type Props = {
  title: string;
  wordmarkStyle?: WordmarkStyle;
};

export default function PlaceholderArt({ title, wordmarkStyle }: Props) {
  if (!wordmarkStyle || wordmarkStyle === "none") {
    return null;
  }

  return (
    <div
      className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none z-10"
    >
      {/* Wordmark styling based on type */}
      {wordmarkStyle === "bold-caps" && (
        <h3 className="font-display font-black text-4xl md:text-5xl lg:text-7xl text-white text-center uppercase tracking-tighter leading-none drop-shadow-md opacity-90 mix-blend-overlay">
          {title}
        </h3>
      )}

      {wordmarkStyle === "script" && (
        <h3 className="font-[var(--font-playfair)] italic text-5xl md:text-6xl text-white text-center capitalize tracking-normal font-light drop-shadow-lg scale-110">
          {title.toLowerCase()}
        </h3>
      )}

      {wordmarkStyle === "colored-block" && (
        <h3 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter text-[#D6DE43] drop-shadow-md opacity-90 scale-y-110 mix-blend-lighten">
          {title}
        </h3>
      )}
    </div>
  );
}
