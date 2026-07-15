"use client";

import React, { useState } from "react";
import { Project, projects, ProjectCategory } from "@/data/projects";
import GridTile from "./GridTile";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  activeCategory: ProjectCategory | "All";
};

export default function WorkGrid({ activeCategory }: Props) {
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full h-full min-h-screen pt-24 lg:pt-0 lg:pl-60">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <GridTile key={project.slug} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
      {filteredProjects.length === 0 && (
        <div className="w-full h-[50vh] flex items-center justify-center text-muted text-sm tracking-widest uppercase">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
