"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";

export default function About() {
  return (
    <main className="flex min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Sidebar activeCategory="All" onCategoryChange={() => {}} />
      <div className="flex-1 lg:ml-80 pt-24 lg:pt-0 min-h-screen p-6 lg:p-12 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Portrait Placeholder */}
          <div className="w-full aspect-[3/4] relative overflow-hidden flex items-center justify-center bg-zinc-900 group">
             <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                }}
              ></div>
              <h3 className="font-display font-black text-2xl uppercase tracking-tighter text-zinc-700 mix-blend-exclusion z-10 group-hover:scale-105 transition-transform duration-700">
                 Portrait Placeholder
              </h3>
          </div>

          {/* Bio Text */}
          <div className="flex flex-col space-y-8">
            <h2 className="font-display text-4xl lg:text-6xl uppercase tracking-tighter">
              About Manoj
            </h2>
            <div className="font-body text-zinc-400 space-y-6 text-sm md:text-base leading-relaxed tracking-wide font-light">
              <p>
                Manoj Ahuja is a visionary director based in London, known for his compelling visual narratives and distinctive cinematic language. With a background in fine arts and photography, his work transcends traditional boundaries, blending evocative imagery with profound storytelling.
              </p>
              <p>
                His portfolio spans high-end commercials, award-winning music videos, and intimate documentaries. He has collaborated with global brands and independent artists alike, always bringing a meticulous eye for detail and an unwavering commitment to emotional authenticity.
              </p>
              <p>
                Driven by a passion for exploring the human experience, Manoj's films are characterized by their raw intensity, atmospheric lighting, and striking compositions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
