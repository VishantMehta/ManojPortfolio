"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { projects } from "@/data/projects";

export default function Lightbox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectSlug = searchParams.get("project");

  const project = projects.find((p) => p.slug === projectSlug);

  const closeLightbox = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("project");
    router.push(`/?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && projectSlug) {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [projectSlug, closeLightbox]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (projectSlug) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [projectSlug]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-muted hover:text-white transition-colors p-2 z-50"
            aria-label="Close Lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="w-full max-w-6xl px-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Prevent click outside closing when clicking content
          >
            {/* Video Container (Placeholder for now) */}
            <div className="w-full aspect-video bg-zinc-900 flex items-center justify-center mb-12 shadow-2xl overflow-hidden relative group">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                }}
              ></div>
              <div className="flex flex-col items-center space-y-4">
                <h2 className="font-display font-extrabold text-5xl md:text-7xl text-zinc-800 uppercase tracking-tighter mix-blend-exclusion">
                  {project.title}
                </h2>
                <div className="text-muted text-sm tracking-widest uppercase border border-zinc-800 px-6 py-3 rounded-full group-hover:border-zinc-500 transition-colors duration-500 cursor-not-allowed">
                  Video Coming Soon
                </div>
              </div>
            </div>

            {/* Credits Section */}
            <div className="flex flex-col items-center space-y-2 text-center max-w-2xl">
              <h3 className="font-display text-xl uppercase tracking-widest mb-4">
                {project.title}
              </h3>
              <div className="flex flex-col space-y-1 text-[11px] md:text-[13px] tracking-[0.2em] uppercase text-muted">
                {Object.entries(project.credits).map(([role, name]) => {
                  if (!name) return null;
                  return (
                    <div key={role} className="flex space-x-2 justify-center">
                      <span className="opacity-60 w-24 text-right">
                        {role} :
                      </span>
                      <span className="text-white w-32 text-left">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
