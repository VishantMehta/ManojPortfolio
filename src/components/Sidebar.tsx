"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProjectCategory } from "@/data/projects";

type Props = {
  activeCategory: ProjectCategory | "All";
  onCategoryChange: (category: ProjectCategory | "All") => void;
};

export default function Sidebar({ activeCategory, onCategoryChange }: Props) {
  const pathname = usePathname();

  const categories: (ProjectCategory | "All")[] = [
    "All",
    "Commercial",
    "Documentary",
    "Music Video",
  ];

  return (
    <aside className="fixed top-0 left-0 w-full lg:w-60 h-auto lg:h-screen z-40 bg-black flex flex-col justify-between p-6 lg:p-8 border-b lg:border-none border-zinc-900">
      <div className="flex flex-col space-y-16">
        {/* Huge Name Logo */}
        <Link href="/" className="block">
          <h1 className="font-sans font-bold text-4xl lg:text-[3.25rem] lg:leading-[0.95] tracking-tighter text-white hover:opacity-70 transition-opacity">
            Manoj<br className="hidden lg:block" />Ahuja
          </h1>
        </Link>

        {/* Navigation / Filters */}
        <nav className="flex flex-row lg:flex-col space-x-6 lg:space-x-0 lg:space-y-8 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
          <div className="flex flex-col space-y-3 min-w-max">
            <span className="text-[14px] font-bold text-white hidden lg:block tracking-tight mb-1">
              WORK
            </span>
            <ul className="flex flex-row lg:flex-col space-x-6 lg:space-x-0 lg:space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
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
            <ul className="flex flex-row lg:flex-col space-x-6 lg:space-x-0 lg:space-y-2">
              <li>
                <Link
                  href="/about"
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
      </div>

      {/* Footer / Socials (Hidden on mobile header) */}
      <div className="hidden lg:flex flex-col space-y-4">
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
    </aside>
  );
}
