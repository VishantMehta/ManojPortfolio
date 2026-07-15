"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProjectCategory } from "@/data/projects";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  activeCategory: ProjectCategory | "All";
  onCategoryChange: (category: ProjectCategory | "All") => void;
};

export default function Sidebar({ activeCategory, onCategoryChange }: Props) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories: (ProjectCategory | "All")[] = [
    "All",
    "Commercial",
    "Documentary",
    "Music Video",
  ];

  return (
    <aside className="fixed top-0 left-0 w-full lg:w-60 h-auto lg:h-screen z-40 bg-black flex flex-col lg:justify-between p-4 lg:p-8 border-b lg:border-none border-zinc-900">
      <div className="flex flex-col lg:space-y-16 lg:h-full">
        {/* Mobile Header: Logo + Hamburger */}
        <div className="flex flex-row justify-between items-center w-full">
          <Link href="/" className="block" onClick={() => setIsMenuOpen(false)}>
            <h1 className="font-sans font-bold text-3xl lg:text-[3.25rem] lg:leading-[0.95] tracking-tighter text-white hover:opacity-70 transition-opacity">
              Manoj <br className="hidden lg:block" />Ahuja
            </h1>
          </Link>
          <button
            className="lg:hidden text-white hover:opacity-70"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Animated Mobile Menu Container */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto", opacity: 1, marginTop: "2rem" },
            closed: { height: 0, opacity: 0, marginTop: 0 },
          }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="overflow-hidden lg:!h-auto lg:!opacity-100 lg:!overflow-visible lg:!mt-0 flex flex-col justify-between lg:flex-1"
        >
          {/* Navigation / Filters */}
          <nav className="flex flex-col space-y-8 overflow-x-auto no-scrollbar pb-4 lg:pb-0">
            <div className="flex flex-col space-y-3 min-w-max">
              <span className="text-[14px] font-bold text-white tracking-tight mb-1">
                WORK
              </span>
              <ul className="flex flex-col space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        if (pathname !== "/") {
                          window.location.href = `/?filter=${cat}`;
                        } else {
                          onCategoryChange(cat);
                        }
                      }}
                      className={`text-[14px] tracking-tight font-medium transition-colors duration-300 text-left ${
                        activeCategory === cat && pathname === "/"
                          ? "text-white"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-3 min-w-max">
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-[14px] tracking-tight font-bold transition-colors duration-300 ${
                      pathname === "/about"
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Footer / Socials */}
          <div className="flex flex-col space-y-4 mt-8 lg:mt-0">
            <div className="flex space-x-4 items-center">
              <a href="#" className="text-[12px] font-bold text-white hover:text-zinc-400 transition-colors tracking-tight">
                IG
              </a>
              <a href="#" className="text-[12px] font-bold text-white hover:text-zinc-400 transition-colors tracking-tight">
                vimeo
              </a>
            </div>
            <p className="text-[11px] font-medium text-zinc-500 tracking-tight">
              © All rights reserved
            </p>
          </div>
        </motion.div>
      </div>
    </aside>
  );
}
