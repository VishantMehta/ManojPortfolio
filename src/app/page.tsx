"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import WorkGrid from "@/components/WorkGrid";
import Lightbox from "@/components/Lightbox";
import { ProjectCategory } from "@/data/projects";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter") as ProjectCategory | "All" | null;
  
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  useEffect(() => {
    if (filterParam && ["All", "Commercial", "Documentary", "Music Video"].includes(filterParam)) {
      setActiveCategory(filterParam as ProjectCategory | "All");
    }
  }, [filterParam]);

  return (
    <main className="flex min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <div className="flex-1 lg:ml-0">
        <WorkGrid activeCategory={activeCategory} />
      </div>
      <Lightbox />
    </main>
  );
}
